import React from "react";
import background from "../assets/background.png";

function Contact() {
  return (
    <>
    <img src={background} className="h-[10vh] mt-[10vh] pl-[38vw] animate-fadeSlower"></img>
    <p className="text-center pt-[15vh] animate-fade">To get in touch, please email me at rachel.peterson.5683@gmail.com!</p>
    <img src={background} className="h-[10vh] mt-[10vh] pl-[38vw] animate-fadeSlower"></img>

    </>
  );
}

export default Contact;