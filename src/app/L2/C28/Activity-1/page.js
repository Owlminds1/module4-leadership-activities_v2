"use client";

import './page.css';

import P1 from './components/P1'
import P2 from './components/P2'
import P3 from './components/P3'
import P4 from './components/P4'
import { useState } from 'react';


export default function Home() {
  const [currentPart, setCurrentPart] = useState(0)
  const [goal, setGoal] = useState('');

  const handleNext = () => {
    setCurrentPart(currentPart + 1)
  }

  const getGoal = (g) => {
    setGoal(g)
    handleNext()
  }

  return (
    <div className="mainContainer">
      <div className="headingContainer" id="headingContainer">
        <h1 className="mainHeading">Goal Getters</h1>
      </div>
      <hr />
      <br />
      <center>

        {currentPart === 0 &&
          <P1 />
        }

        {currentPart === 1 &&
          <P2
            handleNext={handleNext}
          />
        }

        {currentPart === 2 &&
          <P3
            getGoal={getGoal}
          />
        }

        {currentPart === 3 &&
          <P4
            goal={goal}
          />
        }

        {currentPart === 0 &&
          <button
            onClick={handleNext}
            className="mt-[50px] bg-green-600 text-white px-[25px] py-[6px] text-[18px] rounded-[10px] border-0 cursor-pointer hover:text-[19px]">
            Next
          </button>
        }
      </center>


    </div>
  );
}
