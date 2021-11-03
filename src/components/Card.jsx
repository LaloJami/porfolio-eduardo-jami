import React from 'react';
import "../styles/components/Card.css"
import imageTest from '../assets/images/4884785.jpg'

const Card = ({ project }) => {
  return (
    <div className="Card">
      <div className="barra-item">
        <div className="circulo-item circulo-rojo"></div>
        <div className="circulo-item circulo-amarillo"></div>
        <div className="circulo-item circulo-verde"></div>
      </div>
      <div className="Card-container">
        <div className="Card-info">
          <h3>{project.name}</h3>
          <ul>
            <li>hola</li>
          </ul>
        </div>
        <img className="card-image" src={imageTest} alt="" />
      </div>
    </div>
  );
};

export { Card };