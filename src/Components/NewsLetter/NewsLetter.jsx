import React from 'react'
import "./NewsLetter.css"

function NewsLetter() {
  return (
    <div className='news-letter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>Subscribe to our newsletter and stay update</p>
        <div>
            <input type="email" placeholder='Your Email Address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter