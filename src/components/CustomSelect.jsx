import React from 'react'
import { useField } from "formik";

function CustomSelect({ label, ...props }) {

    const [field, meta, helpers] = useField(props);

  return (
    <div className='select-main-container'>
      <div className='select-inner-container'>
        <label>{label}</label>
        <select
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
      </div>
      <div className='select-error'>
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </div>
    </div>
  );
}

export default CustomSelect