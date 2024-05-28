// Carousel Image
import Imge from "../../../assets/Car-Sale.png"
import Image from "../../../assets/Car-women.png";

// Background Image
import PinkTop from "../../../assets/Landing_Pink_Top.svg"
import PinkBot from "../../../assets/Landing_Pink_Bottom.svg"
import Green from "../../../assets/Landing_Green_Pink.svg"

// Categories Images
import Male from "../../../assets/man.svg"
import Female from "../../../assets/woman.svg"
import Child from "../../../assets/child.svg"

import { Carousel } from 'react-bootstrap';

import { Link } from "react-router-dom";

import ProductCard from '../utilities/ProductCard.jsx';

import "../components/styles/ClientInterface.css"
import "./styles/Landing.css"
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

const Landing = () => {

  const [cat1, setCat1] = useState([]);
  const [cat2, setCat2] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response1 = await axios.get('http://127.0.0.1:8000/api/products-by-category/1002')
        console.log(response1.data) // Debug: log the photo data
        setCat1(response1.data)

        const response2 = await axios.get('http://127.0.0.1:8000/api/products-by-category/1000')
        console.log(response2.data) // Debug: log the photo data
        setCat2(response2.data)

        // setLoading(false)
      } catch (err) {
        setError(err.message)
      }
    }
    fetchCategories();
  }, [])

  if (error) {
    return <p>Error fetching products: {error}</p>;
  }


  return (
    <div>
      {/*Background Images*/}
      <img src={PinkTop} className="pink-top" alt="yo"/>
      <img src={PinkBot} className="pink-bot" alt="yo"/>
      <img src={Green} className="green" alt="yo"/>

      <div className="categories">
        <Link to="/client/categorie/hommes" className="categorie cat-link">
          <img src={Male} className="categorie_image"/>
          <h5 className="categorie_text">HOMMES</h5>
        </Link>

        <Link to="/client/categorie/femmes" className="categorie cat-link">
          <img src={Female} className="categorie_image"/>
          <h5 className="categorie_text">FEMMES</h5>
        </Link>

        <Link to="/client/categorie/enfants" className="categorie cat-link">
          <img src={Child} className="categorie_image"/>
          <h5 className="categorie_text">ENFANTS</h5>
        </Link>
      </div>

      <h5 className="carousel_title">First slide label</h5>
      <Carousel className="custom-carousel animated">
        <Carousel.Item>
          <Link to="/client/search">
            <img
              className="carousel_item"
              src={Image}
              alt="First slide"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel_item"
            src={Imge}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel_item"
            src={Image}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className='product_section'>
        <h5 className="product_list_title">Nos Polos</h5>
        <div className="product_list">
          {cat1.slice(0, 5).map(prod => (
            <Link to={"/client/product/"+prod.codePro} className="prod-link">
              <ProductCard key={prod.codePro} title={prod.nomPro} image={prod.pictures[0].lienPhoto} price={prod.prix}/>
            </Link>
          ))}
        </div>
      </div>

      <div className='product-section'>
        <h5 className="product_list_title">Nos T-Shits</h5>
        <div className="product_list">
          {cat2.slice(0, 5).map(prod => (
            <Link to={"/client/product/"+prod.codePro} className="prod-link">
              <ProductCard key={prod.codePro} title={prod.nomPro} image={prod.pictures[0].lienPhoto} price={prod.prix}/>
            </Link>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Landing