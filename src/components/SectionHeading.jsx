import PropTypes from "prop-types";

export default function SectionHeading({ eyebrow, title, accent }) {
  return (
    <header className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title} {accent && <em>{accent}</em>}</h2>
    </header>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  accent: PropTypes.string
};
