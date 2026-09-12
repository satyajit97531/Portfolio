import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './Projects';
import './ProjectDetails.css'; 

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="container card"><h2 className="project-title">Project not found!</h2></div>;
  }

  return (
    <section className="container">
      <div className="card project-details-card"> 
        
        <Link to="/projects" className="btn-primary back-button">
          ← Back to Projects
        </Link>
        
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        
        {/* Loop through the images array and render them */}
        <div className="project-gallery">
          {project.images && project.images.map((imgSrc, index) => (
            <div key={index} className="project-image-container">
              <img src={imgSrc} alt={`${project.title} screenshot ${index + 1}`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;