import React from 'react'
import GradientSpheres from "../components/GradientSpheres";
import TitlesHeader from '../components/TitlesHeader';

const About = () => {
  return (
    <section id="about" className=' flex-center relative md:p-0 px-5 border-4 border-amber-500'>

         {/* Sphere-Component */}
                <GradientSpheres sphere1Class={"gradient-sphere sphere-1"}  />
                <GradientSpheres sphere1Class={"gradient-sphere sphere-2"}  />
                {/* playwith */}
                <GradientSpheres sphere1Class={"gradient-sphere sphere-2"}  />
                <GradientSpheres sphere1Class={"gradient-sphere-2 sphere-2"}  />
                <GradientSpheres sphere1Class={"gradient-sphere-2 sphere-4"}  />

        {/* Container of about  */}

                <div className='container w-full h-full border-6 md:my-40 my-20 relative '>
                    {/* title-component */}
                    <TitlesHeader title={"About me"} text={"linux play boy "}  number={"01"}/>
                    {/* grid parent  */}
                    <div className="md:mt-20 mt-10  border-3 border-amber-300" >
                        {/* grid */}
                        <div className='grid grid-cols-12 md:grid-rows-12 gap-5'>
                            {/* grid-sons-1 */}
                            <div className='md:col-span-7 col-span-12 row-span-5'>
                                {/* first */}
                                <div className='bg-black-300 rounded-2xl p-7 w-full h-full '>
                                    {/* flwer div */}
                                    <div>
                                        <img src="/public/images/flower.svg" alt="flower"  
                                        className='md:w-32 w-16 flower'/>
                                    </div>
                                     {/* flwer text div  */}
                                    <div className='mt-5'>
                                        <h1 className='text-blue-50 md:text-5xl text-3xl'> Ouarrak yahya </h1>
                                        <p className='md:text-2xl mt-2  '>I am a San francisco-based product designer with a focus on
                    web design, illustration, a visual development. I have a
                    diverse range of experience having worked across various
                    fields and industries.</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                </div>
              
               
            










    </section>
  )
}

export default About