import React from 'react'
import "./styles/CustomInput.css"
import { useField } from 'formik';

function CustomInput({label, ...props}) {

    const [field, meta, helpers] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  );
}

export default CustomInput