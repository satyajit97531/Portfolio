import React from 'react';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    title: 'iOS development Intern',
    company: 'SKLZ TECT LLP',
    duration: 'June 2024 - August 2024',
    image: 'Certificate1.jpeg' 
  },
  {
    id: 2,
    title: '',
    company: '',
    duration: '',
    image: '' 
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container">
      <div className="card experience-card">
        <h2>Experience & Certifications</h2>
        
        <div className="experience-grid">
          {experienceData.map(cert => (
            <div key={cert.id} className="cert-box">
              <div className="cert-image-container">
                <img src={cert.image} alt={`${cert.company} Certificate`} />
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="company">{cert.company}</p>
                <p className="duration">{cert.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;