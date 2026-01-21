import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useTranslation from "../hooks/useTranslation.jsx";

export default function CVModal() {
  const { store, dispatch } = useGlobalReducer();
  const { t } = useTranslation();
  return (
    <div className={`modal fade ${store.ui.cvOpen ? "show d-block" : ""}`} tabIndex="-1" onClick={() => dispatch({ type: "closeCV" })}>
      <div className="modal-dialog modal-lg modal-dialog-centered" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{t("cvTitle")}</h5>
            <button className="btn-close" onClick={() => dispatch({ type: "closeCV" })} />
          </div>
          <div className="modal-body">
            <ul className="list-unstyled mb-0">
              <li><strong>{t("stack")}:</strong> {t("stackValue")}</li>
              <li><strong>{t("experience")}:</strong> {t("experienceValue")}</li>
              <li><strong>{t("focus")}:</strong> {t("focusValue")}</li>
            </ul>
          </div>
        </div>
      </div>
      {store.ui.cvOpen && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
