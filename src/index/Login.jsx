import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Col, Row, Button } from 'react-bootstrap'
import "./styles/Connexion.css"
import { Link } from 'react-router-dom'
import Caissiere from "../assets/Cassiere-Interface.svg"
import Client from "../assets/Client-Interface.svg"
import Patron from "../assets/Patron-Interface.svg"
import Image from "../assets/log.svg"
import { useState } from 'react'
import axios from '../api/axios'


const Login = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleOptionChange = (option) => {
    setUser(option);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost/login.php', {job: user, username, password } )
      console.log('Response from PHP:', response.data);
      // Handle response accordingly
    } catch (error) {
      console.error('Error:', error);
      // Handle error accordingly
    }
  };

  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CONNECTEZ VOUS SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous n’avez pas un compte existant cliquez</span> {'  '} 
        <Link to="signup" className='link-deco'>ici</Link></div>
        <div className='entries-pic'>
          <Form  style={{ width: '400px' }} onSubmit={handleSubmit} method='POST'>
            <div className="image-radio-group">
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
            </div>

            <Form.Group className="user" controlId="formGridAddress1">
              <Form.Control 
                value={username} 
                name='username'
                type='text'
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Nom d'utilisateur" 
              />
            </Form.Group>

            <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>
            
            <Row className="pass">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control 
                  value={password}
                  name="password" 
                  type="password" 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formRemember">
                <Form.Check 
                  type="checkbox" 
                  id="exampleCheckbox"
                  label=" Se souvenir de mes identifiants"
                  className='remember'
                />
              </Form.Group>
            </Row>

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

export default Login