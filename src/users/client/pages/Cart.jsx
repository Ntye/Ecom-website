import "./styles/Cart.css"
import {CartItem} from "../utilities/CartItem.jsx";
import {useEffect, useState} from "react";
import Green from "../../../assets/Cart_Green.svg";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import axios from "axios";


export default function Cart() {
  const [cartItems, setCartItems] = useState([])
  const updatedCartItems = [...cartItems];
  const [cities, setCities] = useState([]);
  const {nom_client}= useParams()
  const data1 = {nomClient : nom_client}

  const handleUpdateQuantity = (index, newQuantity) => {
    // const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const [checkboxStates, setCheckboxStates] = useState([])
  const checking = (state = false) => setCheckboxStates(cartItems.map(() => state))

  const calculateTotalAmount = () => {
    let total = 0
    cartItems.forEach((item, index) => {
      if (checkboxStates[index]) {
        total += updatedCartItems[index].product.quantite* item.montant
      }
    })
    return total
  }

  const countSelectedItems = () => {
    let count = 0
    checkboxStates.forEach(checked => {
      if (checked) {
        count++
      }
    })
    return count
  }

  useEffect(() => {
    setCheckboxStates(cartItems.map(() => false))
    return () => {}
  }, [])

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cities')
        const { data } = response
        setCities(data)

      } catch (error) {
        console.error('Error fetching cities:', error)
      }
    }
    fetchCities()
  }, [])


  useEffect(() => {
    const fetchProduct = () => {
      axios.post('http://127.0.0.1:8000/api/commande/search', data1)
        .then(response => {
          console.log(response.data);
          setCartItems(response.data.commandes)
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          console.log('Request completed')
        });
    };

    fetchProduct()
  }, [])

  const selectedItems = cartItems.filter((_, index) => checkboxStates[index])

  return (
    <div>
      <img src={Green} className="green-top"/>

      <div className="cart_title_text">
        <h1 className="cart_page">Shopping Cart</h1>
        <p className="cart_items">Number of Items: {cartItems.length}</p>
      </div>

      <div className="cart_body">
        <div className="top">
          {cartItems.map((item, index) => (
            <div>
              <CartItem
                key={item.nomClient}
                title={item.product.nomPro}
                image={item.product.couleur}
                price={item.montant}
                quantity={item.product.quantite}
                description={item.product.description}
                isChecked={checkboxStates[index]}
                setIsChecked={() => setCheckboxStates(prevState => prevState.with(index, !prevState[index]))}
                onUpdateQuantity={(newQuantity) => handleUpdateQuantity(index, newQuantity)}
                onRemoveItem={() => handleRemoveItem(index)}
              />
            </div>
          ))}
        </div>

        <div className="bottom">
          <div className="d-flex justify-content-between flex-row">
            <Form style={{width: '40%'}} method='POST'>
              <h5>Lieu de Livraison</h5>
              <Form.Group className="user mb-3" controlId="username">
                <Form.Select className="mb-3" name="idVille" defaultValue="Se Faire Livrer?">
                  <option value='' type='text'>Se Faire Livrer?</option>
                  <option value='0'>Non</option>
                  <option value="1">Oui</option>
                </Form.Select>
                <Form.Select className="mb-3" name="idVille" defaultValue="Ville">
                <option value='' type='text'>Ville</option>
                  {cities.map((item) => (
                    <option key={item.idVille} value={item.idVille}>{item.libelle}</option>
                  ))}
                </Form.Select>
                <Form.Control
                  className="mb-3"
                  name='adresse'
                  type='text'
                  placeholder="Quartier"
                />
                <Form.Control
                  className="mb-3"
                  name='commentaire'
                  type='text'
                  placeholder="Commentaire"
                />
              </Form.Group>
            </Form>

            <div style={{width: '50%'}} className="check">
              <table>
                <thead>
                <tr>
                  <th><h5>Selected Items</h5></th>
                  <th><h5>Quantity</h5></th>
                  <th><h5>Sous Total</h5></th>
                </tr>
                </thead>
                <tbody className="tbody">
                  {selectedItems.map((item) => (
                    <tr key={item.id} className="selected-item">
                      <td>{item.product.nomPro} <br/>
                      </td>
                      <td>{item.product.quantite}</td>
                      <td>{item.montant*item.product.quantite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="continue">
                <h6>Number of Items: {countSelectedItems()}</h6>

                <div>
                  <table>
                    <tbody>
                    <tr>
                      <td><h6 className="cart_items toto">Total Amount: </h6></td>
                      <td>{calculateTotalAmount()} FCFA</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>

  );
}
