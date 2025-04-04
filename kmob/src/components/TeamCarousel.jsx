import React, { useState, useEffect } from 'react';
import './TeamCarousel.css';

const teamMembers = [
  {
    name: 'Rayane Aden Hadi',
    image: 'rayane.jpg',
    about: 'As a detail-driven international development student with experience in market research and design, Rayane is equipped to drive meaningful change and sustainable growth by leveraging her analytical, operational, and interpersonal skills to navigate complex transformations.',
  },
  {
    name: 'Kumar Mahismat',
    image: 'kumar.jpg',
    about: 'Kumar is a Bachelor of Business Administration (BBA) student specializing in Business Analytics with a keen interest in project management, problem-solving, and leadership. Outside academics, he enjoys playing tennis and staying active through regular workouts.',
  },
  {
    name: 'Harshil Kumar',
    image: 'harshil.jpg',
    about: "I'm Harshil Kumar, a final-year Software Engineering student with a strong interest in full-stack development. I'm passionate about exploring and building innovative technologies, and I'm always curious about how things function beneath the surface. When I’m not coding, you’ll likely find me on the table tennis court or enjoying a competitive match.",
  },
  {
    name: 'Bhavika Rawat',
    image: 'bhavika.jpg',
    about: 'Bhavika is a third-year Bachelor of Commerce student specializing in Supply Chain Management. She is interested in streamlining logistics, procurement, and operations through data-driven and practical approaches. Her academic background has provided opportunities to engage in research and projects focused on improving supply chain efficiency and decision-making.',
  },
  {
    name: 'Akul Sareen',
    image: 'akul.jpg',
    about: "I’m a Computer Science major from India, passionate about AI and entrepreneurship. Currently pursuing my dream of building innovative AI-driven solutions. I blend technical expertise with a business mindset to create impactful products. Always exploring new opportunities to learn, innovate, and make a difference in the tech world.",
  },
  {
    name: 'Mehnaz Mehzabin',
    image: 'mehnaz.png',
    about: 'Mehnaz is a driven final-year Honours Health Sciences student, specializing in Nuclear Medicine and Radiology. With her strong academic foundation and research expertise, she excels in analyzing complex medical concepts and developing innovative solutions. Mehnaz is poised to make a meaningful impact in our team, leveraging her knowledge and skills to improve outcomes and research.',
  },
  {
    name: 'Siddhrajsinh Parmar',
    image: 'https://via.placeholder.com/150',
    about: 'Sid is a computer engineering student with a real passion for the electrical side of engineering. He likes problem-solving and loves trying to create cool things. ',
  },
  {
    name: 'Emma Yeounseo Kim',
    image: 'https://via.placeholder.com/150',
    about: 'Emma has a background in nursing, where she has worked with many diverse equity seeking communities. Emma is also passionate about art and food- particularly eating more than cooking. ',
  },
  {
    name: 'Aidan Victorino Avila',
    image: 'https://via.placeholder.com/150',
    about: 'With a background in administrative work, an education focused on environmental sustainability, and a passion for both problem-solving and visual creativity, Aidan has a well-rounded base to deal with any problem coming his way.',
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
  <h2>Meet The Team</h2>

  <div className="carousel-card">
    <button className="arrow-button left" onClick={prev}>&lt;</button>

    <img className="member-image" src={member.image} alt={member.name} />

    <div className="member-info">
      <h3>{member.name}</h3>
      <p>{member.about}</p>
    </div>

    <button className="arrow-button right" onClick={next}>&gt;</button>
  </div>

  <div className="dot-indicators">
    {teamMembers.map((_, i) => (
      <span
        key={i}
        className={`dot ${i === index ? 'active' : ''}`}
        onClick={() => goTo(i)}
      />
    ))}
  </div>

<section className="mission">
    <h2>Our Mission</h2>
    <p className="justified-text">
    Our mission is to leverage technology thoughtfully and responsibly, ensuring academic knowledge is mobilized safely and inclusively across social media and public platforms—especially for equity-seeking communities. 
    Our vision is a future where access to reliable, empowering information helps reduce inequalities, promotes quality education, and strengthens collaborative partnerships. 
    Guided by respect, transparency, accountability, and commitment, we aim to treat each other and our communities with dignity, openly communicate our decisions and intentions, 
    take ownership of our outcomes, and remain dedicated to the shared goal of equitable and safe knowledge sharing for all.
    </p>
</section>
</div>
  );
}

export default TeamCarousel;
