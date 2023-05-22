import React from 'react'
import "./styles/Sidebar.css"
import { menuLinks,libraryLinks, playlistsLinks, othersLink } from '../helpers/SidebarLinks'
import { Logo } from '../assets/sidebar-icons'

function Sidebar() {


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
                        return <li key={index}>{<menuLink.icon style={iconsStyle}/>}{menuLink.title}</li>
                    })
                }
            </ul>
            <ul>
                <p>LIBRARY</p>
                {
                    libraryLinks.map((libraryLink, index) => {
                        return <li key={index}>{<libraryLink.icon style={iconsStyle}/>}{libraryLink.title}</li>
                    })
                }
            </ul>
            <ul>
                <p>PLAYLIST</p>
                {
                    playlistsLinks.map((playlistLink, index) => {
                        return <li key={index}>{<playlistLink.icon style={iconsStyle}/>}{playlistLink.title}</li>
                    })
                }
            </ul>
            <ul>
                <p>OTHERS</p>
                {
                    othersLink.map((othersLink, index) => {
                        return <li key={index}>{<othersLink.icon style={iconsStyle}/>}{othersLink.title}</li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar