/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import images from "../images/bushra.jpg"
import Button from "../components/Button"

export default function Main() {
    return (
      <div className="big-container">
      <div className="info-start">
      <img src={images} className="img-src" />
      <h3 className="heading-name">Bushra Abbasi</h3>
      <h6 className="title-pro">Frontend Developer</h6>
      <p className="website-add">abbasi.netlify.app</p>
    </div>
    <Button/>
     <div className="about-us" >
      <h5>About</h5>
      I am a frontend developer with a particular interest in making things simple and automating daily tasks.
     I try to keep up with security and best practices, and am always looking for new things to learn.
     </div>
     <div className="Interest-about" >
     <h5>Interest</h5>
      Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
     </div>
     </div>
     
    );
}
