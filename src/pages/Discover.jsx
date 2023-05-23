import React from 'react'
import "./styles/Discover.css"
import {OurFeatures, TopArtists, TopCollections, TopGenres} from "../components"

function Discover() {
  return (
    <div className='discover-page-main'>
        <div className='main-page-row-1'>
            <OurFeatures />
        </div>
        <div className='main-page-row-2'>
            <TopArtists />
        </div>
        <div className='main-page-row-3'>
            <div className='main-page-row-3-col-1'>
                <TopCollections />
            </div>
            <div className='main-page-row-3-col-2'>
                <TopGenres />
            </div>
        </div>
    </div>
  )
}

export default Discover