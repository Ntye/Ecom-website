// import { Outlet } from "react-router-dom"
// import login from "../../../assets/log.svg"
// import Logo from "../../../assets/logo.svg"
// import "./styles/Connex.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../styles/Client.css'
import { Outlet } from "react-router-dom"

const ClientInterface = () => {
  return (
    <div>
      
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default ClientInterface