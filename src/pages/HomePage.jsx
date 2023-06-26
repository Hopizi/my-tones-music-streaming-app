import React, { useState, useEffect, useContext } from "react";
import "./styles/HomePage.css";
import { Sidebar, Navbar, Top100Weekly, NowPlaying } from "../components";
import {
  Discover,
  Explore,
  MyMusic,
  Albums,
  Artists,
  Favourites,
  Shared,
  Download,
  Settings,
} from "../pages";
import { AuthContext } from "../context/AuthenticationContext";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Router, Route, Routes } from "react-router-dom";
import { ThemeContext } from "../context/DarkMode";

function HomePage() {
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="home-page-main-container" id={theme}>
      <div className="sidebar-container">
        <Sidebar currentLink="Discover" />
      </div>
      <div className="col-2-main">
        <div className="user-navbar">
          <Navbar />
        </div>
        <div className="music-space-main">
          <div className="main-page-display">
            <Discover />
          </div>
          <div className="main-page-col-2">
            <div className="top-100-main">
              <Top100Weekly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
