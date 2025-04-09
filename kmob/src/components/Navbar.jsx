import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Guidelines</Link>
      <Link to="/resources">Legal Resources</Link>
      <Link to="/">Financial Resources</Link>
      <Link to="/RAForm">Risk Assessment Form</Link>
      <Link to="/">FAQ</Link>
    </nav>
  );
}

export default Navbar;
