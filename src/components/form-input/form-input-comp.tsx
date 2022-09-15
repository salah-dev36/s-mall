import React, { FC, InputHTMLAttributes } from "react";
import "./form-input-styles.scss";

export type FormInputLabelProps = {
  label: string;
  inputProps :InputHTMLAttributes<HTMLInputElement>
}

const FormInput: FC<FormInputLabelProps> = ({ label, inputProps }) => {
  return (
    <div className="form-block">
      <input className="form-input" {...inputProps} />

      {label && (
        <label
          className={`${
            inputProps.value && typeof inputProps.value === 'string' &&inputProps.value.length ? "diminish" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
