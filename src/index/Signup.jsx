import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css"
import "./styles/Connexion.css"
import { Link } from 'react-router-dom';
import Image from "../assets/log.svg"
import swal from 'sweetalert'
// import axios from 'axios';
const Signup = () => {
  const sexe = 'Sexe'
  const ville = 'Ville'

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
        <span className='intro-word'>CREEZ VOTRE COMPTE SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous avez déjà un compte existant cliquez</span> {'  '}
          <Link to="/connexion" className='link-deco'>ici</Link></div>
        <div className='entries-pic'>

          <Form style={{ width: '400px' }} onSubmit={handleSubmit} method='POST'>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Name">
                <Form.Control name="nom" type="text" placeholder="Nom"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Surname">
                <Form.Control name="prenom" type="text" placeholder="Prenom"/>
              </Form.Group>
            </Row>


            <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>
            <Form.Group className="user" controlId="username">
              <Form.Control 
                name='username'
                type='text'
                placeholder="Nom d'utilisateur" 
              />
            </Form.Group>
            <Row className="pass">
              <Form.Group as={Col} controlId="Pwd">
                <Form.Control name="pwd" type="password" placeholder="Password"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Confirmation-pwd">
                <Form.Control name="confpwd" type="password" placeholder="Confirm Password"/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Numero">
                <Form.Control name="numTel" type="text" placeholder="Numero"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Ville">
                <Form.Select name="ville" defaultValue={ville}>
                  <option value={ville} type='text'>Ville</option>
                  <option value='....' type='text'>...</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <span className='sub-text text-bel' >Date de Naissance </span>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Date">
                <Form.Control name="dateNaissance" type="date" placeholder="Date de naissance"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Sexe">
                <Form.Select name='sexe'>
                  <option value={sexe}>Sexe</option>
                  <option value ="M" type='text'> Homme </option>
                  <option value ="F" type='text'>Femme</option>
                </Form.Select>
              </Form.Group>
            </Row>

            {/* <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <span className='sub-text'>Nature du compte</span>
              </Form.Group>

              <Form.Group as={Col} controlId="Client">
                <Form.Select>
                  <option>Client</option>
                  <option>Caisiere</option>
                  <option>Magasinier</option>
                  <option>Patron</option>
                </Form.Select>
              </Form.Group>
            </Row> */}

            <Button className='custom-button' variant="secondary" type="submit" value="SEND">
              Inscrivez Vous
            </Button>
            <span className='sub-text'>Vous etes un employer? </span> {'  '} 
            <Link to="/connexion/signup-employee" className='link-deco'>Cliquer ici!</Link>
          </Form>
          
          <img className='image' src={Image} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Signup