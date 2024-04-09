import { Outlet } from "react-router-dom"
import child from "../assets/child.svg"
import "./styles/Connexion.css"
// import Man from "../assets/Man.jpg"
import PinkSquiggle from "../assets/pinkSquiggle.svg"
import GreenSquiggle from "../assets/greenSquiggle.svg"
import PinkLine from "../assets/pinkline.svg"
import GreenLine from "../assets/greenline.svg"

export default function Connexion() {
  return (
    
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
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="w-auto h-10 mx-auto" 
            src={child}
            alt="Your Company"
          />
        </div>        
        <Outlet/>
      </div>
    </div>
  )
}