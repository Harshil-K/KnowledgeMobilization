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
    In today’s digital world, knowledge is something that can be accessed with nothing more than a few types on a keyboard and pressing enter to search for what is desired.
    Within a few minutes, hundreds to thousands of resources will appear that can answer just about any question we may have.
  </p>

  <p>
    Sadly, threats are found and encountered just as easily, whether they are in the form of threats of harm, threats to invoke fear, or weaponized hate to destroy someone's career. These threats are constantly encountered by those who wish to answer the world’s questions, acting as deterrents that drown out meaningful discussions through their hostile nature.
  </p>

  <p>
    At Obscura, we are looking to tackle this problem head-on. We are working with other institutions to develop a technology-driven solution that will make knowledge mobilization safer for those providing and those seeking. Our team is building a constantly evolving platform that protects these authors and their content and fosters respectful, informed conversation between interested parties and stakeholders alike.
  </p>

  <p>
    By leveraging valuable tools we aim to safeguard the integrity of intellectual contributions, prevent the spread of misinformation or manipulated information, and create a space where valuable conversations may be had in good faith.
  </p>

  <p>
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
