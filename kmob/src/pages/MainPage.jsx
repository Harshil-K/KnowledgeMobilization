import React from 'react';
import Layout from '../components/Layout';
import '../styling/MainPage.css';

function MainPage() {
  return (
    <Layout>
      <div className="main-container">
        <img src="https://via.placeholder.com/1200x300" alt="Banner" className="hero-image" />

        <section className="about-section">
          <h2>About the Website</h2>
          <p>This website is designed to showcase our team and our mission. We aim to solve important problems...</p>
          <p>Our solution targets key challenges faced by our community and provides valuable resources...</p>
        </section>

        <section className="team-section">
          <img src="https://via.placeholder.com/200" alt="Team" className="team-image" />
          <h2 className="team-heading">Meet the Team</h2>
        </section>
      </div>
    </Layout>
  );
}

export default MainPage;
