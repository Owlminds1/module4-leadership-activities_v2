"use client";

import './page.css'

import Sequence from './components/Sequence'
import Filler from './components/Filler'
import { useState } from 'react';

export default function Home() {
  const [isStart, setIsStart] = useState(false)
  const [startBtnVisiable, setStartBtnVisiable] = useState(false)
  const handleStart = () => {
    setIsStart(true)
  }

  const handleShowStartBtn = () => {
    setStartBtnVisiable(true)
  }

  return (
    <div className="mainConatiner">
      <center>
        <h1 className="headingContaienr">A Leader Can, Have, Are</h1>
      </center>


      {isStart ? (
        <Sequence />
      ) : (
        <Filler
          handleShowStartBtn={handleShowStartBtn}
        />
      )}

      <center>
        {!isStart && startBtnVisiable &&
          <button className='buttonak1' onClick={handleStart}>Create Tree map</button>
        }
      </center>

    </div>
  );
}
