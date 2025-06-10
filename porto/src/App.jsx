import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import ProjectsSection from './sections/ProjectsSection'
const App = () => {
  return (
    <div className='text-blue-50 font-black text-4xl'> 
    
    <Hero/>
    <About/>

    <ProjectsSection />
    
    </div>
  )
}

export default App