import { useState } from 'react'
import '../css/SignIn.css'
import '../css/text.css'
import filler_logo from '../assets/images/filler-logo.png'
import icon_google from '../assets/images/google-icon.png'
import graphic from '../assets/images/log-in-graphic.svg'
import line_texture from '../assets/images/line-texture.svg'


function SignIn() {
  return (
    <>
      <div id='background'>
        <div id='white-cover'>
          <a href="/">
            <img id='logo' src={filler_logo}></img>
          </a>
          <div id='left-section'>
            <div id='create-account'>
              <div id='top-box'>
                <div id='top-box' className='top'>
                  <h2 className='lg'>Account Log-In</h2>
                  <h2 className='sm'>Log In</h2>
                  <p className='paragraph' id='grey'>Already have an account? <span className='underline'><a href='/sign-up' className='paragraph' id='grey'>Sign Up</a></span></p>
                </div>
                <div className ='input-field'>
                  <div>
                    <input type="email" placeholder='Email' id="Name" name="Name"  style={{marginBottom:0, paddingBottom:0}}/>
                    <hr></hr>
                  </div>
                  <div>
                    <input type="password" placeholder='Password' id="password" name="password"  style={{marginBottom:0, paddingBottom:0}}/>
                    <hr></hr>
                  </div>
                </div>
                <div class='sign-up' style={{fontWeight:600}}>Sign Up</div>
                <div class='or'>
                  <div style={{width:'11vw'}}><hr></hr></div>
                  <p style={{color:'#868686', margin:0, marginTop:'0.1vh'}}>or</p>
                  <div style={{width:'11vw'}}><hr></hr></div>
                </div>
                <a href='#' id='google-sign-up' style={{marginTop:'-20px'}}>
                  <img src={icon_google} width={'20vw'}></img>
                  <p style={{fontWeight:600, color:'black'}}>Sign Up With Google</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class='right-section'>
          <img src={line_texture} id='line-texture'></img>
          <div className='graphic-wrapper'>
            <img src={graphic} id='graphic'></img>
            <div>
              <h2 style={{color:'#FFF'}}>Welcome Back!</h2>
              <p style={{width:'30vw', lineHeight:'25px'}}>Anyone can access concussify, sign up now to have your own concussion prevention </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn