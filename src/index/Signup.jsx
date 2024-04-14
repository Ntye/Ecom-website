import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Col, Row, Button } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css"
import "./styles/Connexion.css"
import { Link, useNavigate } from 'react-router-dom'
import Image from "../assets/log.svg"
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confpassword, setConfpassword] = useState("")
  const [number, setNumber] = useState("")
  const [ville, setVille] = useState("")
  const [dateoB, setDateoB] = useState("")
  const [sexe, setSexe] = useState("")
  const [user, setUser] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
      const response = await axios.post(
        'http://localhost/login.php', 
        {
          Nom: nom+" "+prenom, 
          username, 
          password,
          number,
          ville,
          dateoB,
          sexe,
          user
        }
      )
      console.log('Response from PHP:', response.data)
      // Handle response accordingly
      navigate("/connexion")
    } catch (error) {
      console.error('Error:', error)
      navigate("/connexion")
      // Handle error accordingly
    }
  }

  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CREEZ VOTRE COMPTE SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous avez déjà un compte existant cliquez</span> {'  '} 
        <Link to="/connexion" className='link-deco'>ici</Link></div>
        <div className='entries-pic'>
          <Form  style={{ width: '400px' }} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control 
                  value={nom} 
                  name="nom" 
                  type="text" 
                  onChange={(e) => setNom(e.target.value)} 
                  placeholder="Nom" 
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control 
                  value={prenom} 
                  name="prenom" 
                  type="text" 
                  onChange={(e) => setPrenom(e.target.value)} 
                  placeholder="Prenom" 
                />
              </Form.Group>
            </Row>

            <Form.Group className="user" controlId="Username">
              <Form.Control 
                value={username} 
                name = "username" 
                type='text'
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Nom d'utilisateur" 
              />
            </Form.Group>

            <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>

            <Row className="pass">
              <Form.Group as={Col} controlId="Password">
                <Form.Control 
                  value={password}
                  name="pwd" 
                  type="password" 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Password" 
                />
              </Form.Group>

              <Form.Group as={Col} controlId="ConPassword">
                <Form.Control 
                  value={confpassword} 
                  name="confirmation-pwd" 
                  type="password" 
                  onChange={(e) => setConfpassword(e.target.value)}
                  placeholder="Confirm Password" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Number">
                <Form.Control 
                  value={number}
                  name="nom" 
                  type="text" 
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Numero" 
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Ville">
                <Form.Select 
                  defaultValue="Ville"
                  type="text"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                >
                  <option disabled>Ville</option>
                  <option value="...">...</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <span className='sub-text text-bel' >Date de Naissance </span>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Date">
                <Form.Control 
                  value={dateoB}
                  name="date" 
                  type="date" 
                  onChange={(e) => setDateoB(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Sexe">
                <Form.Select 
                  value={sexe}
                  defaultValue="Sexe" 
                  onChange={(e) => setSexe(e.target.value)}
                >
                  <option disabled value="">Sexe</option>
                  <option value= "male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Texte">
              <span className='sub-text'>Nature du compte</span>
              </Form.Group>
              
              <Form.Group as={Col} controlId="Compte">
                <Form.Select 
                  // defaultValue="Client"
                  value={user} 
                  onChange={(e) => setUser(e.target.value)}
                >
                  <option value="client">Client</option>
                  <option value="caissiere">Caisiere</option>
                  <option value="magasinier">Magasinier</option>
                  <option value="patron">Patron</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button className='custom-button' 
              variant="secondary" 
              type="submit"
            >
              Inscrivez Vous
            </Button>
          </Form>

          <img className='image' src={Image} alt="/"/>
        </div>
      </div>
    </div>
  )
}

export default Signup