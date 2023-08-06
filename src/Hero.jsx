import { useState } from 'react'
import './Hero.css'
import hero from './assets/hero-image.svg'
import './text.css'

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='hero-section'>
        <div id='hero-content'>
          <div id='intro'>
            <span id='intro-header' className='paragraph flair bold'>Learn how we are</span>
            <div id='intro-title'>
              <span className='heading1 bold high-emphasis'>Helping Students</span>
              <span className='heading1 bold high-emphasis'>with Innovative</span>
              <span className='heading1 bold high-emphasis'>Incentives</span>
            </div>
            <span id='intro-subtitle' className='low-emphasis paragraph'>
              <span className='high-emphasis semibold'>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
          <div id='hero-cta'>
              <a href='#' className='primary-cta paragraph semibold high-emphasis'>Sign Up</a>
              <a href='#' className='paragraph semibold low-emphasis'>Log In</a>
            </div>
        </div>
        <img src={hero} id='hero'/>
      </div>
    </>
  )
}

export default Hero