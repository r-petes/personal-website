import React from "react";
import transition2 from "../assets/transition2.png";
import transition1 from "../assets/transition1.png";
import presenting from "../assets/presenting.png"
import agu from "../assets/agu.png"
import Contact from "../components/Contact";
import { Parallax } from "react-scroll-parallax";

function AboutMe() {
  return (
    <>
      <h1 className="italic m-4 grid place-items-center">about me</h1>
      <Parallax speed={5}>
        <div className="grid flex place-items-center font-extralight text-center">
          <p className="text-3xl text-[#5f6851] pl-[20%] pr-[20%] animate-fadeFast tracking-wider">
            Hi there! I'm Rachel Peterson.
          </p>
          <p className="text-xl text-[#5f6851]  pl-[20%] pr-[20%] animate-fade tracking-wider">
            As a software engineer embedded in a marine geophysical data management team at NOAA, I combine full-stack development expertise with a passion for environmental research. I build scalable, efficient systems that empower researchers and institutions to unlock insights about the ocean floor.
          </p>
          <img src={agu} className="h-96 animate-fadeSlow drop-shadow-lg"></img>
          <p className="text-xl text-[#5f6851]  pl-[20%] pr-[20%] animate-fade tracking-wider">
            Beyond my technical work, I have experience spanning strategic leadership, community-building, policy, and communication through environmental, human rights, and community-focused volunteerism. I’m driven by a desire to make systems — both human and environmental — more just, sustainable, and connected.
          </p>
           <img src={presenting} className="h-96 animate-fadeSlow drop-shadow-lg"></img>
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
    </>
  );
}

export default AboutMe;
