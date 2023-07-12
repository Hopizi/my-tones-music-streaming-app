import React from 'react'
import "./styles/CustomInput.css"
import { useField } from 'formik';
import { motion } from 'framer-motion';

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
      {/* <div style={`visibility: ${meta.error ? 'hidden' : 'visible'}; height: ${meta.error ? '1rem' : '0'}`}></div> */}
      {meta.touched && meta.error && (
        <motion.div
          className="error"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {meta.error}
        </motion.div>
      )}
    </>
  );
}

export default CustomInput