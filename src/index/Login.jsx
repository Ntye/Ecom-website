import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Col, Row, Button } from 'react-bootstrap'
import "./styles/Connexion.css"
import { Link } from 'react-router-dom'
import Caissiere from "../assets/Cassiere-Interface.svg"
import Client from "../assets/Client-Interface.svg"
import Patron from "../assets/Patron-Interface.svg"
import Image from "../assets/log.svg"
import { useState } from 'react'
import axios from 'axios'



const Login = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  }

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost/login.php', formData);
      console.log('Response from PHP:', response.data);
      // Handle response accordingly
    } catch (error) {
      console.error('Error:', error);
      // Handle error accordingly
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CONNECTEZ VOUS SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous n’avez pas un compte existant cliquez</span> {'  '} 
        <Link to="signup" className='link-deco'>ici</Link></div>
        <div className='entries-pic'>
          <Form  style={{ width: '400px' }} onSubmit={handleSubmit}>
            <div className="image-radio-group">
              <label className={`image-option ${selectedOption === 'option1' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="option" 
                  value="option1" 
                  checked={selectedOption === 'option1'} 
                  onChange={() => handleOptionChange('option1')} 
                />
                <img 
                className='interface'
                src={Client}
                alt="/"
                />
              </label>
              <label className={`image-option ${selectedOption === 'option2' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="option" 
                  value="option2" 
                  checked={selectedOption === 'option2'} 
                  onChange={() => handleOptionChange('option2')} 
                />
                <img 
                  className='interface'
                  src={Caissiere}
                  alt="/"
                />
              </label>
              <label className={`image-option ${selectedOption === 'option3' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="option" 
                  value="option3" 
                  checked={selectedOption === 'option3'} 
                  onChange={() => handleOptionChange('option3')} 
                />
                <img 
                  className='interface'
                  src={Caissiere}
                  alt="/"
                />
              </label>
              <label className={`image-option ${selectedOption === 'option4' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="option" 
                  value="option4" 
                  checked={selectedOption === 'option4'} 
                  onChange={() => handleOptionChange('option4')} 
                />
                <img 
                  className='interface'
                  src={Patron}
                  alt="/"
                />
              </label>
              {/* Add more options as needed */}
            </div>

            <Form.Group className="user" controlId="formGridAddress1">
              <Form.Control 
                value={formData.username} 
                onChange={handleInputChange} 
                placeholder="Nom d'utilisateur" 
              />
            </Form.Group>

            <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>
            
            <Row className="pass">
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control id="pwd" name="pwd" type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridSexe">
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