import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/Login.css"
import {ContinueWith, Button} from "../components"
import {loginMethods} from "../helpers/LoginWithMethods"
import { Logo } from '../assets/sidebar-icons'
import { Link } from 'react-router-dom'
import { Hide, Show } from '../assets/main-display-icons'
import { AuthContext } from '../context/AuthenticationContext'

function Login() {
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')

    const {currentUser, error, signInWithGoogle, signIn} = useContext(AuthContext)

  return (
    <div className='login-page-main-container'>
        <div className='login-page-header'>
            <Link to='/'>
                <div className='login-inner-logo-text-contianer'>
                    <div className='login-logo-contianer'>
                        <Logo style={{width: '30px', height: "30px", fill: '#fff'}}/>
                    </div>
                    <h1>Mytones</h1>
                </div>
            </Link>
        </div>
        <div className='login-page-row-2'>
            <div className='login-page-main'>
                <div className='login-with-external'>
                    <h1>Log in to Mytones </h1>
                    <div className='inner-login-with-external'>
                    {
                        loginMethods.map((methods, index) => {
                            return (<ContinueWith loginMethod={methods.method} icon={<methods.icon className='login-with-icons' key={index}/>}/>)
                        })
                    }
                    </div>
                </div>
                <div className='login-with-email'>
                    <form className='form-login-with-email'>
                        <div className='actual-forms'>
                            <label>Email or Username</label>
                            <input type='text' placeholder='Email or Username' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='actual-forms password-show-hide'>
                            <label>Password</label>
                            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                            <Hide className='show-hide'/>
                        </div>
                        { error && 
                        <div className='wrong-email-password'>
                            <p>Wrong email or password</p>
                        </div>
                        }
                        <div className='remeber-me-login'>
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </div>
                        <div className='login-btn-main'>
                            <Button text='Log In' style='width-100' onClick={(e) => {
                            e.preventDefault()
                            signIn(email, password)}}/>
                        </div>
                        <p className='password-forgot'>Forgot your password?</p>
                    </form>
                </div>
                <div className='login-dont-have-acct'>
                     <p>Don't have an account?</p>
                     <Link to='/signup'>
                        <p style={{cursor: "pointer", color:'#4343ef'}}>Sign up for Mytones</p>
                     </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login