import React from "react";
import "./button-styles.scss";

const Button = ({ children, feature, isLoading, ...buttonProps }) => {
  return (
    <button {...buttonProps} className={`button-container ${feature}`}>
      {isLoading ? <div className="spinner" /> : children}
    </button>
  );
};

export default Button;
