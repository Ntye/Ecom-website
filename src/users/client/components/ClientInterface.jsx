// import { Outlet } from "react-router-dom"
// import PinkSquiggle from "../../../assets/pinkSquiggle.svg"
// import GreenSquiggle from "../../../assets/greenSquiggle.svg"
// import PinkLine from "../../../assets/pinkline.svg"
// import GreenLine from "../../../assets/greenline.svg"
// import login from "../../../assets/log.svg"
// import Logo from "../../../assets/logo.svg"
// import "./styles/Connex.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../styles/Client.css'

const ClientInterface = () => {
  return (
    <div className="connexion-page">
      <Navbar/>
      
      <Footer/>
    </div>
  )
}

export default ClientInterface