import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

// 1. Create your project data here (you can add image paths later!)
export const projectsData = [
  { 
    id: 1, 
    title: 'Service Portal',
    description: 'A full-stack complaint filing app🗃️',
    images: ['box1/servicePortal.png', 'box1/servicePortal2.png', 'box1/servicePortal3.png', 'box1/servicePortal4.png', 'box1/servicePortal5.png']
  },
  { 
    id: 2, 
    title: 'Cipher', 
    description: 'An AI detective Chatbot🤖',
    images: ['box2/cipher.png', 'box2/cipher2.png', 'box2/cipher3.png', 'box2/cipher4.png', 'box2/cipher5.png']
  },
  { 
    id: 3, 
    title: 'Product Store', 
    description: 'A store where products can be added for selling or purchasing🛍️',
    images: ['box3/Productstore.png', 'box3/Productstore2.png', 'box3/Productstore3.png', 'box3/Productstore4.png', 'box3/Productstore5.png', ]
  },
  { 
    id: 4, 
    title: 'Medi Map', 
    description: 'A real time health tracking app🧑🏻‍⚕️',
    images: ['box4/Medimap.png', 'box4/Medimap2.png', 'box4/Medimap3.png', 'box4/Medimap4.png', 'box4/Medimap5.png', ]
  }

  // Add up to 8 projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className="card projects-card">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <Link 
              to={`/projects/${project.id}`} 
              key={project.id} 
              className="project-box"
              // Dynamically set the background image to the first image in your array
              style={{ backgroundImage: `url(${project.images[0]})` }}
            >
              {/* Wrap the title so it floats above the CSS overlay */}
              <span className="project-box-title">{project.title}</span>
            </Link>
          ))}
        </div>
        {/* --- NEW CODE: GitHub Link Below the Boxes --- */}
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <p style={{ marginBottom: '15px', color: '#4a4a4a' }}>
            Want to see the source code?
          </p>
          <a 
            href="https://github.com/satyajit97531" /* Replace with your actual GitHub URL */
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Visit My GitHub
          </a>
        </div>
        {/* --- END OF NEW CODE --- */}
      </div>
    </section>
  );
};

export default Projects;