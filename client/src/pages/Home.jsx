import { useState } from 'react'
import '../css/text.css'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Cards from '../components/Cards.jsx'
import {Route, Routes, Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
    </>
  );
}

export default Home
