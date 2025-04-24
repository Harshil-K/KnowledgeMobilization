import React from 'react';
import Layout from '../components/Layout';
import TeamCarousel from '../components/TeamCarousel';
import "../pages/TeamPage.css";

function TeamPage() {
  const url1 = "https://www.youtube.com/embed/AHweJjTaNuw";
  const url2 = "https://youtube.com/embed/Reuocdf6pqk?si=O4KIhlGb0I5eBCX1";
  return (
    <Layout>
      <TeamCarousel />
      <div className="video-container">
        <div className="video-wrapper">
          <iframe src={url1} className="video-iframe" width="800" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className="video-wrapper">
          <iframe src={url2} className="video-iframe" width="800" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default TeamPage;
