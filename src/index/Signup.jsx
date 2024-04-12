import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Button } from 'react-bootstrap';
import "./styles/Connexion.css"
import { Link } from 'react-router-dom';
import Image from "../assets/log.svg"

const Signup = () => {
  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CREEZ VOTRE COMPTE SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous avez déjà un compte existant cliquez</span> {'  '} 
        <Link to="/signup" className='link-deco'>ici</Link></div>
        <div className='entries-pic'>
          <Form  style={{ width: '400px' }}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control id="nom" name="nom" type="text" placeholder="Nom" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control id="prenom" name="prenom" type="text" placeholder="Prenom" />
              </Form.Group>
            </Row>

            <Form.Group className="user" controlId="formGridAddress1">
              <Form.Control placeholder="Nom d'utilisateur" />
            </Form.Group>

            <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>
            
            <Row className="pass">
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control id="pwd" name="pwd" type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridConPassword">
                <Form.Control id="confirmation-pwd" name="confirmation-pwd" type="password" placeholder="Confirm Password" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control id="nom" name="nom" type="text" placeholder="Numero" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Select defaultValue="Ville">
                  <option disabled>Ville</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control id="date" name="date" type="text" placeholder="Naissance (dd-mm-yy)" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Select defaultValue="Sexe">
                  <option disabled>Sexe</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
              <span className='sub-text'>Nature du compte</span>
              </Form.Group>
              
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Select defaultValue="Client">
                  <option>Client</option>
                  <option>Caisiere</option>
                  <option>Magasinier</option>
                  <option>Patron</option>
                </Form.Select>
              </Form.Group>
            </Row>

          <Button className='custom-button' variant="secondary" type="submit">
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