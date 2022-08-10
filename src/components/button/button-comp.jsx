import React from "react";
import "./button-styles.scss";

const Button = ({ children, feature, ...buttonProps }) => {
  return (
    <button {...buttonProps} className={`button-container ${feature}`}>
      {children}
    </button>
  );
};

export default Button;
