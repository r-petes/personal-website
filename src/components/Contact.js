import React from "react";
import background from "../assets/background.png";
import { Parallax } from "react-scroll-parallax";

function Contact() {
  return (
    <>
          <Parallax speed={10}>

      <div className="grid flex items-center justify-center ">
        <img
          src={background}
          className="h-[10vh] mt-[10vh] animate-fadeFast"
        ></img>
      </div>
      </Parallax>

    <Parallax speed={10}>
      <div className="flex items-center justify-center">
        <div className="grid sm:grid-cols-4 sm:grid-rows-2 place-content-center items-center">
          <h1 className="text-right sm:col-span-2 sm:row-span-1 sm:row-start-1	sm:col-start-1 text-[#722534] animate-fadeSlower italic text-6xl	tracking-widest	">
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
            href="mailto:rachel.peterson.5683@gmail.com"
            className="shadow-md	text-center text-3xl font-thin	sm:col-span-2 sm:row-span-1 sm:row-start-2 sm:col-start-3 border-[#b8a5a0] border-1 hover:bg-[#eae5e1] rounded-full no-underline text-[#736d69] px-3 py-3 m-2 animate-fadeSlower"
            target="_blank"
            rel="noopener noreferrer"
          >
            EMAIL
          </a>

          <h1 className="text-right sm:col-span-2 rsm:ow-span-1 sm:row-start-2 sm:col-start-1	 text-[#722534] animate-fadeSlower italic text-6xl	tracking-widest	">
            with me
          </h1>
        </div>
      </div>
      </Parallax>
      <Parallax speed={10}>
      <div className="flex items-center justify-center ">
        <img
          src={background}
          className="flex items-center justify-center h-[10vh] animate-fade mb-16"
        ></img>
      </div>
      </Parallax>
    </>
  );
}

export default Contact;
