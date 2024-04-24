import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Col, Button } from 'react-bootstrap'
import "./styles/Connexion.css"
import { Link } from 'react-router-dom'
import Image from "../assets/log.svg"
import { useState } from 'react'
import Caissiere from '../assets/Cassiere-Interface.svg'
import Patron from '../assets/Patron-Interface.svg'
// import axios from '../api/axios'


export default function Login() {

  const [user, setUser] = useState()
  const handleOptionChange = (option) => {
    setUser(option)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CONNECTEZ VOUS SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous n’avez pas un compte existant cliquez</span> {'  '} 
        <Link to="/connexion/signup-employee" className='link-deco'>ici</Link></div>
        <div className='entries-pic'>
          <Form  style={{ width: '400px' }} onSubmit={handleSubmit} method='POST'>
            <div className="image-radio-group">
              <label className={`image-option ${user === 'caissiere' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="option" 
                  value="caissiere" 
                  checked={user === 'caissiere'} 
                  onChange={() => handleOptionChange('caissiere')} 
                />
                <img 
                  className='interface'
                  src={Caissiere}
                  alt="/"
                />
              </label>
              <label className={`image-option ${user === 'magasinier' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="option" 
                  value="magasinier" 
                  checked={user === 'magasinier'} 
                  onChange={() => handleOptionChange('magasinier')} 
                />
                <img 
                  className='interface'
                  src={Caissiere}
                  alt="/"
                />
              </label>
              <label className={`image-option ${user === 'patron' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="option" 
                  value="patron" 
                  checked={user === 'patron'} 
                  onChange={() => handleOptionChange('patron')} 
                />
                <img 
                  className='interface'
                  src={Patron}
                  alt="/"
                />
              </label>
            </div>

            <Form.Group className="user" controlId="username">
              <Form.Control 
                name='username'
                type='text'
                placeholder="Nom d'utilisateur" 
              />
            </Form.Group>

            <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>
            
            <Form.Group as={Col} controlId="password">
              <Form.Control 
                name="password" 
                type="password" 
                placeholder="Mot de Passe"
                />
            </Form.Group>

            <br/>
            <Button className='custom-button' variant="secondary" type="submit">
              Connectez Vous
            </Button><br/><br/>
            <div className='note'><span className='sub-text'>Vous etes un client? </span> {'  '} 
            <Link to="/connexion/login" className='link-deco'>Cliquer ici!</Link></div>
          </Form>
          <img className='image' src={Image} alt="/"/>
        </div>
      </div>
    </div>
  )
}