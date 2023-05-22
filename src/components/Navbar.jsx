import React from 'react'
import "./styles/Navbar.css"
import {navbarLinks} from "../helpers/NavbarLinks"
import { SearchIcon, Like, Notification, DropDown, ProfilePic} from '../assets/navbar-icons'

function Navbar() {
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
            <div className='utility-items'>
                <Like className='utility-icons'/>
                <Notification className='utility-icons'/>
            </div>
            <div className='user-info-section'>
                <div className="user-profile-pic">
                    <img src={ProfilePic}/>
                </div>
                <div className="user-name">
                    <p>Ryan Ahzhari</p>
                    <DropDown />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar