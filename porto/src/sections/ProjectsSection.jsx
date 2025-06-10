import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { particlesConfig } from '../config/particles-config';

const ProjectsSection = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden">
      {/* Particles Container - Properly constrained */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          id="projects-particles"
          init={particlesInit}
          options={particlesConfig}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">My Projects</h2>
        {/* Your project cards/grid here */}
      </div>
    </section>
  );
};

export default ProjectsSection;