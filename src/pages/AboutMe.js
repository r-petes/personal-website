import React from "react";
import transition2 from "../assets/transition2.png";
import transition1 from "../assets/transition1.png";
import presenting from "../assets/presenting.png";
import agu from "../assets/agu.png";
import { Parallax } from "react-scroll-parallax";

function AboutMe() {
  return (
    <>
      <h1 className="italic m-4 grid place-items-center">about me</h1>
      <Parallax speed={5}>
        <div className="flex flex-col items-center font-extralight text-center max-w-3xl mx-auto gap-6">
          <p className="text-xl text-[#5f6851] px-4 md:px-[20%] animate-fadeFast tracking-wider">
            I’m a software engineer with several years of experience working at
            the intersection of technology and people. My work focuses on
            building robust systems that support research and long-term public
            value, particularly in environmental and scientific contexts.
          </p>
          <p className="text-xl text-[#5f6851] px-4 md:px-[20%] animate-fadeFast tracking-wider">
            Currently, I work at the Cooperative Institute for Research in
            Environmental Sciences (CIRES), a NOAA partnership, where I help
            modernize and migrate national-scale geophysical data archives. My
            role involves designing cloud-native pipelines, improving system
            reliability, and collaborating closely with researchers to ensure
            data is accessible, trustworthy, and usable.
          </p>
          <img
            src={agu}
            className="animate-fadeSlow drop-shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto px-4"
          ></img>
          <p className="text-xl text-[#5f6851] px-4 md:px-[20%] animate-fadeFast tracking-wider">
            I'm motivated not just by technical problem-solving, but also by
            understanding why the system exists in the first place. I’m
            especially interested in how technical decisions shape research
            outcomes, public access to information, and social benefit.
          </p>
          <p className="text-xl text-[#5f6851] px-4 md:px-[20%] animate-fadeFast tracking-wider">
            I thrive in the in-between spaces - bridging gaps, translating
            stakeholder requirements to meaningful output, and navigating alignment
            between mission and goals. I deeply value interdisciplinary work and
            strive to bring a curious, sustainably-minded, and thoughtful spirit
            to all that I do.
          </p>
          <img
            src={presenting}
            className="animate-fadeSlow drop-shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto px-4"
          ></img>
        </div>
      </Parallax>
      <Parallax speed={8}>
        <h1 className="italic m-4 grid place-items-center">
          skills/certifications
        </h1>
        <p className="text-center font-extralight animate-fadeSlower text-stone-400 text-xl mx-[25%] mb-20">
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
