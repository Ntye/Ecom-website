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
// import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { Link } from "react-router-dom";

import ProductCard from '../utilities/ProductCard.jsx';

import "../components/styles/ClientInterface.css"
import "./styles/Landing.css"
import {useEffect, useRef, useState} from "react";

const Landing = () => {
const divRef = useRef(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(divRef.current);

  return () => {
    if (divRef.current) {
      observer.unobserve(divRef.current);
    }
  };
}, []);

  return (
    <div>
      {/*Background Images*/}
      <img src={PinkTop} className="pink-top"/>
      <img src={PinkBot} className="pink-bot"/>
      <img src={Green} className="green"/>

      {/*Breadcrumbs*/}
      {/*    <div className="breadcrumb">*/}
      {/*    <Breadcrumb>*/}
      {/*      <Breadcrumb.Item>*/}
      {/*        <Link to="/client" className="breadcrumb-item">Home</Link>*/}
      {/*      </Breadcrumb.Item>*/}
      {/*      <Breadcrumb.Item >*/}
      {/*        <Link to="/client" className="breadcrumb-item">Library</Link>*/}
      {/*      </Breadcrumb.Item>*/}
      {/*      <Breadcrumb.Item>*/}
      {/*        <Link to="/client" className="breadcrumb-item-active">Data</Link>*/}
      {/*      </Breadcrumb.Item>*/}
      {/*    </Breadcrumb>*/}
      {/*</div>*/}

      <div className="categories">
        <div className="categorie">
          <img src={Male} className="categorie_image"/>
          <h5 className="categorie_text">HOMMES</h5>
        </div>
        <div className="categorie">
          <img src={Female} className="categorie_image"/>
          <h5 className="categorie_text">FEMMES</h5>
        </div>
        <div className="categorie">
          <img src={Child} className="categorie_image"/>
          <h5 className="categorie_text">ENFANTS</h5>
        </div>
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
          {/*<Carousel.Caption>*/}
          {/*  <h5>First slide label</h5>*/}
          {/*  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
          {/*</Carousel.Caption>*/}
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
      <div ref={divRef} className={`product_section ${isVisible ? 'animated' : ''}`}>
        <h5 className="product_list_title">First slide label</h5>
        <div className="product_list">
          <ProductCard title="Product 1" image={Female}
            // description="Description of Product 1"
                       price={20.99}/>
          <ProductCard title="Product 1" image={Female} price={20.99}/>
          <ProductCard title="Product 1" image={Female} price={20.99}/>
          <ProductCard title="Product 1" image={Female} price={20.99}/>
          <ProductCard title="Product 1" image={Female} price={20.99}/>
          <ProductCard title="Product 1" image={Female} price={20.99}/>
        </div>
      </div>

      <div ref={divRef} className={`product-section ${isVisible ? 'animated' : ''}`}>
        <h5 className="product_list_title">First slide label</h5>
        <div className="product_list">
          <ProductCard title="Product 1" image={Female} price={20.99}/>
          <ProductCard title="Product 1" image={Female} price={20.99}/>
          <ProductCard title="Product 1" image={Female} price={20.99}/>
          <ProductCard title="Product 1" image={Female} price={20.99}/>
          <ProductCard title="Product 1" image={Female} price={20.99}/>
          <ProductCard title="Product 1" image={Female} price={20.99}/>
        </div>
      </div>
    </div>

  )
}

export default Landing