import { ButtonHTMLAttributes, FC } from "react";

import "./button-styles.scss";

export type ButtonProps = {
  children: string;
  feature?: string;
  isLoading?: boolean
}& ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, feature, isLoading, ...buttonProps }) => {
  return (
    <button {...buttonProps} className={`button-container ${feature}`}>
      {isLoading ? <div className="spinner" /> : children}
    </button>
  );
};

export default Button;
