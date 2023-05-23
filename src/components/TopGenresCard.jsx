import React from 'react'
import "./styles/TopGenresCard.css"
import {topGenresInfo} from "../helpers/TopGenresCards"

function TopGenresCard() {
  return (
    <>
        {
            topGenresInfo.map((card, index) => {
                return (<div className='top-genres-card-main' key={index} style={{backgroundColor: `${card.color}`}}>
                        <p>{card.genres}</p>
                        </div>)
        })
        }
    </>
  )
}

export default TopGenresCard