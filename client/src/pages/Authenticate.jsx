import '../css/Authenticate.css'
import '../css/text.css'
import '../css/index.css'

import Navbar from '../components/Navbar.jsx'

import icon_zoom from '../assets/images/zoom-icon.svg'
import graphic from '../assets/images/connect-graphic.svg'
import line_texture from '../assets/images/line-texture.svg'
import { useState } from 'react'
import axios from "axios";
import {toast} from "react-hot-toast";

function SignIn() {

  const handleOAuth = async () => {

    const toastId = toast.loading("Loading...");
    console.log('url is' , `${import.meta.env.VITE_REACT_APP_SERVER_URL}/oauth`)
    try {
      
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/oauth`);
      toast.success("Lol");
      console.log(response);

    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }

    toast.dismiss(toastId)
  }  

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
          <button id="connect-button" className='primary-cta' onClick={handleOAuth}>
            <img src={icon_zoom} alt="" />
            <span className="paragraph bold">Connect with Zoom</span>
          </button>
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