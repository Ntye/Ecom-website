import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Col, Button } from 'react-bootstrap'
import "./styles/Connexion.css"
import { Link } from 'react-router-dom'
import Image from "../assets/log.svg"
import { useRef } from 'react'
// import axios from '../api/axios'


export default function Login() {

  const nameRef = useRef()
  const passwordRef = useRef()

  // const handleOptionChange = (option) => {
  //   setUser(option)
  // }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CONNECTEZ VOUS SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous n’avez pas un compte existant cliquez</span> {'  '} 
        <Link to="signup" className='link-deco'>ici</Link></div>
        <div className='entries-pic'>
          <Form  style={{ width: '400px' }} onSubmit={handleSubmit} method='POST'>
            {/* <div className="image-radio-group">
              <label className={`image-option ${user === 'client' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="option" 
                  value="client" 
                  checked={user === 'client'} 
                  onChange={() => handleOptionChange('client')} 
                />
                <img 
                className='interface'
                src={Client}
                alt="/"
                />
              </label>
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
            </div> */}

            <Form.Group className="user" controlId="username">
              <Form.Control 
                ref={nameRef}
                // value={username} 
                name='username'
                type='text'
                placeholder="Nom d'utilisateur" 
              />
            </Form.Group>

            <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>
            
            <Form.Group as={Col} controlId="password">
              <Form.Control 
                ref={passwordRef}
                // value={password}
                name="password" 
                type="password" 
                placeholder="Mot de Passe"
                />
            </Form.Group>

            <Form.Group as={Col} controlId="Remember">
              <Form.Check 
                type="checkbox" 
                id="exampleCheckbox"
                label=" Se souvenir de mes identifiants"
                className='remember'
              />
            </Form.Group>

            <Button className='custom-button' variant="secondary" type="submit">
              Connectez Vous
            </Button>
          </Form>
          <img className='image' src={Image} alt="/"/>
        </div>
      </div>
    </div>
  )
}