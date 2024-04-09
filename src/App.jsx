// import { useState } from 'react'
import Index from "./index/Index"
import Login from "./index/Login"
import Home from "./users/client/pages/Home"
import Signin from "./index/Signup"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Connexion from "./index/Connexion";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/connexion" element={<Connexion/>}/>
          <Route path="/connexion/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/sign-in" element={<Signin/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
