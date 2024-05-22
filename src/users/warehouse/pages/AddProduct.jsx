import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Col, Form, Row} from "react-bootstrap";

import "./styles/AddProduct.css"
import * as Fa from "react-icons/fa";
import {Link} from "react-router-dom";
import swal from "sweetalert";

function AddProduct() {

  const [photo, setPhoto] = useState(null);
  const [cat, setCat] = useState([])
  const [codePro, setCodePro] = useState('');
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 0;
    setQte(newQuantity >= 0 ? newQuantity : 0);
  }

  const [error, setError] = useState(null);

  if (error) {
    return <p>Error fetching photos: {error}</p>;
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories')
        const data1 = response.data;
        setCat(data1);

      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('codePro', codePro);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message || 'Photo uploaded successfully!');
    } catch (error) {
      setMessage('An error occurred while uploading the photo.');
    }
  };

  const handleAddProduct = async (e) => {
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
        const url = "http://127.0.0.1:8000/api/new-product";
        const response = await axios.post(url, data)

        setMessage1(response.data.message || 'Photo uploaded successfully!');
      }catch (error) {
        setMessage1('An error occurred while uploading the photo.');
        // swal("User already Exists")
        // console.log(response.data.message)
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



    try {
      const response = await axios.post('http://127.0.0.1:8000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message || 'Photo uploaded successfully!');
    } catch (error) {
      setMessage('An error occurred while uploading the photo.');
    }
  };



  return (
    <div className="d-flex flex-row whole mb-5">
      <div className="add-item-page">
        <h2 className="prod-title">Add Product</h2>
        <Form className="add-item-form" onSubmit={handleAddProduct} method='POST'>

          <Form.Group>
            <Form.Select className="mb-3" name="idCategorie" defaultValue="Categorie">
              <option value='' type='text'>Categorie</option>
              {cat.map((item) => (
                <option key={item.idCat} value={item.idCat}>{item.nomCat}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="codePro">
            <Form.Control
              name='codePro'
              type='text'
              placeholder="Code du Produit"
              onChange={(e) => setCodePro(e.target.value)}
              value={codePro}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="nomPro">
            <Form.Control
              name="nomPro"
              type="text"
              placeholder="Nom du Produit"
            />
          </Form.Group>

          <Form.Group as={Col} className=" qte mb-3" controlId="qte">
            <Form.Control
              name='qte'
              type='number'
              min="0"
              placeholder="Quantite"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="prixAchat">
            <Form.Control
              name="prixAchat"
              type="text"
              placeholder="Prix d'Achat"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="descriptionControl">
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Description"
              rows={3}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pourcentage">
            <Form.Control
              name="pourcentage"
              type="text"
              placeholder="Pourcentage"
            />
          </Form.Group>


          <Button className="add-button" type="submit">
            <Fa.FaBook/> Add Product
          </Button>
          {message1 && <p>{message1}</p>}
        </Form>
      </div>

      <div>
        <h2>Upload Photo</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="text" name="codePro" className="field form-control form-control-sm m-lg-3  mt-3 mb-3" required
                 value={codePro} onChange={(e) => setCodePro(e.target.value)} placeholder="Code du produit"/>
          <input type="file" name="photo" className=" form-control form-control-sm m-lg-3 mt-3 mb-3" required
                 onChange={(e) => setPhoto(e.target.files[0])}/>
          <Button className="add-button mb-3" type="submit">
            <Fa.FaPhotoVideo/> Upload Picture
          </Button>
        </form>
        {message && <p>{message}</p>}

        <span className='sub-text text-bel'><b>NB:</b> The product should be added beforehand !!!</span>

      </div>

    </div>
  )
}


export default AddProduct;