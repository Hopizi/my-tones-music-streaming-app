import React from 'react'
import "./styles/TopCollections.css"
import TopCollectionCard from './TopCollectionCard'

function TopCollections() {
  return (
    <div className='top-collections-main'>
        <div className='top-collections-header-section'>
            <h2>TOP COLLECTION</h2>
            <p>More List</p>
        </div>
        <div className='top-collections'>
            <div className='top-collection-actual-section'>
                <TopCollectionCard />
                <TopCollectionCard />
                <TopCollectionCard />
                <TopCollectionCard />
                <TopCollectionCard />
                <TopCollectionCard />   
            </div>
        </div>
    </div>
  )
}

export default TopCollections