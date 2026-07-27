import PropTypes from "prop-types";
import useTranslation from "../hooks/useTranslation.jsx";

export default function EditorialNote({ textKey, className = "" }) {
  const { t } = useTranslation();
  return <aside className={`editorial-note editorial-copy ${className}`.trim()}>{t(textKey)}</aside>;
}

EditorialNote.propTypes = {
  textKey: PropTypes.string.isRequired,
  className: PropTypes.string
};
