import Nav from "react-bootstrap/Nav";
import {Link, NavLink} from "react-router-dom";

import "./styles/NavbarC.css"

function NavComponent({ name, icon, link}) {
    return (
        <div>
            <Nav.Item>
                <NavLink as={Link} to={link} className={
                    ({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')
                }>
                    <div className="page">
                        <span className='icon'>{icon} </span>
                        <span className="page-link">{name}</span>
                    </div>
                </NavLink>
            </Nav.Item>
        </div>
    );
}

export default NavComponent;