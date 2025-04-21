import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';


//Centre the elements for each page
function Navbar() {
  return (
    //Add the FAQ link in there.
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/guidelines">Guidelines</Link>
      <Link to="/generalresources">General Resources</Link>
      <Link to="/legalresources">Legal Resources</Link>
      <Link to="/financialresources">Financial Resources</Link>
      <Link to="/RAForm">Risk Assessment Form</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/team">About Us</Link>
    </nav>
  );
}

export default Navbar;
