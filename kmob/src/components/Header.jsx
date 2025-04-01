import React from 'react';
import Navbar from './Navbar';
import './HeaderFooter.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <img src="https://via.placeholder.com/50" alt="Logo" className="logo" />
        <h1 className="site-title">Your Website Name</h1>
        <img src="https://via.placeholder.com/50" alt="Icon" className="logo" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
