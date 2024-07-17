import React from "react";
import transition2 from "../assets/transition2.png";
import transition1 from "../assets/transition1.png";
import Contact from "../components/Contact";
import { Parallax } from "react-scroll-parallax";

function AboutMe() {
  return (
    <>
      <h1 className="italic m-4 grid place-items-center">about me</h1>
      <Parallax speed={5}>
        <div className="grid flex place-items-center font-extralight text-center">
          <p className="text-xl text-[#722534] pl-[20%] pr-[20%] animate-fade tracking-wider">
            Hi there! I'm Rachel Peterson, a web developer with a keen eye for
            good design and a drive to create visually appealing and functional
            websites.
          </p>
          <img src={transition1} className="w-10 m-4 animate-fadeSlower"></img>
          <p className="text-xl text-[#722534]  pl-[20%] pr-[20%] animate-fade tracking-wider">
            My journey into web development began with a love for blending
            creativity with technology, which led me to specialize in crafting
            seamless user experiences through clean, efficient code and
            intuitive interfaces.
          </p>
          <img src={transition2} className="w-10 m-4 animate-fadeSlower"></img>
          <p className="text-xl text-[#722534]  pl-[20%] pr-[20%] animate-fade tracking-wider">
            I'm especially inspired by all of the ways that technology is used
            as a force for social good. Let's collaborate and bring your vision
            to life with innovation and creativity!
          </p>
          <img src={transition1} className="w-10 m-4 animate-fadeSlower"></img>
        </div>
      </Parallax>
      <Parallax speed={8}>
        <h1 className="italic m-4 grid place-items-center">
          skills/certifications
        </h1>
        <p className="text-center font-extralight animate-fadeSlower text-stone-400 text-xl mx-[25%]">
          JavaScript, SQL, JSON, HTML5, CSS3, Jira, Bootstrap, Tailwind CSS,
          React, Github, Certified SAFe Product Owner/Product Manager, Pendo
          Product Analytics Certified, Figma
        </p>
      </Parallax>
      {/* 
      <h2 className="italic m-4 grid flex place-items-center">experience</h2>

      <h2 className="italic m-4 grid flex place-items-center">education</h2> */}

      <Contact />
    </>
  );
}

export default AboutMe;
