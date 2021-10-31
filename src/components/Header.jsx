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
        <a target="_blank" href="https://github.com/LaloJami">
        <i className="fab fa-github-square" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/bryan-eduardo-jami-jami">
        <i className="fab fa-linkedin" />
        </a>
        <a target="_blank" href="https://twitter.com/eduardo_jami">
        <i className="fab fa-twitter-square" />
        </a>
      </div>
    </header>
  );
};

export { Header };