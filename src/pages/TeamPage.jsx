import React from 'react';
import Layout from '../components/Layout';
import TeamCarousel from '../components/TeamCarousel';
import "../pages/TeamPage.css";

function TeamPage() {
  const url1 = "https://www.youtube.com/embed/AHweJjTaNuw";
  
  return (
    <Layout>
      <TeamCarousel />
      <div className="video-container">
        <div className="video-wrapper">
          <iframe src={url1} className="video-iframe" width="800" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default TeamPage;
