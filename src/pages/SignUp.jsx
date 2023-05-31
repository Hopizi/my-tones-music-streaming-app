import React, { useState } from 'react'
import './styles/SignUp.css'
import { Facebook, Google, Apple, Hide, Show } from "../assets/main-display-icons"
import {ContinueWith, Button} from "../components"
import { Logo } from '../assets/sidebar-icons'
import { Link } from 'react-router-dom'
import { doc, setDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from '../config/firebase'
import {createUserWithEmailAndPassword} from "firebase/auth"

function SignUp() {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [userdate, setUserDate] = useState('')
    const [userMonth, setUserMonth] = useState('')
    const [userYear, setUserYear] = useState('')
    const [userGender, setUserGender] = useState('')
    const [userPrefrence, setUserPrefrence] = useState({
    })

    function handleUserPrefrenceChange(e) {
        const {name, checked} = e.target
        setUserPrefrence((prev) => ({
            ...prev,
            [name] : checked
        })             
    )
    }

    async function createANewUser(e) {
        e.preventDefault()
        try {
            const res = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
            await setDoc(doc(db, "users", res.user.uid), {
                userName: userName,
                email: userEmail,
                gender: userGender,
                dateOfBirth: `${userdate}-${userMonth}-${userYear}`,
                promotionsInfo: userPrefrence,
                timeAcctCreate: serverTimestamp()
            })
        }catch(error) {
            console.log(error)
        }
    }



  return (
    <div className='sign-up-main-container'>
        <div className='sign-up-card-main'>
            <div className='sign-up-logo'>
                <Link to='/'>
                    <div className='login-inner-logo-text-contianer'>
                    <div className='login-logo-contianer'>
                        <Logo style={{width: '30px', height: "30px", fill: '#fff'}}/>
                    </div>
                    <h1>Mytones</h1>
                    </div>
                </Link>
            </div>
            <div className='sign-up-with-container'>
                <h1>Sign up for free to start listening.</h1>
                <div className='inner-sign-up-btn'>
                    <div className='continue-with-login-method'>
                    <Facebook className='login-with-icons'/>
                    <p>Sign up with Facebook</p>
                    </div>
                    <div className='continue-with-login-method'>
                        <Google className='login-with-icons'/>
                        <p>Sign up with Google</p>
                    </div>
                </div>
            </div>
            <div className='sign-up-form'>
                <form className='form-sign-up'>
                    <div className='inputs-for-sign-up'>
                        <label>What's your email</label>
                        <input 
                        type='text' 
                        placeholder='Enter your email adress' 
                        onChange={(e) => {
                            setUserEmail(e.target.value)
                        }}/>
                    </div>
                    <div className='inputs-for-sign-up password-show-hide'>
                        <label>Create a password</label>
                        <input 
                        type='password' 
                        placeholder='Enter your password' 
                        onChange={(e) => {setPassword(e.target.value)}} />
                        <Show className='show-hide-sign-up'/>
                    </div>
                    <div className='inputs-for-sign-up'>
                        <label>Enter a Username</label>
                        <input 
                        type='text' 
                        placeholder='Enter a username' 
                        onChange={(e) => {setUserName(e.target.value)}} />
                    </div>
                    <div className='date-of-birth'>
                        <div>
                            <label>Day</label>
                            <input type='text' placeholder='DD' onChange={(e) => {setUserDate(e.target.value)}} />
                        </div>
                        <div>
                            <label>Month</label>
                            <select onChange={(e) => {setUserMonth(e.target.value)}} >
                                <option>Month</option>
                            </select>
                        </div>
                        <div>
                            <label>Year</label>
                            <input type='text' placeholder='YYYY' onChange={(e) => {setUserYear(e.target.value)}} />
                        </div>
                    </div>
                    <div className='gender-section'>
                        <p>What's your gender?</p>
                        <div className='checkbox-gender-section'>
                            <input 
                            type='radio'
                            value='male'
                            checked={userGender === 'male'}
                            onChange={(e) => {setUserGender(e.target.value)}}
                            /><label>Male</label>
                            <input 
                            type='radio'
                            value='female'
                            checked={userGender === 'female'}
                            onChange={(e) => {setUserGender(e.target.value)}}
                            /><label>Female</label>
                            <input 
                            type='radio'
                            value='prefer-not-to-say'
                            checked={userGender === 'prefer-not-to-say'}
                            onChange={(e) => {setUserGender(e.target.value)}}
                            /><label>Pefer not to say</label>
                        </div>
                    </div>
                    <div className='agree-to-terms-and-conditions'>
                        <div>
                            <input 
                            type='checkbox'
                            name='marketingMessages'
                            
                            onChange={handleUserPrefrenceChange}
                            /><label>I would prefer not to receive marketing messages from Mytones</label>
                        </div>
                        <div>
                            <input 
                            type='checkbox'
                            name='shareRegistrationData'
                            onChange={handleUserPrefrenceChange}
                            /><label>Share my registration data with Mytone's content providers for marketing purposes.</label>
                        </div>
                        <p>By clicking on sign-up, you agree to the <span className='sign-up-links'>Mytones Terms and Conditions</span> and <span className='sign-up-links'>Privacy Policy</span>.</p>
                    </div>
                    <div className='btn-container-sign-up'>
                        <Button text='Sign Up' style='sign-up-btn' onClick={createANewUser}/>
                    </div>
                </form>
            </div>
            <p className='login-redirect'>Have an account? <Link to='/login'><span className='sign-up-links'>Log in</span></Link>.</p>
        </div>
    </div>
  )
}

export default SignUp