import React from "react";
import "./styles/CustomInput.css";
import { useField } from "formik";
import { motion } from "framer-motion";

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
    </div>
  );
}

export default CustomAgeInput;
