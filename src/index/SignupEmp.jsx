import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css"
import "./styles/Connexion.css"
import { Link } from 'react-router-dom';
import Image from "../assets/log.svg"
import Caissiere from '../assets/Cassiere-Interface.svg'
import Patron from '../assets/Patron-Interface.svg'
import swal from 'sweetalert'
import { useState } from 'react';
// import axios from 'axios';
const SignupEmp = () => {

  const [user, setUser] = useState()
  const handleOptionChange = (option) => {
    setUser(option)
  }

  const handleSubmit =  (e) => {
      e.preventDefault();
      let error = {
        title: 'You should enter the following field(s)\n\n',
        message: '',
        num: 0
      }
      const data = {}
      const form = new FormData(e.currentTarget)
      form.forEach((value, key)=>data[key] = value)
      console.log(data)

      if (data.nom.length === 0) {
        error.message = error.message + '- Nom\n'
        error.num = error.num +1
      } 
      if (data.prenom.length === 0) {
        error.message = error.message + '- Prenom\n'
        error.num = error.num +1
      } 
      if (data.username.length === 0) {
        error.message = error.message + '- Username\n'
        error.num = error.num +1
      } 
      if (data.pwd.length === 0) {
        error.message = error.message + '- Password\n'
        error.num = error.num +1
      } 
      if (data.confpwd.length === 0) {
        error.message = error.message + '- Confirmation Password\n'
        error.num = error.num +1
      } 
      if (data.numTel.length === 0) {
        error.message = error.message + '- Telephone Number\n'
        error.num = error.num +1
      } 
      if (data.dateNaissance.length === 0) {
        error.message = error.message + '- Date of Birth\n'
        error.num = error.num +1
      } 
      if(data.sexe === 'Sexe'){
        error.message = error.message + '- Sexe\n'
        error.num = error.num +1
      } 
      if(data.ville === 'Ville'){
        error.message = error.message + '- Ville\n'
        error.num = error.num +1
      } 
      if(error.num > 0) swal(error.message);
      
      else {
        if(data.confpwd.localcompare(data.pwd) === 0){
          delete data.confpwd
          console.log(data)
          // const url = "http://localhost/enquired.php";
          // axios.post(url, fData)
          //   .then(response => alert(response.data))
          //   .catch(error => alert(error));
        }
        else{
          swal("les mots de passe ne correspondent pas, veuillez reessayer!");
        }
      }
  }
  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CREEZ VOTRE COMPTE EMPLOYEE SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous avez déjà un compte existant cliquez</span> {'  '}
          <Link to="/connexion/login-employee" className='link-deco'> ici </Link>
        </div>
        <div className='entries-pic'>

          <Form style={{ width: '400px' }} onSubmit={handleSubmit} method='POST'>
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


            <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>
            <Row className='mb-3'>
              <Form.Group className="user" controlId="username">
              <Form.Control 
                name='username'
                type='text'
                placeholder="Nom d'utilisateur" 
              />
          </Form.Group>
            </Row>
            

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Numero">
                <Form.Control name="numTel" type="text" placeholder="Numero"/>
              </Form.Group>
            </Row>

            <Row className="pass">
              <Form.Group as={Col} controlId="Pwd">
                <Form.Control name="pwd" type="password" placeholder="Password"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Confirmation-pwd">
                <Form.Control name="confpwd" type="password" placeholder="Confirm Password"/>
              </Form.Group>
            </Row>
            
            <Button className='custom-button' variant="secondary" type="submit" value="SEND">
              Inscrivez Vous
            </Button><br/><br/>
            <div className='note'><span className='sub-text'>Vous etes un client? </span> {'  '} 
            <Link to="/connexion/signup" className='link-deco'>Cliquer ici!</Link></div>
          </Form>
            <img className='image' src={Image} alt="/" />
          </div>
      </div>
    </div>
  )
}

export default SignupEmp