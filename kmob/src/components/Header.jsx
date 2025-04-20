import React from 'react';
import Navbar from './Navbar';
import './HeaderFooter.css';
import { useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation(); // ⬅️ Get current route
  const isHomePage = location.pathname === '/'; // ⬅️ Check if it's the homepage

  return (
    <header className="header">
      <div className="header-top">
        <a href="/"><img src="obscura_logo.png" alt="Logo" className="logo" /></a>

        <h1 className="site-title">OBSCURA</h1>

        <img src="c4_logo.png" alt="Icon" className="logo" />
      </div>

        <div className="full-width-divider"></div>

        {isHomePage && (
        <h1 className="site-description">Bringing Clarity To Complexity</h1>
        )}

      <div className="navbar-container">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
