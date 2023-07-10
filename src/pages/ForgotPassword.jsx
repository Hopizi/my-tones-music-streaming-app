import React from 'react'
import "./styles/ForgotPassword.css";
import { Button } from '../components';
import { Logo } from "../assets/sidebar-icons";
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="forgot-password-main-container">
      <div className="login-page-header">
        <Link to="/">
          <div className="login-inner-logo-text-contianer">
            <div className="login-logo-contianer">
              <Logo style={{ width: "30px", height: "30px", fill: "#fff" }} />
            </div>
            <h1>Mytones</h1>
          </div>
        </Link>
      </div>
      <div>
        <h1>Please enter your Email to receive Code</h1>
      </div>
      <div className="forgot-inner-container">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Please Enter Your Email" name="email" />
        <div className="btn-container-forgt-p">
          <Button text="Reset Password" />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword