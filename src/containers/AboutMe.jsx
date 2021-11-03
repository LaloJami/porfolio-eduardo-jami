import React from 'react';
import initialState from '../initialState';
import photo from '../assets/images/photo_eduardo.jpg';
import '../styles/containers/AboutMe.css'

const AboutMe = () => {
  const data = initialState.data 
  return (
    <div className="About">
      <div className="About-container">
        <div className="About-info">
          <h3>Sobre mi <i className="fas fa-address-card" /></h3>
          <p>{data.aboutFull}</p>
          <p>{data.aboutpr2}</p>
          <h3>Mis habilidades <i className="fas fa-laptop-code" /></h3>
          <ul>
            {data.skills.map((skill,i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="About-picture">
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export { AboutMe };