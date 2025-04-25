import React from 'react';
import './HeaderFooter.css';

function Footer() {
  return (
    <footer className="footer enhanced-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-heading">Our Partners</h2>
          <p className="footer-text">
          We are proud to collaborate with the Knowledge Mobilization Office at York University. They have provided invaluable guidance and support, helping us arrange impactful meetings to drive our project forward.
          </p>
          <img src="\c4_logo.png" alt="York University Logo" className="york-logo" />
        </div>
        <div className="footer-right">
          <p className="footer-email">
            <strong>Email:</strong> <a href="mailto:mjohnny@yorku.ca">mjohnny@yorku.ca</a>
          </p>
          <p className="footer-address">
            <strong>Address: </strong> 
            4700 Keele Street, Toronto
            <br />ON M3J 1P3 Canada<br />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;