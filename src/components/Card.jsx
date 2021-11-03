import React from 'react';
import "../styles/components/Card.css"
import imageTest from '../assets/images/4884785.jpg'

const Card = () => {
  return (
    <div className="Card">
      <div className="barra-item">
        <div className="circulo-item circulo-rojo"></div>
        <div className="circulo-item circulo-amarillo"></div>
        <div className="circulo-item circulo-verde"></div>
      </div>
      <div className="Card-container">
        <h3>Proyect Name</h3>
        <ul>
          <li>hola</li>
        </ul>
        <img className="card-image" src={imageTest} alt="" />
      </div>
    </div>
  );
};

export { Card };