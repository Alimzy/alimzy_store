import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Announcement from './components/Announcement.jsx'
import Hero from './components/Hero.jsx'
import BrandBar from './components/BrandBar.jsx'
import NewArrival from './components/NewArrival.jsx'
import TopSelling from './components/TopSelling.jsx'
import Browse from './components/Browse.jsx'
import Review from './components/Review.jsx'
import Footer from './components/Footer.jsx'
function App() {
 const [cartCount, setCartCount] = useState(0)

  return (
     <>
      <Announcement />
      <Navbar cartCount={cartCount}  />
      <Hero />
      <BrandBar />
     <NewArrival setCartCount={setCartCount} />
     <TopSelling/>
     <Browse/>
     <Review />
     <Footer />
    </>
  )
}

export default App
