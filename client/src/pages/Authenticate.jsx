import '../css/Authenticate.css'
import '../css/text.css'
import '../css/index.css'

import Navbar from '../components/Navbar.jsx'

import icon_zoom from '../assets/images/zoom-icon.svg'
import graphic from '../assets/images/log-in-graphic.svg'
import line_texture from '../assets/images/line-texture.svg'


function SignIn() {
  return (
    <>
      <Navbar links='[]'/>
      <div id='connect-page'>
        <div id='content-section'>
          <span className='heading2 bold dark'>Connect</span>
          <div id="permissions">  
            <span className='paragraph medium dark-low-emphasis'>By connecting to Zoom, you allow SCHD to:</span>
            <ul id="perm-list">
              <li className='paragraph medium dark-low-emphasis'>Get read-only access to your account details</li>
              <li className='paragraph medium dark-low-emphasis'>Add and schedule meetings for the user</li>
              <li className='paragraph medium dark-low-emphasis'>Access information about meetings scheduled by SCHD</li>
            </ul>
          </div>
          <a href="ZOOMOAUTH" id="connect-button" class='primary-cta'>
            <img src={icon_zoom} alt="" />
            <span class="paragraph bold">Connect with Zoom</span>
          </a>
        </div>
        <div id='graphic-section'>
          <img src={line_texture} id='squiggly-lines'></img>
          <div className='graphic-wrapper'>
            <img src={graphic} id='graphic' />
            <span className='heading2 bold high-emphasis'>Welcome!</span>
            <span id='graphic-description' className='paragraph low-emphasis'>SCHD helps with mind-boggling meeting appointments by using AI to guide you!</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn