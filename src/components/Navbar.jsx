import React, { useContext, useEffect, useState } from 'react'
import "./styles/Navbar.css"
import {navbarLinks} from "../helpers/NavbarLinks"
import { ProfileHolder } from '../assets/main-display-icons' 
import { SearchIcon, Like, Notification, DropDown, ProfilePic, ProfilePicHolder} from '../assets/navbar-icons'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthenticationContext'
import { db } from '../config/firebase'
import { doc, getDoc } from 'firebase/firestore';
import { UserDetailsContext } from '../context/UserDetails'
import { ThemeContext } from '../context/DarkMode'

function Navbar() {

    const {currentUser} = useContext(AuthContext)
    const {userData} = useContext(AuthContext)
    const { theme } = useContext

    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
      setUserInfo(userData)
    }, [userData])
    

  return (
    <div className="navbar-main-container">
      <div className="nav-items-container">
        <ul>
          {navbarLinks.map((navItems, index) => {
            return <li key={index}>{navItems.title}</li>;
          })}
        </ul>
      </div>
      <div className="search-main">
          
      </div>
      <div className="other-none-items">
        {!currentUser ? (
          <div className="navbar-login">
            <Link to="/login">
              <Button text="Login" />
            </Link>
          </div>
        ) : (
          <React.Fragment>
            <div className="utility-items">
              <Like className="utility-icons" />
              <Notification className="utility-icons" />
            </div>
            <div className="user-info-section">
              <div className="user-profile-pic" style={!currentUser ? {visibility: "hidden"} : {}}>
                <img src={userInfo?.profile_pic} />
              </div>
              <div className="user-name">
                <p>{userInfo?.userName}</p>
                <DropDown />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Navbar