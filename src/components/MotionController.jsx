import { useEffect } from "react";

const revealSelectors = [
  ".section-heading",
  ".featured-project__showcase",
  ".architecture-explorer",
  ".secondary-projects__header",
  ".project-card",
  ".capability-row",
  ".timeline",
  ".timeline-item",
  ".education-strip",
  ".process-grid",
  ".about-section__main",
  ".exclusive-section > .page-shell > h2",
  ".exclusive-section > .page-shell > p",
  ".exclusive-grid article"
].join(",");

const titleSelectors = [
  ".section-heading h2",
  ".featured-project h3",
  ".architecture-explorer__heading h4",
  ".secondary-projects__header h3",
  ".about-section__main h2",
  ".exclusive-section h2",
  ".contact-section h2"
].join(",");

export default function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observed = new WeakSet();
    let revealObserver;

    root.classList.add("motion-ready");

    const register = (scope = document) => {
      const titles = [
        ...(scope.matches?.(titleSelectors) ? [scope] : []),
        ...scope.querySelectorAll(titleSelectors)
      ];
      titles.forEach((element) => {
        element.classList.add("editorial-title-reveal");
      });

      const revealItems = [
        ...(scope.matches?.(revealSelectors) ? [scope] : []),
        ...scope.querySelectorAll(revealSelectors)
      ];
      revealItems.forEach((element, index) => {
        if (observed.has(element)) return;
        observed.add(element);
        element.classList.add("scroll-reveal");
        element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);

        if (reducedMotion) element.classList.add("is-visible");
        else revealObserver.observe(element);
      });
    };

    if (!reducedMotion) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }

    register();
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) register(node);
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver?.disconnect();
      mutationObserver.disconnect();
      root.classList.remove("motion-ready", "is-language-changing");
    };
  }, []);

  return null;
}
