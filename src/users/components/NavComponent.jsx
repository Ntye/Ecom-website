import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

import "./styles/NavbarC.css"

function NavComponent({name, icon, link}) {
    return (
        <div>
            <Nav.Item>
                <Nav.Link as={Link} to={link} className="custom-nav-link" activeClassName="active">
                    <div className="page">
                        <span className='icon'>{icon} </span>
                        <span className="page-link">{name}</span>
                    </div>
                </Nav.Link>
            </Nav.Item>
        </div>
    );
}

export default NavComponent;