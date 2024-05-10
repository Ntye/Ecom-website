

import "./styles/Cart.css"
import {CartItem} from "../utilities/CartItem.jsx";
import {useEffect, useState} from "react";
import * as Fa from "react-icons/fa";

const cartItems = [
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
];
export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const updatedCartItems = [...cartItems];

  const handleUpdateQuantity = (index, newQuantity) => {
    // const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    // Recalculate total price or perform any other necessary actions
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



  return (
      <div>
        <div className="cart_title_text">
          <h1 className="cart_page">Shopping Cart</h1>
          <p className="cart_items">Number of Items: {countSelectedItems()}</p>
        </div>

        <div className="select-all" >
          <input
              type="checkbox"
              checked={!checkboxStates.includes(false)}
              onChange={() => checking(checkboxStates.includes(false))}
              className="custom-checkbox"
          />
          <p className="cart_items">Select all</p>
        </div>

        <div className="cart_body">
          <div className="leftside">
            {cartItems.map((item, index) => (
              <CartItem
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                description={item.description}
                isChecked={checkboxStates[index]}
                setIsChecked={()=>  setCheckboxStates(prevState => prevState.with(index, !prevState[index]))}
                onUpdateQuantity={(newQuantity) => handleUpdateQuantity(index, newQuantity)}
                onRemoveItem={() => handleRemoveItem(index)}
              />
            ))}
          </div>

          <div className="rightside">
            YOOOOOOOOOOOOOOOOOOOO
            <p className="cart_items">Total Amount: ${calculateTotalAmount()}</p>
          </div>
        </div>
      </div>

  );
}
