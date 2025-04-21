import React from 'react';
import Layout from '../components/Layout';
import '../styling/MainPage.css';

function MainPage() {
  return (
    <Layout>
      <div className="main-container">
        <img src="home_banner.jpg" alt="Banner" className="banner-image" />
        <section className="about-section">
          <h2>About the Website</h2>
          <div className="about-obscura">
  <p>
  Obscura is inspired by the camera obscura, an early optical device that projected selective images onto a surface — revealing what the viewer chose to see, not what others imposed. Just as the device gave control over perspective, our platform empowers researchers to navigate backlash and present their work on their own terms.

In today’s digital world, knowledge is something that can be accessed with nothing more than a few types on a keyboard and pressing enter to search for what is desired. Within a few minutes, hundreds to thousands of resources will appear that can answer just about any question we may have. Sadly, threats are found and encountered just as easily, whether they are in the form of threats of harm, threats to invoke fear, or weaponized hate to destroy someone's career. These threats are constantly encountered by those who wish to answer the world’s questions, acting as deterrents that drown out meaningful discussions through their hostile nature.

Obscura isn’t just about technology; it’s about trust and security. We believe in a digital space where ideas are protected, constructive discussion remains positive, and knowledge is free to thrive, remaining accessible to all.
</p>
</div>

        </section>

        <section className="team-section">
          <img src="logo192.png" alt="Team" className="team-image" />
          <h2 className="team-heading"><a href = "/team">The Minds Behind This</a></h2>
        </section>
      </div>
    </Layout>
  );
}

export default MainPage;
