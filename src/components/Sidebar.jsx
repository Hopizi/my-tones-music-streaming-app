import React, { useContext } from 'react'
import "./styles/Sidebar.css"
import { menuLinks,libraryLinks, playlistsLinks, othersLink } from '../helpers/SidebarLinks'
import { Logo } from '../assets/sidebar-icons'
import { AuthContext } from '../context/AuthenticationContext'
import { Link } from 'react-router-dom'

function Sidebar({setSelectedLink}) {

    const {logOut} = useContext(AuthContext)


    const iconsStyle = {
        marginRight: "20px"
    }

  return (
    <div className='side-bar-main-container'>
        <div className="main-logo-container">
            <div className='inner-logo-text-contianer'>
                <div className='logo-contianer'>
                    <Logo style={{width: '12px', height: "12px", fill: '#fff'}}/>
                </div>
                <h1>Mytones</h1>
            </div>
        </div>
        <div className="sidebar-menu">
            <ul>
                <p>MENU</p>
                {
                    menuLinks.map((menuLink, index) => {
                        return <Link to={menuLink.path}><li key={index} onClick={() => setSelectedLink(menuLink.title)}>{<menuLink.icon style={iconsStyle}/>}{menuLink.title}</li></Link>
                    })
                }
            </ul>
            <ul>
                <p>LIBRARY</p>
                {
                    libraryLinks.map((libraryLink, index) => {
                        return <li key={index} onClick={() => setSelectedLink(libraryLink.title)}>{<libraryLink.icon style={iconsStyle}/>}{libraryLink.title}</li>
                    })
                }
            </ul>
            <ul>
                <p>PLAYLIST</p>
                {
                    playlistsLinks.map((playlistLink, index) => {
                        return <li key={index} onClick={() => setSelectedLink(playlistLink.title)}>{<playlistLink.icon style={iconsStyle}/>}{playlistLink.title}</li>
                    })
                }
            </ul>
            <ul>
                <p>OTHERS</p>
                {
                    othersLink.map((othersLink, index) => {
                        return <Link to={othersLink.title === 'Settings' ? othersLink.path : ''}><li key={index} onClick={ othersLink.title === "Logout" ? logOut : () => setSelectedLink(othersLink.title)}>{<othersLink.icon style={iconsStyle}/>}{othersLink.title}</li></Link>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar