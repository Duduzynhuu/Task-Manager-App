import React from "react";
import PropTypes from "prop-types";
import "./Style.css";

const Button = ({ text, color, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Close",
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
