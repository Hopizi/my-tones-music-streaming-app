import React from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  async function signIn(email, password) {
    console.log('function triggered')
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setCurrentUser(userCredentials.user);
      console.log(currentUser);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  }

  async function logOut() {
    try {
      await signOut(auth);
      console.log("Logged Out !");
      navigate("/login");
      localStorage.removeItem('user')
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const user = currentUser;

      if (user) {
        const userId = currentUser.uid;
        let userData = [];

        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          userData = docSnap.data();
          setUserData(userData);
        } else {
          console.log("No such document!");
        }
      }else {
        console.log("User is Not Logged in")
      }
    };
    fetchData();
  }, []);

  const authContextValue = {
    currentUser,
    error,
    signIn,
    signInWithGoogle,
    logOut,
    userData,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
