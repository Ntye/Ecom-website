import "./style/CartItem.css"

import * as Fa from "react-icons/fa"
import {useEffect, useState} from "react";

export const CartItem = ({ title, image, description, price , quantity,  isChecked, setIsChecked, onUpdateQuantity, onRemoveItem}) => {

  const [localQuantity, setLocalQuantity] = useState(quantity);

  useEffect(() => {
    // Update the parent component with the local quantity whenever it changes
    onUpdateQuantity(localQuantity);
  }, [localQuantity, onUpdateQuantity]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 0;
    setLocalQuantity(newQuantity >= 0 ? newQuantity : 0);
  }

  return (
    <div>
      <div className="item-container">
        <div className="item-content">
          <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked()}
                className="custom-checkbox"
            />
          </div>

          <div>
            <img
                src={image}
                className="item-image"
                alt="Shopping item"
            />
          </div>
          <div className="ms-3">
            <h5>{title}</h5>
            <p className="small mb-0">{description}</p>
            <p className="small mb-0"><b>Unit Price</b>: ${price}</p>
          </div>
        </div>
        <div className="price m-lg-4">
          <div className="item-input">
            <input
                type="number"
                min="0"
                value={localQuantity}
                onChange={handleQuantityChange}
                className="form-control form-control-sm item-number"
            />
          </div>

          <div className="total">
            <h5 className="mb-0">${localQuantity * price}</h5>
          </div>

          <button className="trash-button trash" onClick={onRemoveItem}>
            <Fa.FaTrash />
          </button>
        </div>

      </div>
    </div>
  );
};