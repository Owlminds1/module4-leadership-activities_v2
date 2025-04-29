"use client";
import './page.css'

import Sequence from './components/Sequence'
import { useState } from 'react';

export default function Home() {
  const [isHeadingVisiable, setIsHeadingVisiable] = useState(true)

  return (
    <div className="mainConatiner">
      <center>
        {isHeadingVisiable &&
          <h1 className="headingContaienr">Mastering Teamwork</h1>
        }
      </center>
      <Sequence 
        setIsHeadingVisiable={setIsHeadingVisiable}
        />
    </div>
  );
}
