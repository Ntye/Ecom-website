import 'bootstrap/dist/css/bootstrap.min.css';
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
            "link": "acceuil"
        },
        {
            "id": "2",
            "name": "Panier",
            "icon": <Fa.FaShoppingCart/>,
            "link": "panier"
        },
        // {
        //     "id": "3",
        //     "name": "Magasin",
        //     "icon": <Fa.FaSearchLocation/>,
        //     "link": "location"
        // },
        {
            "id": "4",
            "name": "Compte",
            "icon": <Fa.FaUser />,
            "link": "compte"
        }
    ]

    const show = true

  return (
    <div className="main-container">
      <NavbarC
          navItems={navItems}
          show={show}
      />
      <div className="content-area">
        <Outlet/>
      </div>
      <Footer className="footer" />
    </div>
  )
}

export default ClientInterface