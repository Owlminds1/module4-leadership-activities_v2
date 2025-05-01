"use client";

import './page.css';

import Slider from './components/Slider'


export default function Home() {
  return (
    <div className="mainContainer bg-gradient-to-br from-indigo-100 to-pink-100">
      <div className="headingContainer" id="headingContainer">
        <h1 className="mainHeading">Social Loafer Scenario</h1>
      </div>
      <center>
        <Slider />
      </center>

    </div>
  );
}
