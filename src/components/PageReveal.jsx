import PropTypes from "prop-types";

export default function PageReveal({ children, className = "" }) {
  return <div className={`page-reveal ${className}`.trim()}>{children}</div>;
}

PageReveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
