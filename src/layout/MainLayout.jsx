import React from 'react'
import "../../src/global.css";


//import outlet
import { Outlet } from 'react-router-dom'

//import Header, Footer
import Header from "../components/Header"
import Footer from '../components/Footer'

const Mainlayout = () => {
  return (
    <>
    <Header/>
      <main><Outlet /></main>
    <Footer/>
    </>
  )
}

export default Mainlayout