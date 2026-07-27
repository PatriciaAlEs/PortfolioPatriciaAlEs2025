import { useEffect, useMemo, useRef, useState } from "react";
import useTranslation from "../hooks/useTranslation.jsx";
import useSessionState from "../hooks/useSessionState.js";

const books = [
  { id: "fantasy", title: "bookshelfFantasy", note: "bookshelfFantasyNote", width: 58, height: 174 },
  { id: "romantasy", title: "bookshelfRomantasy", note: "bookshelfRomantasyNote", width: 62, height: 184 },
  { id: "cats", title: "bookshelfCats", note: "bookshelfCatsNote", width: 58, height: 176 },
  { id: "product", title: "bookshelfProduct", note: "bookshelfProductNote", width: 72, height: 200 },
  { id: "ai", title: "bookshelfAi", note: "bookshelfAiNote", width: 52, height: 194 },
  { id: "readpp", title: "bookshelfReadPp", note: "bookshelfReadPpNote", width: 76, height: 208 },
  { id: "learning", title: "bookshelfLearning", note: "bookshelfLearningNote", width: 64, height: 190 },
  { id: "patricia", title: "bookshelfPatricia", note: "bookshelfPatriciaNote", width: 66, height: 198 }
];

const defaultOrder = books.filter((book) => book.id !== "patricia").map((book) => book.id);

const moveItem = (items, from, to) => {
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
};

