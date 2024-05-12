import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css"
import "./styles/Connexion.css"
import { Link } from 'react-router-dom';
import Image from "../assets/log.svg"
import swal from 'sweetalert'
import {useEffect, useState} from "react";

import axios from 'axios';
const Signup = () => {
  const sexe = 'Sexe'
  const ville = 'Ville'

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cities');

        const { data } = response;

        // setCities(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const handleSubmit = async (e) => {
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
      console.log("All fields are not empty.");
      const form = new FormData(e.currentTarget);

      form.set('nom', form.get('nom') + ' ' + form.get('prenom'));

      if ( form.get('pwd') === form.get('confpwd')) {
        form.delete('prenom');
        form.delete('confpwd');

        form.forEach((value, key)=>data[key] = value)
        console.log(data)

        const url = "http://127.0.0.1:8000/api/sign-in";
        const response = await axios.post(url, data)
          // .then(response => alert(response.data))
          // .catch(error => alert(error));
      }
      else {
        swal("les mots de passe ne correspondent pas, veuillez reessayer!");
      }
      console.log(data)
    } else {
      console.log("At least one field is empty.");
    }
  }
  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CREEZ VOTRE COMPTE SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous avez déjà un compte existant cliquez</span> {'  '}
          <Link to="/connexion" className='link-deco'>ici</Link></div>
        <div className='entries-pic'>

          <Form style={{ width: '400px' }} onSubmit={handleSubmit}  method='POST'>
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
                name='user'
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
                <Form.Control name="mobile" type="text" placeholder="Numero"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Ville">
                <Form.Select name="ville" defaultValue={ville}>
                  <option value='' type='text'>Ville</option>
                  {cities.map((item) => (
                    <option key={item.idVille} value={item.idVille}>{item.libelle}</option>
                  ))}

                </Form.Select>
              </Form.Group>
            </Row>

            <span className='sub-text text-bel' >Date de Naissance </span>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Date">
                <Form.Control name="dateNaiss" type="date" placeholder="Date de naissance"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Sexe">
                <Form.Select name='sexe'>
                  <option value="">Sexe</option>
                  <option value ="0" type='text'> Homme </option>
                  <option value ="1" type='text'>Femme</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button className='custom-button' variant="secondary" type="submit" value="SEND">
              Inscrivez Vous
            </Button><br/><br/>
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