import { useState } from 'react'
import './App.css'
import './text.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Cards from './Cards.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
    </>
  )
}

export default App
