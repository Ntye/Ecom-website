// import React from 'react'
import Imge from "../../../assets/Car-Sale.png"
import Image from "../../../assets/Car-women.png";
import { Carousel } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import "./styles/Landing.css"
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      Landing

      <Carousel  className="custom-carousel">
        
        <Carousel.Item>
          <Link to="/client/search">
          <img
          className="d-block w-100"
            src={Image}
            alt="First slide"
          />
          </Link>
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Imge}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
    
  )
}

export default Landing