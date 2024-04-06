// import React from 'react'
import "./styles/Login.css"
import Logo from "../assets/greenSquiggle.svg"
import Logo1 from "../assets/pinkSquiggle.svg"
import Navbar from "../users/client/components/Navbar"

const Login = () => {
  return (
    <div>
      <Navbar/>
      <div className="home-banner-container">
        <img src={Logo} alt="" />
      </div>
      <div className="home-banner">
        <img src={Logo1} alt="" />
      </div>
      <div className="body">
        <div className="form">
          <label>Username 1</label>
          <input type="text"/>
          <label>Password</label>
          <input type="password"/>
          <label>Password</label>
          <input 
            type="submit" 
            defaultValue="Login" 
            className="button"
          />
        </div>
      </div>
    </div>
    
  )
}

export default Login

