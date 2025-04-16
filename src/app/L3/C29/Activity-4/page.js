"use client";

import './page.css';

import Slider from './components/Slider'
import QnA from './components/QnA'
import { useState } from 'react';


export default function Home() {
  const [isStarted, setIsStarteds] = useState(false)

  const handleStart = () => {
    setIsStarteds(true)
  }
  return (
    <div className="mainContainer">
      <div className="headingContainer" id="headingContainer">
        <h1 className="mainHeading">Procrastination Buster</h1>
      </div>
      <hr />
      <br />
      <center>
        {isStarted ?
          <QnA />
          : <Slider />}

        {/* <Slider /> */}

        {!isStarted &&
          <button
            onClick={handleStart}
            className='mt-8 text-[17px] cursor-pointer py-2 px-6 bg-blue-500 hover:bg-blue-800 text-white rounded-lg'>
            Start challenges
          </button>
        }
      </center>
    </div>
  );
}
