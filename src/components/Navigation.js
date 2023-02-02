import React from 'react';
import { Link } from 'react-router-dom';
import Divider from './divider/Divider';
import './Navigation.css';

const Navigation = () => (
  <header className="header">
    <Link to="/">
      <h1 id="logo">Math Magicians</h1>
    </Link>
    <nav className="nav">
      <Link to="/" className="links">Home</Link>
      <Divider />
      <Link to="calculator" className="links">Calculator</Link>
      <Divider />
      <Link to="/quotes" className="links">Quotes</Link>
    </nav>
  </header>
);

export default Navigation;
