import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GradientSpheres from "../components/GradientSpheres";
import TitlesHeader from '../components/TitlesHeader';
import { Alien } from '../../public/models/Alien';
import { Lotus_elise } from '../../public/models/Lotus_elise';
import {Yahya} from '../../public/models/Yahya';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const About = () => {

  useGSAP(() => {
gsap.from("#card",{
  opacity:0,
  y:50,
  stagger:0.2,
  duration:1,
  ease:"power3.inOut",

          ScrollTrigger: {
            trigger: "#about",
            start : "top top ",
            markers: true,
          },

} );
}, []);

  return (
    <section id="about" className=' flex-center relative md:p-0 px-5 '>

         {/* Sphere-Component */}
               
                {/* playwith */}
                <GradientSpheres sphere1Class={"gradient-sphere sphere-2"}  />
                <GradientSpheres sphere1Class={"gradient-sphere-2 sphere-2"}  />
                <GradientSpheres sphere1Class={"gradient-sphere-2 sphere-4"}  />

        {/* Container of about  */}

                <div className='container w-full h-full  md:my-40 my-20 relative '>
                    {/* title-component */}
                    <TitlesHeader title={"About me"} text={"linux play boy "}  number={"01"}/>
                    {/* container   */}
                    <div className="md:mt-20 mt-10 " >
                        {/* grid */}
                        <div className='grid grid-cols-12 md:grid-rows-10 gap-5'>
                            {/* grid-sons-1 element 1 7-col wide rest is 5  */}
                            <div id='card' className='md:col-span-5 col-span-12 row-span-4'>
                                {/* div  west element 1  to handle logo flower and its text each one in seperate div */}
                                <div className='  bg-black rounded-2xl p-7 w-full h-full   '>
                                    {/* flower div */}
                                    <div className=''>
                                      
                                             
                                        <img src="/public/images/flower.svg" alt="flower"  
                                        className='md:w-32 w-16 flower'/>
                                    </div>
                                     {/* flower text div  */}
                                    <div className='mt-5 '>
                                        <h1 className='text-blue-50 md:text-5xl mt-10 text-3xl'> Ouarrak yahya </h1>
                                        <p className=' md:text-2xl text-3xl mt-7 text-gray-100'> I am a San francisco-based product designer with a focus on
                                            web design, illustration, a visual development. I have a
                                            diverse range of experience having worked across various
                                            fields and industries.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>

                            {/* element 2 fih 3d o ja after element 1 - playwith */}
                            {/* a grid element 2 of col-5 wide  */}

                            <div className='md:col-span-7 col-span-12 row-span-4 '>
                                {/* backgropund  and div that will carry 3d */}
                                <div className="bg-[#000000fb] w-full h-full  hover:cursor-grab rounded-2xl   gradient-glow   ">

                                    {/* canvas here  */}
                                    <div className='w-full h-full'>

                                            <Canvas>
                                                
                                                {/* <Alien scale={[0.5, 0.5, 0.5]} position={[0, -1, 0]} /> */}
                                               <ambientLight intensity={2} />
                                                                    <directionalLight
                                                                    position={[100, 20, 1]}
                                                                    intensity={20}
                                                                    />

                                                                    <Yahya position={[1, -0.8, 0]} scale={150} />
                                                                    <OrbitControls 
                                                                                enableZoom={false}
                                                                                minPolarAngle={0}
                                                                                maxPolarAngle={Math.PI/2}
                                                                                enablePan={true}
                                                                                // Optional: disable panning/position movement
                                                                                rotateSpeed={0.3} // Optional: slow down rotation
                                                                                autoRotate
                                                                                autoRotateSpeed={1}
                                                                    />
                                            </Canvas>

                                   </div>
              </div>
            </div>

            {/* cards */}
            
            <div id='card' className="md:col-span-6 col-span-12 row-span-3 ">
                {/* first card container  */}
              <div className=" group  hover:bg-gradient-to-t from-violet-00 via-blue-950  to- rounded-2xl p-7 w-full h-full  card-glow-wrapper">
                <div className="flex flex-col h-full mt-10 gap-2 ">
                  <h1 className="gradient-title md:text-3xl text-2xl mb-5 font-medium">
                    Web Design & Dev
                  </h1>
                  <p className="md:text-2xl text-whitemax-w-200">
                    Cleanly Designed, Conversion-focused, and build for easy
                    updates.
                  </p>

                  {/* second card image 1 */}
                     <div class="w-full relative mt-7">
                        <div class="  h-70 w-fit mx-auto flex justify-center text-center relative overflow-hidden rounded-2xl cursor-pointer card-glow-wrapper">
                        <img src="/public/images/loader.gif" alt="image" class="w-full h-auto relative z-0 rounded-lg transition-all duration-300 group-hover:scale-190 scale-90 group-hover:rotate-360 " />
                        <div class="absolute h-full w-full bg-black/50 top-0 left-0"></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div id='card' className="md:col-span-6 col-span-12 row-span-3">

              <div className="group  hover:bg-gradient-to-t from-violet-00 via-violet-600 to- rounded-2xl p-7 w-full h-full card-glow-wrapper">
                <div className="flex flex-col h-full mt-10 gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    UX UI Design
                  </h1>
                  <p className="md:text-2xl text-white max-w-96">
                    Seamless web or mobile app design to wow your users.
                  </p>


                 
                    {/* second card/ image 2 */}
                     <div class="w-full relative mt-7">
                        <div class=" h-70 w-fit mx-auto flex justify-center text-center relative overflow-hidden rounded-2xl cursor-pointer card-glow-wrapper">
                        <img src="/public/images/uiux.gif" alt="image" class="w-full h-auto relative z-0 rounded-lg transition-all duration-300 group-hover:scale-110 scale-90 group-hover:rotate-360 " />
                        <div class="absolute h-full w-full bg-black/50 top-0 left-0"></div>
                        </div>
                    </div>


                </div>
              </div>
            </div>


            {/* be yourself , be diffent build different */}
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full          card-glow-wrapper">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-4xl text-3xl font-bold">
                    BE YOURSELF!
                  </h1>
                  <h1 className="gradient-title md:text-4xl text-3xl font-bold">
                    BE DIFFERENT!
                  </h1>
                  <h1 className="gradient-title md:text-4xl text-3xl font-bold">
                    BUILD DIFFERENT!
                  </h1>
                </div>
              </div>
            </div>

            {/* last card  */}
             <div className="md:col-span-8 col-span-12 row-span-4">
                <div className='bg-black rounded-2xl  w-full  '> 
                     {/* second card image 2 */}
                     <div class="w-full relative p-1">
                        <div class=" h-full w-full text-center relative overflow-hidden rounded-2xl cursor-pointer ">
                        <img src="/public/images/whoiam.gif" alt="image" class="w-full h-auto relative z-0 rounded-lg transition-all duration-300 group-hover:scale-110 scale-90 group-hover:rotate-360 " />
                        <div class="absolute h-full w-full bg-black/50 top-0 left-0"></div>
                        </div>
                    </div>
                </div>
             </div>
                
          </div>
        </div>
      </div>



     
      
          

    </section>
  );
};

export default About;