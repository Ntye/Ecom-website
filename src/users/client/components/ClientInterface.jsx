import 'bootstrap/dist/css/bootstrap.min.css';
// import GreenImg from "../../../assets/greenSquiggle.svg"
// import PinkImg from "../../../assets/pinkSquiggle.svg"
import NavbarComp from "./NavbarComp"
import './styles/ClientInterface.css'

import { Outlet } from "react-router-dom"

const ClientInterface = () => {
  return (
    <div>
      {/* <img className="left-image" src={GreenImg} alt="/"/>
      <img className="right-image" src={PinkImg} alt="/"/> */}

      <NavbarComp/>
      <Outlet/>
    </div>
  )
}

export default ClientInterface