import { useState } from 'react'
import '../css/Navbar.css'
import '../css/text.css'
import filler_logo from '../assets/images/filler-logo.png'

function Navbar() {
  return (
    <>
      <nav id='navbar'>
        <div id='navbar-container'>
          <a href="/">
            <img id='navbar-logo' src={filler_logo}></img>
          </a>
          <div id='navbar-links'>
            <a href="/log-in" className="medium paragraph">Log In</a>
            <a href="/sign-up" className="medium paragraph primary-cta">Sign Up</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar