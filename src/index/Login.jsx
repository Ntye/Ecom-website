// import React from 'react'
import "./styles/Login.css"
import Navbar from "../users/client/components/Navbar"
import Logo from "../../../assets/greenSquiggle.svg"

const Login = () => {
  return (
    <div>
      <Navbar/>
      <div className="body">
        <div className="form">
          <label>Username</label>
          <input type="text"/>
          <label>Password</label>
          <input type="password"/>
          <label>Password</label>
          <input 
            type="submit" 
            defaultValue="Login" 
            className="button"
          />
        <div className='nav-logo-container'>
          <img src={Logo} alt=""/>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login

