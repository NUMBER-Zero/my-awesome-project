import React from "react";
import GradientSpheres from "../components/GradientSpheres";

const Hero = () => {
    return (
        <section
            id="home"
            className="h-dvh border-6 border-pink-100 relative text-white-50 px-5 md:p-0"  >



                {/* Sphere-Component */}
                <GradientSpheres sphere1Class={"gradient-sphere sphere-1"}  />
                <GradientSpheres sphere1Class={"gradient-sphere sphere-2"}  />
                {/* playwith */}
                <GradientSpheres sphere1Class={"gradient-sphere sphere-3"}  />
                <GradientSpheres sphere1Class={"gradient-sphere-2 sphere-4"}  />
                <GradientSpheres sphere1Class={"gradient-sphere-2 sphere-4"}  />
                <GradientSpheres sphere1Class={"gradient-sphere-2 sphere-3"}  />
                <GradientSpheres sphere1Class={"gradient-sphere-2 sphere-4"}  />
               


                {/* Container-parent  */}

            <div className="w-full h-full flex-center border-5 border-amber-500 "> 

                {/* container */} 
                <div className="container relative w-full h-full border-7 border-green-600">
                       
                        {/* div 1 hey and name  */}

                        <div className="md:mt-40 mt-20 border-7 border-blue-700"> 
                                <p className="font-medium md:text-2xl text-base"> hey im here </p>
                                <h1 className="font-bold                                        md:text-9xl text-5xl"> Yahya Ouarrak </h1>
                                <h1 className="font-bold md:text-9xl text-5xl"> Oxycodon07</h1>
                        </div> 


                        {/* div 2 images and text  */}

                        <div className="absolute w-full z-30 bottom-20 right-0 border-6 border-amber-400"> 

                                <div className="flex justify-between items-end border-4 border-red-600">

                                        {/* left side explore and down icon parent */}
                                        <div className="flex flex-col items-end border-3 border-purple-300 md:gap-5 gap-1">
                                            <p className="md:text-base text-xs "> explore </p>
                                            <img className="size-7 animate-bounce " src="images/arrowdown.svg" alt="" />
                                        </div>

                                        {/* right side images and titles parent */}
                                        <div className="flex flex-col items-end border-3 border-b-fuchsia-500">
                                            <img src="images/shape.svg" alt="" />
                                            <h1 className="font-bold md:text-9xl text-5xl"> net-boy</h1>

                                        </div>


            
                                </div>
                        </div>
         

                </div>


               






            </div>   


        </section>
    );
};

export default Hero;
