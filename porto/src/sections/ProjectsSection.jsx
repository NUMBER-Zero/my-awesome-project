import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { particlesConfig } from '../config/particles-config';
import TitlesHeader from '../components/TitlesHeader';
import ParticlesComponent2 from '../components/ParticlesComponent2';

const ProjectsSection = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden">
      {/* Particles Container - type 1 */}
      {/* <div className="absolute inset-0 w-full h-full">
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
      </div> */}

       {/* Particles Container type 2 */}
      <div className="absolute inset-0 w-full h-full">
        <ParticlesComponent2 
          id="projects-particles"
          options={{}}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
       
        {/* Your project cards/grid here */}

        <TitlesHeader className="mb-10" title={"Projects"} text={"Showcasing my work"} number={"02"} /> 
      </div>
    </section>
  );
};

export default ProjectsSection;