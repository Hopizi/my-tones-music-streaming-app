import React, { useContext } from "react";
import "./styles/Sidebar.css";
import {
  menuLinks,
  libraryLinks,
  playlistsLinks,
  othersLink,
} from "../helpers/SidebarLinks";
import { Logo } from "../assets/sidebar-icons";
import { AuthContext } from "../context/AuthenticationContext";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/DarkMode";

function Sidebar({ setSelectedLink, currentLink}) {
  const { logOut } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const iconsStyle = {
    marginRight: "20px",
  };

  const title = currentLink;

  function getBackgroundColor() {
    if (theme === "dark") {
      return {}
    }else {
      return { backgroundColor: "#f0f0f5" };
    }
  }

  return (
    <div className="side-bar-main-container" id={theme}>
      <div className="main-logo-container">
        <div className="inner-logo-text-contianer">
          <div className="logo-contianer">
            <Logo style={{ width: "12px", height: "12px", fill: "#fff" }} />
          </div>
          <h1>Mytones</h1>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <p>MENU</p>
          {menuLinks.map((menuLink, index) => {
            return (
              <Link to={menuLink.path}>
                <li key={index} onClick={() => setSelectedLink(menuLink.title)} style={menuLink.title === title ? getBackgroundColor() : {}} id={theme}>
                  {<menuLink.icon style={iconsStyle} />}
                  {menuLink.title} 
                  {menuLink.title === title ? <div className="list-indicator"></div> : ""}
                </li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <p>LIBRARY</p>
          {libraryLinks.map((libraryLink, index) => {
            return (
              <Link to={libraryLink.path}>
                <li
                  key={index}
                  onClick={() => setSelectedLink(libraryLink.title)}
                  style={
                    libraryLink.title === title ? getBackgroundColor() : {}
                  }
                  id={theme}
                >
                  {<libraryLink.icon style={iconsStyle} />}
                  {libraryLink.title}
                  {libraryLink.title === title ? (
                    <div className="list-indicator"></div>
                  ) : (
                    ""
                  )}
                </li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <p>PLAYLIST</p>
          {playlistsLinks.map((playlistLink, index) => {
            return (
              <Link to={playlistLink.path}>
                <li
                  key={index}
                  onClick={() => setSelectedLink(playlistLink.title)}
                  style={
                    playlistLink.title === title ? getBackgroundColor() : {}
                  }
                  id={theme}
                >
                  {<playlistLink.icon style={iconsStyle} />}
                  {playlistLink.title}
                  {playlistLink.title === title ? (
                    <div className="list-indicator"></div>
                  ) : (
                    ""
                  )}
                </li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <p>OTHERS</p>
          {othersLink.map((othersLink, index) => {
            return (
              <Link to={othersLink.title === "Settings" ? othersLink.path : ""}>
                <li
                  key={index}
                  onClick={
                    othersLink.title === "Logout"
                      ? logOut
                      : () => setSelectedLink(othersLink.title)
                  }
                  style={othersLink.title === title ? getBackgroundColor() : {}}
                  id={theme}
                >
                  {<othersLink.icon style={iconsStyle} />}
                  {othersLink.title}
                  {othersLink.title === title ? (
                    <div className="list-indicator"></div>
                  ) : (
                    ""
                  )}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
