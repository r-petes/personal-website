import React from "react";
import profilephoto from "../assets/profile2.png";
import mountainphoto from "../assets/mountains.png";
import { Parallax } from "react-scroll-parallax";
import Contact from "../components/Contact";

function Homepage() {
  return (
    <>
      <div className="flex grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-3">
        <div className="pl-20 sm:col-span-1 sm:row-span-1 sm:row-start-1	sm:col-start-1 ">
          <h1>
          <span className="text-5xl sm:text-8xl text-left  animate-fadeSlow">HI, I'M</span>
          </h1>
          <h1>
          <span className="text-6xl sm:text-8xl text-left text-[#722534]  animate-fadeSlower ">
            RACHEL 
            </span>
            <span className="text-5xl sm:text-8xl  animate-fadeSlow text-black">.</span>
            </h1>
        </div>

        <div className=" sm:row-span-2 sm:col-span-3 sm:row-start-2	sm:col-start-1 place-self-center mt-[-10%]">
          <Parallax speed={-10}>
            <img src={mountainphoto} className="animate-fade"></img>
          </Parallax>
        </div>
        <div className="w-[40%] sm:col-span-1 sm:row-span-2 sm:row-start-1	sm:col-start-2 align-self-end justify-self-center">
          <Parallax speed={5}>
            <img src={profilephoto} className="animate-fadeFast"></img>
          </Parallax>
        </div>
        <div className="sm:col-span-1 sm:row-span-2 sm:row-start-2	sm:col-start-1">
          <p className="text-xl text-right pr-[20%] pl-[20%] mt-[20%] mb-[20%] sm:mt-0 sm:mb-0 font-extralight animate-fadeSlower text-stone-400">
            I'm a web developer committed to using
            technology as a force for positive change.
          </p>
        </div>
      </div>
      
        <Contact />
    </>
  );
}

export default Homepage;
