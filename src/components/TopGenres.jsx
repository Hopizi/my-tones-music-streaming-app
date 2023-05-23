import React from 'react'
import "./styles/TopGenres.css"
import TopGenresCard from './TopGenresCard'

function TopGenres() {
  return (
    <div className='top-genres'>
        <div className='top-genres-header'>
            <h2>TOP GENRES</h2>
            <p>More List</p>
        </div>
        <div className='top-genres-btn'>
            <div className='top-genres-btn-inner'>
                <TopGenresCard />
            </div>
        </div>
    </div>
  )
}

export default TopGenres