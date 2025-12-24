import React from "react";
import { Outlet, Link } from 'react-router-dom'

function NavigationBar( ) {
    return (
      <div className="flex items-center justify-center m-10">
              <a href="/" className="no-underline text-[#b8a5a0] px-10 py-3 animate-fadeFast">HOME</a> 
              <a href="#/about-me" className="no-underline text-[#b8a5a0] px-10 py-3 animate-fade">ABOUT</a>
              <a href="#/cv" className="no-underline text-[#b8a5a0] px-10 py-3 animate-fade">CV</a>
              {/* <a href="projects" className="no-underline text-[#b8a5a0] px-10 py-3 animate-fadeSlower">PROJECTS</a> */}
      </div>

                

    );
  }
  
  export default NavigationBar;