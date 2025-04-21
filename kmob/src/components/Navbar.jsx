import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Guidelines</Link>
      <Link to="/generalresources">General Resources</Link>
      <Link to="/legalresources">Legal Resources</Link>
      <Link to="/">Financial Resources</Link>
      <Link to="/RAForm">Risk Assessment Form</Link>
      <Link to="/">FAQ</Link>
      <Link to="/team">About Us</Link>
    </nav>
  );
}

export default Navbar;
