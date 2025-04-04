import React, { useState, useEffect } from 'react';
import './TeamCarousel.css';

const teamMembers = [
  {
    name: 'Aliyah Khan',
    image: 'https://via.placeholder.com/150',
    title: 'Lead Researcher',
  },
  {
    name: 'Omar Malik',
    image: 'https://via.placeholder.com/150',
    title: 'Developer',
  },
  {
    name: 'Sana Ahmed',
    image: 'https://via.placeholder.com/150',
    title: 'Coordinator',
  },
];

function TeamCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = (i) => setIndex(i);
  const prev = () => setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  const next = () => setIndex((prev) => (prev + 1) % teamMembers.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const member = teamMembers[index];

  return (
    <div className="carousel-container">
      <h2>Who We Are</h2>

      <div className="carousel-card">
  <button className="arrow-button left" onClick={prev}>&lt;</button>

  <div className="member-info">
    <img src={member.image} alt={member.name} />
    <h3>{member.name}</h3>
    <p>{member.title}</p>

    <div className="dot-indicators">
      {teamMembers.map((_, i) => (
        <span
          key={i}
          className={`dot ${i === index ? 'active' : ''}`}
          onClick={() => goTo(i)}
        />
      ))}
    </div>
  </div>

  <button className="arrow-button right" onClick={next}>&gt;</button>
</div>

    </div>
  );
}

export default TeamCarousel;
