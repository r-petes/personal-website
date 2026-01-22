import React from "react";
import headerImage from "../assets/header.png";

function NavigationBar() {
  return (
    <div
      className="relative w-full h-24 bg-cover bg-center mb-20"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="relative flex items-center justify-center h-full gap-6">
        <a
          href="/"
          className="no-underline text-black px-6 py-2 animate-fadeFast"
        >
          home
        </a>
        <a
          href="#/about-me"
          className="no-underline text-black px-6 py-2 animate-fade"
        >
          about
        </a>
        <a
          href="#/cv"
          className="no-underline text-black px-6 py-2 animate-fade"
        >
          cv
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;
