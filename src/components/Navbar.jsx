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

function Navbar({navUserData}) {

    const {currentUser} = useContext(AuthContext)
    // const [userNavData ,setUserNavData] = useState()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const userId = currentUser.uid;

    //         let userData = []
            
    //         const docRef = doc(db, "users", userId);
    //         const docSnap = await getDoc(docRef);

    //         if (docSnap.exists()) {
    //             userData = docSnap.data()
    //             setUserNavData(userData)
    //         } else {
    //         console.log("No such document!");
    //         }
    //     }
    //     fetchData();
    // }, [])

    // useEffect(() => {
    //     console.log(userNavData);
    // }, [userNavData]);


  return (
    <div className='navbar-main-container'>
        <div className='nav-items-container'>
            <ul>
            {
                navbarLinks.map((navItems, index) => {
                    return <li key={index}>{navItems.title}</li>
                })
            }
            </ul>
        </div>
        <div className='search-main'>
            <div className='inner-search-main'>   
                <input placeholder='Search...'/>
                <SearchIcon className='search-icon'/>
            </div>
        </div>
        <div className='other-none-items'>
            {
                !currentUser ? 
                (<div className='navbar-login'>
                <Link to='/login'>
                    <Button text='Login'/>
                </Link>
                </div>)
                : (<React.Fragment>
                    <div className='utility-items'>
                        <Like className='utility-icons'/>
                        <Notification className='utility-icons'/>
                    </div>
                    <div className='user-info-section'>
                        <div className="user-profile-pic">
                            <img src={navUserData?.img}/>
                        </div>
                        <div className="user-name">
                            <p>{navUserData?.userName}</p>
                            <DropDown />
                        </div>
                    </div>
                </React.Fragment>)
            }
        </div>
    </div>
  )
}

export default Navbar