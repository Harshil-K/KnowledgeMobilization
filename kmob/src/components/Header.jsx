import React from 'react';
import Navbar from './Navbar';
import './HeaderFooter.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <a href = "/"><img src="obscura_logo.png" alt="Logo" className="logo" /></a>
        <h1 className="site-title">OBSCURA</h1>
        <img src="c4_logo.png" alt="Icon" className="logo" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
