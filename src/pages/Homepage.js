import React from "react";
import profilephoto from "../assets/profile.png";
import mountainphoto from "../assets/mountains.png";


function Homepage() {
  return (
    <>
    <div className="relative w-full h-full"> 
    <img src={mountainphoto} className="w-[80vw] h-auto absolute ml-[20vw] mt-[8vh] animate-fade"></img>

    <h1 className="text-[6vw] text-left absolute pl-[15%] animate-fadeSlow">HI, I'M</h1>
      <h1 className="text-[6vw] text-left absolute text-[#736d69] pl-[15%] pt-[5%] animate-fadeSlower">RACHEL</h1>      
      <h1 className="text-[6vw] text-left absolute pl-[38.5%] pt-[5%] animate-fadeSlow">.</h1>

      <img src={profilephoto} className="w-[35vw] h-auto absolute ml-[50%] pt-[20%] animate-fadeFast"></img>
      <p className="text-[2vw] w-[50vw] font-extralight absolute ml-[2vw] pl-[5%] pt-[15%] pb-[50px] animate-fadeSlowest">I'm a recent computer science graduate, committed to using technology as a force for positive change.</p>
      </div>

      
    </>
  );
}

export default Homepage;