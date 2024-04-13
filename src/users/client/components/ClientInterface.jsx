import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./NavbarComp"
import '../styles/Client.css'

import { Outlet } from "react-router-dom"

const ClientInterface = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default ClientInterface