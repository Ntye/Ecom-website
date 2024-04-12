import { NavLink } from "react-router-dom/"
import * as Fa from 'react-icons/fa'
// import { Outlet } from "react-router-dom"
// import PinkSquiggle from "../../../assets/pinkSquiggle.svg"
// import GreenSquiggle from "../../../assets/greenSquiggle.svg"
// import PinkLine from "../../../assets/pinkline.svg"
// import GreenLine from "../../../assets/greenline.svg"
import Logo from '../../../assets/logo.svg'
import "../styles/Navbar.css"

const Navbar = () => {

  return (
      <nav>
        
      {/* <img src={GreenSquiggle} className="greens"/>
      <img src={PinkSquiggle} className="pinks"/>
      <img src={GreenLine} className="greenl"/>
      <img src={PinkLine} className="pinkl"/> */}
        <img className="logo" src={Logo} alt="/"/>
        <div className="search-bar">
          <input className="search-input" type="text" placeholder="Search..."/>
          <NavLink to='search'>
            <button type="submit" className="search-button"><Fa.FaSearch className='search-icon'/></button>
          </NavLink>
        </div>
        <div className="pages">
          <NavLink to='acceuil' className={({ isActive }) =>
            isActive ? 'activeLink' : 'normalLink'
          }>
            <div className="page">
              <span className='icon'><Fa.FaHome/></span>
              <span>Acceuil</span>
            </div>
          </NavLink>
          
          <NavLink to='panier' className={({ isActive }) =>
            isActive ? 'activeLink' : 'normalLink'
          }>
            <div className="page">
              <span className='icon'><Fa.FaShoppingCart/></span>
              <span>Panier</span>
            </div>
          </NavLink>

          <NavLink to='compte' className={({ isActive }) =>
            isActive ? 'activeLink' : 'normalLink'
          }>
            <div className="page">
              <span className='icon'><Fa.FaUser /></span>
              <span>Compte</span>
            </div>
          </NavLink>

          
        </div>
        <Fa.FaBars/>
      </nav>
  );
}
export default Navbar