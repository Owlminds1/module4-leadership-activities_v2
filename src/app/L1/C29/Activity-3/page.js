"use client";

import './page.css';

import Slider from './components/Slider'


export default function Home() {
  return (
    <div className="mainContainer bg-gray-100">
      {/* <div className="headingContainer" id="headingContainer">
        <h1 className="mainHeading">Red Light, Green Light & Yellow Light</h1>
      </div> */}
      <center>
        <Slider />
      </center>

    </div>
  );
}
