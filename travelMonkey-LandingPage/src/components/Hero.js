import React from "react";
import "./Hero.css";
import "../App.css";
import Video from "./Video";

export default function Hero() {
  return (
    <div className="hero-container">
      <Video autoPlay loop />
      {/* Comment this out while updating to github */}
      <div className="hero-container-content">
        <h1 className="text-center my-5">Explore a new world</h1>
        <p>Say Yes to Adventure</p>
        <div className="hero-btns">
          <button
            className="btn btn-outline"
            style={{
              color: "black",
              outline: "0.5px solid black",
              fontWeight: "bold",
            }}
          >
            Get Started
          </button>
          <button
            className="btn btn-outlie"
            style={{
              backgroundColor: "black",
              color: "white",
              outline: "0.5px solid black",
              fontWeight: "bold",
            }}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
