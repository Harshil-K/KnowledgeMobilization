import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Tab1</Link>
      <Link to="/">Tab2</Link>
      <Link to="/">Tab3</Link>
      <Link to="/">FAQ</Link>
    </nav>
  );
}

export default Navbar;
