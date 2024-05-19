import "./styles/Cart.css"
import {CartItem} from "../utilities/CartItem.jsx";
import {useEffect, useState} from "react";
import Green from "../../../assets/Cart_Green.svg";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";


export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      "id": 1,
      "title": "iPhone 11 Pro",
      "image": "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
      "price": 450,
      "quantity": 1,
      "description": "256GB, Navy Blue"
    },
    {
      "id": 2,
      "title": "Samsung Galaxy S20",
      "image": "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
      "price": 700,
      "quantity": 1,
      "description": "128GB, Cosmic Gray"
    },
    {
      "id": 3,
      "title": "iPhone 11 Pro",
      "image": "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
      "price": 450,
      "quantity": 1,
      "description": "256GB, Navy Blue"
    },
    {
      "id": 4,
      "title": "Samsung Galaxy S20",
      "image": "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
      "price": 700,
      "quantity": 1,
      "description": "128GB, Cosmic Gray"
    }
  ])

  const updatedCartItems = [...cartItems];
  const [cities, setCities] = useState([]);

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
    let total = 0;
    cartItems.forEach((item, index) => {
      if (checkboxStates[index]) {
        total += updatedCartItems[index].quantity* item.price
      }
    });
    return total;
  };

  const countSelectedItems = () => {
    let count = 0;
    checkboxStates.forEach(checked => {
      if (checked) {
        count++;
      }
    });
    return count;
  };

  useEffect(() => {
    setCheckboxStates(cartItems.map(() => false))
    return () => {}
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cities')

        const { data } = response;

        setCities(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const selectedItems = cartItems.filter((_, index) => checkboxStates[index])

  return (
    <div>
      <img src={Green} className="green-top"/>

      <div className="cart_title_text">
        <h1 className="cart_page">Shopping Cart</h1>
        <p className="cart_items">Number of Items: {cartItems.length}</p>
      </div>

      <div className="select-all">
        <input
          type="checkbox"
          checked={!checkboxStates.includes(false)}
          onChange={() => checking(checkboxStates.includes(false))}
          className="custom-checkbox"
        />
        <p className="cart_items">Select all</p>
      </div>

      <div className="cart_body">
        <div className="top">
          {cartItems.map((item, index) => (
            <CartItem
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              description={item.description}
              isChecked={checkboxStates[index]}
              setIsChecked={() => setCheckboxStates(prevState => prevState.with(index, !prevState[index]))}
              onUpdateQuantity={(newQuantity) => handleUpdateQuantity(index, newQuantity)}
              onRemoveItem={() => handleRemoveItem(index)}
            />
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
                      <td>{item.title} <br/>
                        {item.description}
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.price*item.quantity}</td>
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
