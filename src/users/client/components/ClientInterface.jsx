import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./NavbarComp"
import './styles/ClientInterface.css'

import { Outlet } from "react-router-dom"

const ClientInterface = () => {
  return (
    <div>
      <NavbarComp/>
      <Outlet/>
    </div>
  )
}

export default ClientInterface