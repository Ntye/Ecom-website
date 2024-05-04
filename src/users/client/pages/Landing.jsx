// import React from 'react'
import Imge from "../../../assets/Car-Sale.png"
import Image from "../../../assets/Car-women.png";
import Green from "./../../../assets/client_green.svg"
import PinkTop from "../../../assets/client_pink.svg"
import PinkBot from "../../../assets/pink_bottom.svg"
import

import { Carousel } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import "./styles/Landing.css"
import "../components/styles/ClientInterface.css"
import { Link } from "react-router-dom";


const Landing = () => {
  return (
      <div>
        <img src={PinkTop} className="pink-top"/>
        <img src={PinkBot} className="pink-bot"/>
        <img src={Green} className="green"/>
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/client" className="breadcrumb-item">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item >
              <Link to="/client" className="breadcrumb-item">Library</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/client" className="breadcrumb-item-active">Data</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="categories">
            <div>
                <img src={}/>
            </div>
        </div>

        <Carousel className="custom-carousel">
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