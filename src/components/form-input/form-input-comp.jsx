import React from "react";
import './form-input-styles.scss'

const FormInput = ({ label, inputProps}) => {
  return (
    <div className="form-block">
      
      <input className="form-input" {...inputProps} />

      {label && (
        <label
          className={`${
            inputProps.value.length ? "diminish" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}

    </div>
  );
};

export default FormInput;