export default function InteractiveBookshelf() {
  const { t } = useTranslation();
  const [storedOrder, setStoredOrder] = useSessionState("portfolio-bookshelf-order", defaultOrder);
  const [moveCount, setMoveCount] = useSessionState("portfolio-bookshelf-moves", 0);
  const [noteShown, setNoteShown] = useSessionState("portfolio-bookshelf-note", false);
  const [portfolioSaved, setPortfolioSaved] = useSessionState("portfolio-added-to-library", false);
  const [order, setOrder] = useState(() => {
    const expectedOrder = portfolioSaved ? [...defaultOrder, "patricia"] : defaultOrder;
    const valid = storedOrder.filter((id) => expectedOrder.includes(id));
    return valid.length === expectedOrder.length ? valid : expectedOrder;
  });
  const [activeBook, setActiveBook] = useState("readpp");
  const [dragging, setDragging] = useState(null);
  const [keyboardBook, setKeyboardBook] = useState(null);
  const [announcement, setAnnouncement] = useState("");
  const shelfRef = useRef(null);
  const originalOrderRef = useRef(order);
  const changedRef = useRef(false);
  const pointerStartXRef = useRef(0);

  const orderedBooks = useMemo(
    () => order.map((id) => books.find((book) => book.id === id)),
    [order]
  );

  useEffect(() => {
    const highlight = () => {
      shelfRef.current?.classList.add("is-discovered");
      window.setTimeout(() => shelfRef.current?.classList.remove("is-discovered"), 2200);
    };
    window.addEventListener("portfolio:read-found", highlight);
    return () => window.removeEventListener("portfolio:read-found", highlight);
  }, []);

  useEffect(() => {
    const updatePortfolioBook = (saved) => {
      setPortfolioSaved(saved);
      setOrder((current) => {
        const hasPortfolio = current.includes("patricia");
        if (saved === hasPortfolio) return current;
        const next = saved
          ? [...current, "patricia"]
          : current.filter((id) => id !== "patricia");
        setStoredOrder(next);
        return next;
      });
      setActiveBook(saved ? "patricia" : "readpp");
    };

    if (portfolioSaved) updatePortfolioBook(true);
    const handleToggle = (event) => updatePortfolioBook(Boolean(event.detail?.saved));
    window.addEventListener("portfolio:library-toggled", handleToggle);
    return () => window.removeEventListener("portfolio:library-toggled", handleToggle);
  }, [portfolioSaved, setPortfolioSaved, setStoredOrder]);

  const persistMove = (nextOrder) => {
    setStoredOrder(nextOrder);
    setMoveCount((count) => {
      const nextCount = count + 1;
      if (nextCount >= 3 && !noteShown) setNoteShown(true);
      return nextCount;
    });
  };

  const reorderFromPointer = (clientX) => {
    if (!dragging || !shelfRef.current) return;
    if (Math.abs(clientX - pointerStartXRef.current) < 10) return;
    const buttons = [...shelfRef.current.querySelectorAll("[data-book-id]")];
    const target = buttons.find((button) => clientX < button.getBoundingClientRect().left + button.offsetWidth / 2);
    const targetIndex = target ? order.indexOf(target.dataset.bookId) : order.length - 1;
    const currentIndex = order.indexOf(dragging);
    if (currentIndex === targetIndex) return;
    changedRef.current = true;
    setOrder((current) => moveItem(current, current.indexOf(dragging), targetIndex));
  };

  const startPointerMove = (event, id) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    originalOrderRef.current = order;
    changedRef.current = false;
    pointerStartXRef.current = event.clientX;
    setActiveBook(id);
    setDragging(id);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const finishPointerMove = () => {
    if (!dragging) return;
    if (changedRef.current) {
      persistMove(order);
      setAnnouncement(t("bookshelfMoved").replace("{position}", String(order.indexOf(dragging) + 1)));
    }
    setDragging(null);
  };

  const handleKeyDown = (event, id) => {
    const index = order.indexOf(id);
    if (!keyboardBook && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      originalOrderRef.current = order;
      changedRef.current = false;
      setKeyboardBook(id);
      setActiveBook(id);
      setAnnouncement(t("bookshelfMoveMode"));
      return;
    }
    if (keyboardBook !== id) return;

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const nextIndex = Math.max(0, Math.min(order.length - 1, index + (event.key === "ArrowLeft" ? -1 : 1)));
      if (nextIndex !== index) {
        changedRef.current = true;
        setOrder((current) => moveItem(current, index, nextIndex));
        setAnnouncement(t("bookshelfMoved").replace("{position}", String(nextIndex + 1)));
      }
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (changedRef.current) persistMove(order);
      setKeyboardBook(null);
      setAnnouncement(t("bookshelfMoveConfirmed"));
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOrder(originalOrderRef.current);
      setKeyboardBook(null);
      setAnnouncement(t("bookshelfMoveCancelled"));
    }
  };

  const activeDefinition = books.find((book) => book.id === activeBook);

  return (
    <section className="interactive-bookshelf" aria-labelledby="bookshelf-title">
      <div className="interactive-bookshelf__intro">
        <p>{t("bookshelfEyebrow")}</p>
        <h3 id="bookshelf-title">{t("bookshelfTitle")}</h3>
        <span>{t("bookshelfInstruction")}</span>
      </div>
      <div className="bookshelf-stage" ref={shelfRef}>
        <div className="bookshelf-books" role="list" aria-label={t("bookshelfTitle")}>
          {orderedBooks.map((book, index) => (
            <button
              type="button"
              role="listitem"
              key={book.id}
              data-book-id={book.id}
              className={`bookshelf-book bookshelf-book--${book.id}${dragging === book.id ? " is-dragging" : ""}${keyboardBook === book.id ? " is-keyboard-moving" : ""}`}
              style={{ "--book-width": `${book.width}px`, "--book-height": `${book.height}px`, "--book-index": index }}
              aria-label={`${t(book.title)}. ${t(book.note)} ${t("bookshelfPosition").replace("{position}", String(index + 1)).replace("{total}", String(order.length))}`}
              aria-pressed={keyboardBook === book.id}
              onFocus={() => setActiveBook(book.id)}
              onMouseEnter={() => setActiveBook(book.id)}
              onClick={() => setActiveBook(book.id)}
              onKeyDown={(event) => handleKeyDown(event, book.id)}
              onPointerDown={(event) => startPointerMove(event, book.id)}
              onPointerMove={(event) => reorderFromPointer(event.clientX)}
              onPointerUp={finishPointerMove}
              onPointerCancel={() => {
                setOrder(originalOrderRef.current);
                setDragging(null);
              }}
            >
              <span className="bookshelf-book__title">{t(book.title)}</span>
            </button>
          ))}
        </div>
        <div className="bookshelf-shelf" aria-hidden="true" />
        <aside className="bookshelf-library-card editorial-copy" aria-live="polite">
          <strong>{t(activeDefinition.title)}</strong>
          <span aria-hidden="true" />
          <p>{t(activeDefinition.note)}</p>
        </aside>
      </div>
      <div className="bookshelf-footer">
        <p className="bookshelf-drag-hint">
          <i className="fa-regular fa-hand-pointer" aria-hidden="true" />
          <span>{t("bookshelfDragHint")}</span>
        </p>
        {moveCount >= 3 && noteShown && (
          <p className="bookshelf-curiosity editorial-copy">{t("bookshelfCuriosity")}</p>
        )}
      </div>
      <p className="sr-only" aria-live="polite">{announcement}</p>
    </section>
  );
}
