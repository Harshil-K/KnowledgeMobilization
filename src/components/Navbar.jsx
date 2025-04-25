import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';
import "./Navbar.css";


//Centre the elements for each page
function Navbar() {
  return (
    //Add the FAQ link in there.
    <nav className="navbar">
      <Link className='titles' to="/">Home</Link>
      {/* <Link to="/guidelines">Guidelines</Link> */}
      <Link className='titles' to="/generalresources">General Resources</Link>
      <Link className='titles' to="/legalresources">Legal Resources</Link>
      <Link className='titles' to="/financialresources">Financial Resources</Link>
      <Link className='titles' to="/RAForm">Risk Assessment Form</Link>
      <Link className='titles' to="/survey">Survey Results</Link>
      <Link className='titles' to="/mission">Our Goals</Link>
      <Link className='titles' to="/faq">FAQ</Link>
    </nav>
  );
}

export default Navbar;
