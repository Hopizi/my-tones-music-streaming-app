import React from 'react'
import "./styles/ToastNotifications.css";
import { motion } from 'framer-motion';

function ToastNotifications({message}) {
  return (
    <motion.div 
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: -20}}
    className='toast-notifications'>
        {message}
    </motion.div>
  )
}

export default ToastNotifications