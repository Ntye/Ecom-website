import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Carousel, Modal } from 'react-bootstrap';
import * as Fa from "react-icons/fa";
import './styles/SingleProduct.css';

function SingleProduct() {
  const [productData, setProductData] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [couleur, setCouleur] =useState("")
  const [localQuantity, setLocalQuantity] = useState(1);
  const [showOverlay, setShowOverlay] = useState(false); // State to manage overlay visibility

  const { param } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${param}`);
        setProductData(response.data.product);
        setPhotos(response.data.photos);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProduct();
  }, [param]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 0;
    setLocalQuantity(newQuantity >= 0 ? newQuantity : 0);
  }

  const handleAddToCart = () => {
    setShowOverlay(true); // Show the overlay/modal when Add to Cart is clicked
    // You can add additional logic here, such as sending the selected product and quantity to the cart
  }

  const handleCloseOverlay = () => {
    setShowOverlay(false); // Hide the overlay/modal when closed
  }

  const handleOptionChange = (option) => {
    setCouleur(option)
    console.log(option)
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productData) {
    return <div>No product found</div>;
  }

  return (
    <div className="d-flex flex-row mb-3">
      <div className="d-flex flex-row product-1">
        <Carousel className="custom-carousel-1">
          {photos.map(photo => (
            <Carousel.Item key={photo.idPhoto}>
              <img
                className="d-block w-800 custom-carousel-item-1"
                src={photo.lienPhoto}
                alt={productData.nomPro}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="description">
        <h2>{productData.nomPro}</h2>
        <b>Description: <br/></b>
        {productData.description}
        <div className="d-flex flex-row align-items-center">
          <b>Quantity:</b>
          <input
            type="number"
            name="quantity"
            min="0"
            max={productData.qte}
            value={localQuantity}
            onChange={handleQuantityChange}
            className="form-control form-control-sm m-lg-3 w-25 mt-3 mb-3"
          />
        </div>
        <p><b>Prix:</b> {productData.prix} FCFA</p>
        <Button className="add-button" onClick={handleAddToCart}>
          <Fa.FaCartPlus/> Add to Cart
        </Button>
      </div>

      <Modal show={showOverlay} onHide={handleCloseOverlay}>
        <Modal.Header closeButton>
          <Modal.Title>Product Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product: {productData.nomPro}</p>
          {photos.map(photo => (
            <label key={photo.idPhoto} className={`image-option ${couleur === photo.idPhoto ? 'selected' : ''} m-lg-3`}>
              <input
                type="radio"
                name="option"
                value={photo.idPhoto}
                onChange={() => handleOptionChange(photo.idPhoto)}
              />

              <img
                className=" modal-img"
                src={photo.lienPhoto}
                alt={productData.nomPro}
              />
            </label>
          ))}


          <div className="d-flex flex-row align-items-center">
            <b>Quantity:</b>
            <input
              type="number"
              name="quantity"
              min="0"
              value={localQuantity}
              onChange={handleQuantityChange}
              className="form-control form-control-sm m-lg-3 w-25 mt-3 mb-3"
            />
          </div>
          <p>Total: {localQuantity * productData.prix} FCFA</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="add-button" onClick={handleAddToCart}>
            <Fa.FaCartPlus/> Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SingleProduct;
