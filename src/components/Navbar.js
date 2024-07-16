import React from "react";

function NavigationBar( ) {
    return (
      <div className="flex items-center justify-center">
              <a href="/" className="no-underline text-[#b8a5a0] px-10 py-3 animate-fade">HOME</a> 
              <a href="about-me" className="no-underline text-[#b8a5a0] px-10 py-3 animate-fadeSlower">ABOUT</a>
              <a href="contact" className="no-underline text-[#b8a5a0] px-10 py-3 animate-fadeSlowest">CONTACT</a>
      </div>

                

    );
  }
  
  export default NavigationBar;