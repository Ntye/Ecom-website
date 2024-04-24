import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Form, Col, Button } from 'react-bootstrap'
import "./styles/Connexion.css"
import { Link } from 'react-router-dom'
import Image from "../assets/log.svg"
import swal from 'sweetalert'
// import axios from '../api/axios'


export default function Login() {
  
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
    
    if (data.username.length === 0) {
      error.message = error.message + '- Username\n'
      error.num = error.num +1
    } 
    if (data.pwd.length === 0) {
      error.message = error.message + '- Password\n'
      error.num = error.num +1
    } 
    if(error.num > 0) swal(error.message);
    else {
      // if(data.confpwd.localcompare(data.pwd) === 0){
        // delete data.confpwd
        console.log(data)
        // const url = "http://localhost/enquired.php";
        // axios.post(url, fData)
        //   .then(response => alert(response.data))
        //   .catch(error => alert(error));
      // }
      // else{
      //   swal("les mots de passe ne correspondent pas, veuillez reessayer!");
      // }
    }
}

  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CONNECTEZ VOUS SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous n’avez pas un compte existant cliquez</span> {'  '} 
        <Link to="signup" className='link-deco'>ici</Link></div>
        <div className='entries-pic'>
          <Form  style={{ width: '400px' }} onSubmit={handleSubmit} method='POST'>

            <Row className='mb-3'>
              <Form.Group className="user" controlId="username">
                <Form.Control 
                  name='username'
                  type='text'
                  placeholder="Nom d'utilisateur" 
                />
              </Form.Group>
            </Row>
            <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>
            
            <Row className='mb-3'>
              <Form.Group as={Col} controlId="password">
                <Form.Control 
                  name="pwd" 
                  type="password" 
                  placeholder="Mot de Passe"
                  />
              </Form.Group>
            </Row>

            <Button className='custom-button' variant="secondary" type="submit">
              Connectez Vous
            </Button><br/><br/>
            <span className='sub-text'>Vous etes un employer? </span> {'  '} 
            <Link to="/connexion/login-employee" className='link-deco'>Cliquer ici!</Link>
          </Form>
          <img className='image' src={Image} alt="/"/>
        </div>
      </div>
    </div>
  )
}