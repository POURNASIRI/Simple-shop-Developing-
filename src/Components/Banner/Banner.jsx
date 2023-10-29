import React from 'react'
import './Banner.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
function Banner() {
  return (
    <div className='banner'>
        <div className="banner-left">
            <h2>BEST THINTHG FOR BEST HUMEN</h2>
            <div>
                <div className="hand-hand-icon">
                <p>NEW</p>
                <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="banner-latest-btn">
                <h3>Latest Collection</h3>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="banner-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Banner