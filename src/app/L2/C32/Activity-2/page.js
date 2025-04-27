"use client";

import './page.css';

import Slider from './components/Slider'
import Com2 from './components/Com2'
import { useState } from 'react';


export default function Home() {
  const [currentQIndex, setCurrentQIndex] = useState(0)
  const handleNext = () => {
    setCurrentQIndex(currentQIndex + 1)
  }
  return (
    <div className="mainContainer">
      <div className="headingContainer" id="headingContainer">
        <h1 className="mainHeading">Motivation News Channel</h1>
      </div>
      <hr />
      <br />
      <center>
        {currentQIndex === 0 ?
          (
            <Slider
              handleNext={handleNext}
            />
          ) : (
            <Com2 />
          )
        }
      </center>

    </div>
  );
}
