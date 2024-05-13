import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarC from "./NavbarC.jsx"
import NavbarC from "../../components/NavbarC.jsx"
import Footer from "./Footer.jsx";
import './styles/ClientInterface.css'

import { Outlet } from "react-router-dom"
import * as Fa from "react-icons/fa";

const ClientInterface = () => {
    const navItems=[
        {
            "id": "1",
            "name": "Acceuil",
            "icon": <Fa.FaHome/>,
            "link": "/client"
        },
        {
            "id": "2",
            "name": "Panier",
            "icon": <Fa.FaShoppingCart/>,
            "link": "panier"
        },
        {
            "id": "3",
            "name": "Magasin",
            "icon": <Fa.FaSearchLocation/>,
            "link": "/client"
        },
        {
            "id": "4",
            "name": "Compte",
            "icon": <Fa.FaUser />,
            "link": "compte"
        }
    ]

  return (
    <div className="main-container">
      <NavbarC
          navItems={navItems}
      />
      <div className="content-area">
        <Outlet/>
      </div>
      <Footer className="footer" />
    </div>
  )
}

export default ClientInterface