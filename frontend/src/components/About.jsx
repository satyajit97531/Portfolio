import React from 'react';
import './About.css';

const About = () => {
  const expertise = [
    { name: 'Responsive Web Design', level: 90 },
    { name: 'Database Management', level: 80 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Graphic Design', level: 75 },
  ];

  return (
    <section id="about" className="container">
      <div className="card split-layout">
        <div className="left-pane">
          <h2>Description</h2>
          <p className="description">Experienced web developer skilled in front-end and back-end development, passionate about creating responsive, user-friendly websites that drive digital success.</p>
          <h2>Education</h2>
          <div className="education-item">
            <p className="year">2023 - 2027</p>
            <p className="institution">MDU (Maharshi Dayanand University)</p>
            <p className="degree">Bachelor of Technology in Computer Science</p>
          </div>
        </div>
        <div>
          <h2>Expertise</h2>
          <ul className="expertise-list">
            {expertise.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <div className="progress-circle" style={{'--p': item.level}}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;