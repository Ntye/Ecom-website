import { NavLink } from "react-router-dom/"

import "../styles/Navbar.css"

const Navbar = () => {
  const navLinkStyles = ({isActive}) => {
    return{
      fontWeight: isActive? 'bold' : 'normal',
      textDecoration: isActive? 'none' : 'underline',
    }
  }

  return (
    <nav>
      <NavLink style={navLinkStyles} to='/client'> Acceuil </NavLink>
      <NavLink style={navLinkStyles} to='/home'> Panier </NavLink>
      <NavLink style={navLinkStyles} to='/products'> Compte </NavLink>
      <NavLink style={navLinkStyles} to='/users'> Bar de Navigation </NavLink>
    </nav>
    
  )
}

export default Navbar