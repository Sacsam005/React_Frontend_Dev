import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <>
      <button
        className="btn add-btn rounded-0"
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

Button.defaultProps = {
  color: "green",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
