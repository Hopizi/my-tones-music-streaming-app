import React from "react";
import "./styles/CustomInput.css";
import { useField } from "formik";

function CustomCheckBox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      <label htmlFor={props.name}>{label}</label>
    </>
  );
}

export default CustomCheckBox;
