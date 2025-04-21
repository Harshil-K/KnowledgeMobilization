import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="background-overlay"></div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
