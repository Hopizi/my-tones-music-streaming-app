import React from "react";
import "./styles/CustomInput.css";
import { useField } from "formik";

function CustomAgeInput({yearStyle, label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={`main-date-input`}>
      <div className={`${yearStyle}`}>
        <div className="inner-main-date-input">
          <label>{label}</label>
          <input
            {...field}
            {...props}
            className={meta.touched && meta.error ? "input-error" : ""}
          />
        </div>
        <div>
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomAgeInput;
