import React from 'react';
import '../styles/containers/Project.css'
import { Card } from '../components/Card';
import initialState from '../initialState';

const Project = () => {
  const projects = initialState.data.projects;
  return (
    <div className="Project">
      <div className="Project-container">
        {projects.map(project => (
          <Card project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export { Project };