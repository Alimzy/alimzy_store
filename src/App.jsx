import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Announcement from './components/Announcement.jsx'
import Hero from './components/Hero.jsx'
function App() {


  return (
     <>
      <Announcement />
      <Navbar />
      <Hero />
     
    </>
  )
}

export default App
