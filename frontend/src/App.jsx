import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';

// 1. Import the new details component
import ProjectDetails from './components/ProjectDetails'; 

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          
          {/* 2. Add this dynamic route right below the main projects route */}
          <Route path="/projects/:id" element={<ProjectDetails />} /> 

          <Route path="/experience" element={<ExperiencePage />} />
          
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;