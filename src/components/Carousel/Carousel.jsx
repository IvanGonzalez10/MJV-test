import React from "react";
import { Carousel } from "antd";
import './Carousel.css'

export const Carrusel = () => {
  return (
    <Carousel autoplay>
      <div className="carousel-container">
        <div className="text-container"></div>
        <p>ENCUENTRA LAS RAZAS DE PERROS QUE MAS TE GUSTAN</p>
        <img src="/assets/gd.jpg" alt="GOLDEN" />
      </div>
    </Carousel>
  );
};
