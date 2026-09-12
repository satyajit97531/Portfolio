import React from 'react';
import './Home.css';
import profileImage from '../assets/images/pfp.png'; // Make sure you have this image

const Home = () => {
  return (
    <section id="home" className="container">
      <div className="card split-layout">
        <div className="left-pane home-left">
          <h1>Hello I'm a Web Developer & Graphic Designer</h1>
          <p>I can create smart websites and beautiful designs for you.</p>
          <p>Check out my Portfolio.</p>
          <a href="\Resume_Satyajit_Updated.pdf" download="satyajit-cv" className="btn-primary">Download CV</a>
        </div>
        <div className="home-right">
          <div className="profile-image-container">
            <img src={profileImage} alt="Satyajit Samanta" />
          </div>
          <h3>Satyajit Samanta</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;