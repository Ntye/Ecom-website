import * as Fa from "react-icons/fa";
import NavbarC from "../../components/NavbarC.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../../client/components/Footer.jsx";

function MagasinierInterface(props) {
  const navItems=[
    {
      "id": "1",
      "name": "Home",
      "icon": <Fa.FaHome/>,
      "link": "home"
    },
    {
      "id": "2",
      "name": "View Items",
      "icon": <Fa.FaStreetView/>,
      "link": "view"
    },
    {
      "id": "3",
      "name": "Add Item",
      "icon": <Fa.FaAdjust/>,
      "link": "add"
    },
    {
      "id": "4",
      "name": "Modifiy Items",
      "icon": <Fa.FaMonero/>,
      "link": "modify"
    },
  ]

  const show = false

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

export default MagasinierInterface;