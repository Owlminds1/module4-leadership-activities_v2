'use client'

import './style.css'

import SwotCom from './SwotCom';
import Com2 from './Com2';
import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const [showNextBtn, setShowNextBtn] = useState(false)

    const obj = [
        {
            img: S1,
            heading: "Team Trouble",
            subHeading: "Lucas is in a team of four. Everyone chooses tasks without having a discussion, so two people end up doing the same job, and one task is left unfinished."
        },
        {
            img: S2,
            heading: "Poster Dilemma",
            subHeading: "Maya is making a recycling poster, choosing between a green or blue theme."
        }
    ]


    const handleNext = () => {
        setShowNextBtn(false)
        setCurrentObjIndex(currentObjIndex + 1)
    }


    const passOnSwotData = (currentSwotData, currentSolutionLen, seen) => {
        // console.log(currentSwotData, currentSolutionLen, seen)
        if (currentSolutionLen === 4) {
            setShowNextBtn(true)
        }
    }

    return (
        <div className='slidesMainContainer'>
            {currentObjIndex === 0 ? (
                <div className="flex gap-4">
                    <div className="w-1/2 p-4 leftCon">
                        <h1 className='headingOg'>{obj[currentObjIndex]["heading"]}</h1>
                        <h1 className="heading">{obj[currentObjIndex]["subHeading"]}</h1>
                        <Image alt="currentObjIndex" className='currentObj' src={obj[currentObjIndex]["img"]} />

                    </div>
                    <div className="w-1/2 p-4 rightCon">
                        <SwotCom
                            seen="s1"
                            passOnSwotData={passOnSwotData}
                            currentObjIndex={currentObjIndex}
                        />
                    </div>
                </div>
             ) : (
                <div>
                    <Com2
                        passOnSwotData={passOnSwotData}
                        currentObj={obj[currentObjIndex]}
                        currentObjIndex={currentObjIndex}
                    />
                </div>
            )} 

            {showNextBtn && currentObjIndex < obj.length - 1 &&
                <button className='nextButton' onClick={handleNext}>Next</button>
            }
        </div>
    );
}
