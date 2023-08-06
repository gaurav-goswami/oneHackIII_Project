import { useState } from 'react'
import './Navbar.css'
import './text.css'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav id='navbar'>
        <div id='navbar-container'>
          <div id='logo'></div>
          <div id='navbar-links'>
            <a href="#" className="medium paragraph">Shop</a>
            <a href="#" className="medium paragraph">Log In</a>
            <a href="#" className="medium paragraph primary-cta">Sign Up</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar