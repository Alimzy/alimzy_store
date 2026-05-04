import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Announcement from './components/Announcement.jsx'
import Hero from './components/Hero.jsx'
import BrandBar from './components/BrandBar.jsx'
import NewArrival from './components/NewArrival.jsx'
import TopSelling from './components/TopSelling.jsx'
import Browse from './components/Browse.jsx'
function App() {


  return (
     <>
      <Announcement />
      <Navbar />
      <Hero />
      <BrandBar />
     <NewArrival/>
     <TopSelling/>
     <Browse/>
    </>
  )
}

export default App
