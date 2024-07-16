import React from "react";
import profilephoto from "../assets/profile.png";
import mountainphoto from "../assets/mountains.png";


function Homepage() {
  return (
    <>
    <div id="homepage-visual"> 
    <img src={mountainphoto} id="mountain-photo"></img>

    <h1 className="intro-text-1">HI, I'M</h1>
      <h1 className="intro-text-2">RACHEL</h1>      
      <h1 className="intro-text-3">.</h1>

      <img src={profilephoto} id="profile-photo"></img>
      <p id="short-bio">I'm a recent computer science graduate, committed to using technology as a force for positive change.</p>
      </div>
    </>
  );
}

export default Homepage;