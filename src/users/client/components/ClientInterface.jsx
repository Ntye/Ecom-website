import { Outlet } from "react-router-dom"
import PinkSquiggle from "../assets/pinkSquiggle.svg"
import GreenSquiggle from "../assets/greenSquiggle.svg"
import PinkLine from "../assets/pinkline.svg"
import GreenLine from "../assets/greenline.svg"
import login from "../assets/log.svg"
import Logo from "../assets/logo.svg"
import "./styles/Connex.css"

const ClientInterface = () => {
  return (
    <div className="connexion-page">
      <div>
        <img className="pinks" 
          src={PinkSquiggle}
          alt="Your Company"
        />
        <img className="greens" 
          src={GreenSquiggle}
          alt="Your Company"
        />
        <img className="greenl" 
          src={GreenLine}
          alt="Your Company"
        />
        <img className="pinkl" 
          src={PinkLine}
          alt="Your Company"
        />
        <div className="logo-cont">
          <img className="logo" 
            src={Logo}
            alt="Your Company"
          />
        </div>
        

        {/* Content is here */}
        <div className="rect">
          <div>
            Connexion
            <Outlet/>
          </div>
          <div>
            <img className="login" 
              src={login}
              alt="Your Company"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientInterface