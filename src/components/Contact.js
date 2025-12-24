import React from "react";
import background from "../assets/background.png";
import { Parallax } from "react-scroll-parallax";

function Contact() {
  return (
    <>
          <Parallax speed={10}>

      <div className="flex items-center justify-center ">
        <img
          src={background}
          className="w-[20%] mt-[10%] animate-fadeFast"
        ></img>
      </div>
      </Parallax>

    <Parallax speed={10}>
      <div className="flex items-center justify-center">
        <div className="grid sm:grid-cols-4 sm:grid-rows-2 place-content-center items-center">
          <h1 className="text-right sm:col-span-2 sm:row-span-1 sm:row-start-1	sm:col-start-1 text-[#5f6851] animate-fadeSlower italic text-6xl	tracking-widest	">
            connect
          </h1>

          <a
            href="https://www.linkedin.com/in/r-petes/"
            className="shadow-md	text-center text-3xl font-thin	sm:col-span-2 sm:row-span-1 sm:row-start-1 sm:col-start-3 border-[#b8a5a0] hover:bg-[#eae5e1] rounded-full border-1 no-underline text-[#736d69] px-3 py-3 m-2 animate-fadeSlower"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>

          <a
            href="https://github.com/r-petes"
            className="shadow-md	text-center text-3xl font-thin	sm:col-span-2 sm:row-span-1 sm:row-start-2 sm:col-start-3 border-[#b8a5a0] border-1 hover:bg-[#eae5e1] rounded-full no-underline text-[#736d69] px-3 py-3 m-2 animate-fadeSlower"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>

          <h1 className="text-right sm:col-span-2 rsm:ow-span-1 sm:row-start-2 sm:col-start-1	 text-[#5f6851] animate-fadeSlower italic text-6xl	tracking-widest	">
            with me
          </h1>
        </div>
      </div>
      </Parallax>
      <Parallax speed={10}>
      <div className="flex items-center justify-center ">
        <img
          src={background}
          className="w-[20%] mb-[10%] animate-fade "
        ></img>
      </div>
      </Parallax>
    </>
  );
}

export default Contact;
