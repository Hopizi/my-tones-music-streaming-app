import React from 'react'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, googleProvider } from '../config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword} from "firebase/auth"

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [error, setError] = useState(false)

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])
  


  async function signIn(email, password) {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            setCurrentUser(userCredentials.user);
            console.log(currentUser)
            navigate('/')
        }catch(err) {
            console.log(err)
            setError(true)
        }
    }

  async function signInWithGoogle() {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch(err) {
            console.log(err)
        }
    }

  async function logOut() {
        try {
            await signOut(auth)
            console.log("Logged Out !")
        } catch(err) {
            console.log(err)
        }
        navigate("/login")
    }

  const authContextValue = {
    currentUser,
    error,
    signIn,
    signInWithGoogle,
    logOut
  }

  return (
    <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
  )
}
