// import React from 'react';

import {Button, Col, Form} from "react-bootstrap";
import * as Fa from "react-icons/fa";
import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";

function ModifyProduct(props) {
  const [photo, setPhoto] = useState(null)
  const [cotegorie, setCategorie] =useState(null)
  const [cat, setCat] = useState([])
  const [codePro, setCodePro] = useState('')
  const [message1, setMessage1] = useState('')

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
    <div className="add-item-page mb-5">
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

          <Form.Group>
            <Form.Select className="mb-3" name="idProduit" defaultValue="Produit">
              <option value='' type='text'>Produit</option>
              {cat.map((item) => (
                <option key={item.idProd} value={item.idProd}>{item.nomProd}</option>
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
  );
}

export default ModifyProduct;