import React from 'react'
import "./styles/Button.css"

function Button({text, style, onClick, disabled}) {
  return (
    <button className={`btn-main-container ${style}`} onClick={onClick} disabled={disabled}>
        {text}
    </button>
  )
}

export default Button