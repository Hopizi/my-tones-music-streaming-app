import React from 'react'
import "./styles/Button.css"

function Button({text, style}) {
  return (
    <button className={`btn-main-container ${style}`}>
        {text}
    </button>
  )
}

export default Button