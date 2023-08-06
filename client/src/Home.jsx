import { useState } from 'react'
import './App.css'
import './text.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Cards from './Cards.jsx'
import SignIn from './SignIn.jsx'
import {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
      <Navbar />
      <Hero />
      <Cards />
    </>
  );
}

export default App
