import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Form, Col, Button } from 'react-bootstrap'
import "./styles/Connexion.css"
import {Link} from 'react-router-dom'
import Image from "../assets/log.svg"
import swal from 'sweetalert'
import axios from "axios";
// import axios from '../api/axios'


export default function Login() {
  async function handleSubmit (e) {
    e.preventDefault();
    let error = {
      title: 'You should enter the following field(s)\n\n',
      message: ''
    }
    const data = {}
    const form = new FormData(e.currentTarget)

    let allFieldsNotEmpty = true;

    for (const pair of form.entries()) {
      if (pair[1].trim() === '') {
        error.message = error.message + '- ' +pair[0] +'\n'
        allFieldsNotEmpty = false;
      }
    }

    if (allFieldsNotEmpty) {
      const form = new FormData(e.currentTarget);

      form.forEach((value, key) => data[key] = value)
      console.log(data)

      try {
        const url = "http://127.0.0.1:8000/api/login";
        const response = await axios.post(url, data)

        swal({
          title: "Login Successful",
          icon: "success",
        })
        setTimeout(() => {
          window.location.href = "/client";
        }, 2000);

      }catch (error) {
        swal("User already Exists")
        console.log(response.data.message)
      }
    } else {
      swal({
        title: error.title,
        text: error.message,
        icon: "error",
        content: {
          element: "button",
          attributes: {
            text: "Retry",
          },
        },
      })
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
                name='user'
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