'use client'

import './style.css'

import SwotCom from './SwotCom';
import Com2 from './Com2';
import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';

import { useState } from 'react';

export default function Slider(props) {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const [showNextBtn, setShowNextBtn] = useState(false)
    
    const obj = [
        {
            img: S1,
            heading: "Your Sports Day Plan",
            swotHeading1: "",
            swotHeading2: "",
            subHeading: "Sports Day is just around the corner, and you’re buzzing with excitement! Running, swimming, high jump, team games — so many fun choices! But here’s a twist: you can only join two events.  Which ones will help you shine and have a great time?"
        },
        {
            img: S2,
            heading: "The Great School Lunch Debate",
            swotHeading1: "SWOT analysis for Alex’s Idea",
            swotHeading2: "SWOT analysis for Mia’s Idea",
            subHeading: "Exciting news! Your class gets to redesign the school lunch menu! You’re working with Alex and Mia — but they don’t exactly agree.  Alex wants to bring in healthy options like fruits, veggies, and low-sugar foods.Mia thinks lunches should be fun, with burgers, pizza, and fries. How will your team create a menu everyone will love?"
        },
        {
            img: S3,
            heading: "Class Fund – How Should We Use It?",
            swotHeading1: "SWOT analysis for Option A – Science Kits",
            swotHeading2: "SWOT analysis for Option A – Class Trip",
            subHeading: "Your class won $500 after a kindness challenge. Now your teacher wants your group to decide how to spend it wisely. You can choose: Option A: Buy Science Kits for hands-on learning. Option B: Plan a fun, learning-filled class trip."
        }
    ]


    const handleNext = () => {
        let currentObjIndex_temp = currentObjIndex + 1
        setShowNextBtn(false)
        setCurrentObjIndex(currentObjIndex_temp)
        if(currentObjIndex_temp > 0 ){
            props.setHideHeading(false)
        }
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
                            questionSet="nonGeneral"
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
