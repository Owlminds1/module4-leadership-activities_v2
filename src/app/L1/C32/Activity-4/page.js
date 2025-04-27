"use client";

import './page.css';

import Slider from './components/Slider'
import Com2 from './components/Com2'
import { useState } from 'react';


export default function Home() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const handleNext = () => {
    setCurrentStageIndex(currentStageIndex + 1)
  }
  return (
    <div className="mainContainer bg-gray-50">
      <div className="headingContainer" id="headingContainer">
        <h1 className="mainHeading">Stop & Think Adventure!</h1>
      </div>
      <hr />
      <br />
      <center>
        {currentStageIndex === 0 ?
          (
            <Slider
              handleNext={handleNext} />
          ) : (
            <Com2 />
          )
        }
      </center>

    </div>
  );
}
