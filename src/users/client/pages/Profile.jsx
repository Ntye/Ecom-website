import {useNavigate, useParams} from "react-router-dom";

const Profile = () => {
  const navigate= useNavigate()

  const {nom_client}= useParams()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div>
      Profile
      {nom_client}<br/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile