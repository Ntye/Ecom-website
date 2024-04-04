// import React from 'react'
import "../styles/Home.css"
import Logo from "../../../assets/greenSquiggle.svg"
import Logo1 from "../../../assets/pinkSquiggle.svg"
import Navbar from "../../../users/client/components/Navbar"

const Home = () => {
  return (
    <div>
      <div className="home-banner">
        <img src={Logo1} className="navbar-image" />
      </div>   
      <Navbar/>
      <div className="home-banner-container">
        <img src={Logo} alt="" />
      </div>   
    </div>
    
  )
}

export default Home

