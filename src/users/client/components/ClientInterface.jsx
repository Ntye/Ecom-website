import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./NavbarComp"
import Footer from "./Footer.jsx";
import './styles/ClientInterface.css'

import { Outlet } from "react-router-dom"

const ClientInterface = () => {
  return (
    <div className="main-container">
      <NavbarComp/>
      <div className="content-area">
        <Outlet/>
      </div>
      <Footer className="footer" />
    </div>
  )
}

export default ClientInterface