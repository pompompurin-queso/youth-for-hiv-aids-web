import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from './logoImage.jpeg'; 

function Navbar() {
  return (
    <nav className='navbar'>
      <div>
        <p className='logo'>𖥔 youth coders for hiv/aids ۪𖥔</p>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/introduction">Introduction</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/datascience">Data Science</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>
      </div>

      <img src={logoImage} alt="Logo" className="logo-image" />
    </nav>
  );
}

export default Navbar;
