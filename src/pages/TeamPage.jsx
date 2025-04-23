import React from 'react';
import Layout from '../components/Layout';
import TeamCarousel from '../components/TeamCarousel';

function TeamPage() {
  const url = "https://www.youtube.com/embed/AHweJjTaNuw";
  return (
    <Layout>
      <TeamCarousel />
      <iframe src={url} className='vids' width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </Layout>
  );
}

export default TeamPage;
