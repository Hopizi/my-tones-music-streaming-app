import React, { useContext } from 'react'
import "./styles/Discover.css"
import {OurFeatures, TopArtists, TopCollections, TopGenres} from "../components"
import { ThemeContext } from "../context/DarkMode";

function Discover() {

    const {theme} = useContext(ThemeContext);

  return (
    <div className="discover-page-main" id={theme}>
      <div className="main-page-row-1">
        <OurFeatures />
      </div>
      <div className="main-page-row-2">
        <TopArtists />
      </div>
      <div className="main-page-row-3">
        <div className="main-page-row-3-col-1" id={theme}>
          <TopCollections />
        </div>
        <div className="main-page-row-3-col-2" id={theme}>
          <TopGenres />
        </div>
      </div>
    </div>
  );
}

export default Discover