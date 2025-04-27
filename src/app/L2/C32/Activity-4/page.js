"use client";

import './page.css';

import Com1 from './components/Com1'
import Com2 from './components/Com2'
import Com3 from './components/Com3'
import { useState } from 'react';


export default function Home() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const handleNext = () => {
    setCurrentStageIndex(currentStageIndex + 1)
  }
  return (
    <div className="mainContainer">
      <div className="headingContainer" id="headingContainer">
        <h1 className="mainHeading">Framework Flashback</h1>
      </div>
      <hr />
      <br />
      <center>
        {currentStageIndex === 0 &&
          <Com1
            handleNext={handleNext} />
        }

        {currentStageIndex === 1 &&
          <Com2
            handleNext={handleNext}
          />
        }

        {currentStageIndex === 2 &&
          <Com3
            handleNext={handleNext}
          />
        }

      </center>

    </div>
  );
}
