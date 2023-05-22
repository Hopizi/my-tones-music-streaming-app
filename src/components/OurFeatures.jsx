import React from 'react'
import "./styles/OurFeatures.css"
import Button from './Button'

function OurFeatures() {
  return (
    <div className='our-features-main-container'>
        <div className='inner-our-features'>
            <h3>OUR FEATURES</h3>
            <h1>Get Premium Access & Unlock All Popular Songs</h1>
            <div className="get-trial-call-to-action">
                <Button text={'Get Now'} style={"our-features"}/>
                <p>1 Month Free Trial</p>
            </div>
        </div>
        
    </div>
  )
}

export default OurFeatures