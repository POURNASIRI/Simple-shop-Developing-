import React from 'react'
import './css/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='loginSignup'>
        <div className="LoginSignup-container">
          <h1>Sign Up</h1>
          <div className="LoginSignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Container</button>
          <p className='LoginSignup-login'>Already have an account?<span>Login here</span></p>
          <div className="LoginSignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup