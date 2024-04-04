// import React from 'react'
import { Link } from 'react-router-dom'
import backgroundVideo from '../assets/index_background.mp4'
import "../index/styles/index.css"

const index = () => {
  
  return (
    <>
      <div className="background-video-container">
        <video className="background-video" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <Link to="/login">
          <button className='LOGIN'>LOGIN</button>
        </Link>
        
      </div>
    </>
  )
}

export default index