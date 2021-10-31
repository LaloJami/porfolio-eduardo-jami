import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css'

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-logo">
        <h1>EJ</h1>
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
        <i>ln</i>
        <i>github</i>
        <i>twitter</i>
      </div>
    </header>
  );
};

export { Header };