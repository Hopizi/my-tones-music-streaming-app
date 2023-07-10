import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/Login.css"
import {ContinueWith, Button} from "../components"
import {loginMethods} from "../helpers/LoginWithMethods"
import { Logo } from '../assets/sidebar-icons'
import { Link } from 'react-router-dom'
import { Hide, Show } from '../assets/main-display-icons'
import { AuthContext } from '../context/AuthenticationContext'
import { useFormik } from 'formik'
import { loginSchema } from '../custom/schemas/LoginSchema'

function Login() {
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')

    const {currentUser, error, signInWithGoogle, signIn} = useContext(AuthContext)

    const {values, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            const {email, password} = values;
            signIn(email, password);
        }
    });

  return (
    <div className="login-page-main-container">
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
      <div className="login-page-row-2">
        <div className="login-page-main">
          <div className="login-with-external">
            <h1>Log in to Mytones </h1>
            <div className="inner-login-with-external">
              {loginMethods.map((methods, index) => {
                return (
                  <ContinueWith
                    loginMethod={methods.method}
                    icon={
                      <methods.icon className="login-with-icons" key={index} />
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className="login-with-email">
            <form className="form-login-with-email" onSubmit={handleSubmit}>
              <div className="actual-forms">
                <label>Email or Username</label>
                <input
                  id="email"
                  type="text"
                  value={values.email}
                  placeholder="Email or Username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="actual-forms password-show-hide">
                <label>Password</label>
                <input
                  id="password"
                  value={values.password}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Hide className="show-hide" />
              </div>
              {error && (
                <div className="wrong-email-password">
                  <p>Wrong email or password</p>
                </div>
              )}
              <div className="remeber-me-login">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <div className="login-btn-main">
                <Button text="Log In" style="width-100" />
              </div>
              <Link to='/forgot-password'>
                <p className="password-forgot">Forgot your password?</p>
              </Link>
            </form>
          </div>
          <div className="login-dont-have-acct">
            <p>Don't have an account?</p>
            <Link to="/signup">
              <p style={{ cursor: "pointer", color: "#4343ef" }}>
                Sign up for Mytones
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login