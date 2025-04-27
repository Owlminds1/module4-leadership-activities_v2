"use client";

import './page.css';

import Slider from './components/Slider'


export default function Home() {
  return (
    <div className="mainContainer bg-gradient-to-b from-[#fdf2e9] to-[#ffffff] text-[#5a2d0c]">
      <div className="headingContainer" id="headingContainer">
        <h1 className="mainHeading">Mars Trip</h1>
      </div>
      <center>
        <Slider />
      </center>

    </div>
  );
}
