import React from 'react'
import "./styles/ContinueWith.css"

function ContinueWith({icon, loginMethod}) {
  return (
    <div className='continue-with-login-method'>
        {icon}
        <p>Continue With {loginMethod}</p>
    </div>
  )
}

export default ContinueWith