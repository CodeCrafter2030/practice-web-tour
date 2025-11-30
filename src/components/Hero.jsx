import React from "react";
import { Button } from "./Button";
import "./Hero.css";
import "../App.css";
import { FaPlayCircle } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero-container">
      <video src="src\assets\video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER  <FaPlayCircle className="playcircle"/>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
