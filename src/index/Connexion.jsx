import { Outlet } from "react-router-dom"
import child from "../assets/child.svg"
import "./styles/Connexion.css"
// import Man from "../assets/Man.jpg"

export default function Connexion() {
  return (
    <div className="content">
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