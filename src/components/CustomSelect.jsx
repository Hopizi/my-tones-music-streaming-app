import React from 'react'
import { useField } from "formik";
import { motion } from "framer-motion";

function CustomSelect({ label, ...props }) {

    const [field, meta, helpers] = useField(props);

  return (
    <div className="select-main-container">
      <div className="select-inner-container">
        <label>{label}</label>
        <select
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
      </div>
      <div className="select-error">
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
      </div>
    </div>
  );
}

export default CustomSelect