import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css'
import initialState from '../initialState';

const Header = () => {
  const socialMedia = initialState.data.contact;
  return (
    <header className="Header">
      <div className="Header-logo">
        <h1>BJ</h1>
      </div>
      <nav className="Header-nav">
        <ul>
          <li>
            <Link className="Header-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Header-link" to="/about">
              About me
            </Link>
          </li>
          <li>
            <Link className="Header-link" to="/project">
              Projects
            </Link>
          </li>
          <li>
            <Link className="Header-link" to="/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="social-media">
        <a target="_blank" href={socialMedia.github}>
        <i className="fab fa-github-square" />
        </a>
        <a target="_blank" href={socialMedia.linkedin}>
        <i className="fab fa-linkedin" />
        </a>
        <a target="_blank" href={socialMedia.twitter}>
        <i className="fab fa-twitter-square" />
        </a>
      </div>
    </header>
  );
};

export { Header };