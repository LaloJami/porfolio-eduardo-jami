import React from 'react';
import { Link } from 'react-router-dom';
import initialState from '../initialState';
import '../styles/containers/Home.css'
import webPage from '../assets/images/4884785-removebg-preview.png';

const Home = () => {
  const data = initialState.data;
  return (
    <div className="Home">
      
      <div className="Home-main-container">
        <h3>Hola, yo soy</h3>
        <h1>{data.name}</h1>
        <p>{data.aboutShort}</p>
        <Link className="Home-button" to="/about">
          <button type="button">
            Sobre mi
          </button>
        </Link>
      </div>
      <div className="Home-img">
        <figure>
          <img src={webPage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export { Home };