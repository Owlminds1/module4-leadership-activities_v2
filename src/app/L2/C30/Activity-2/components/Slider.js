'use client'

import './style.css'


import Image from 'next/image'
import R1 from '../assets/r1.png';
import R2 from '../assets/r2.png';
import R3 from '../assets/r3.png';

import { useState } from 'react';

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)

    const obj = [
        {
            img: R1,
            heading: "The Sports Team Rule",
            subHeading: "Only boys can join the school soccer team.",
            questions: [
                "Does this rule give SPACE for everyone to feel included?",
                "How to use VOICE to speak up?",
                "Who is AUDIENCE to listen and act on it?",
                "How to transform ideas to INFLUENCE?"
            ]
        },
        {
            img: R2,
            heading: "The Class Captain Rule",
            subHeading: "Only the tallest student in the class can be class captain.",
            questions: [
                "Does this rule give SPACE for everyone to feel included?",
                "How to use VOICE to speak up?",
                "Who is AUDIENCE to listen and act on it?",
                "How to transform ideas to INFLUENCE?"
            ]
        },
        {
            img: R3,
            heading: "The Playground Rule",
            subHeading: "Only students who can run fast are allowed to play in the playground. Slower students must stay in the classroom.",
            questions: [
                "Does this rule give SPACE for everyone to feel included?",
                "How to use VOICE to speak up?",
                "Who is AUDIENCE to listen and act on it?",
                "How to transform ideas to INFLUENCE?"
            ]
        },
    ]


    const [currentQuestionSet, setCurrentQuestionSet] = useState([])
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0)

    const handleNext = () => {
        setCurrentQuestionSet([])
        setCurrentQuestionNum(0)
        setCurrentObjIndex(currentObjIndex + 1)
    }

    const updateSolution = () => {
        const len = currentQuestionSet.length;
        if (len < obj[currentObjIndex]["questions"].length) {
            setCurrentQuestionSet([...currentQuestionSet, obj[currentObjIndex]["questions"][currentQuestionNum]]);
            setCurrentQuestionNum(currentQuestionNum + 1)
        }
    };


    

    function extractAndWrapWord(str) {
        const words = ["SPACE", "VOICE", "AUDIENCE", "INFLUENCE"];
        const regex = new RegExp(`\\b(${words.join("|")})\\b`, "i");
        return str.replace(regex, (match) => `<span class="sp1">${match}</span>`);
      }
      

    return (
        <div className='slidesMainContainer'>
            <div className="flex gap-4">
                <div className="w-1/2 bg-blue-500___X p-4 text-white___X leftCon">
                    <h1 className='headingOg'>{obj[currentObjIndex]["heading"]}</h1>
                    {/* <h1 className="heading">{obj[currentObjIndex]["subHeading"]}</h1> */}
                    <Image alt="currentObj" className='currentObj' src={obj[currentObjIndex]["img"]} />

                </div>
                <div className="w-1/2 bg-green-500___X p-4 text-white___X rightCon">
                    {currentQuestionSet.map((value, index) => (
                        <div key={index} className="bg-white text-black text-[19px] px-2 py-1 rounded-lg mb-5 solutionPara">
                            <p className='sp2' dangerouslySetInnerHTML={{ __html: extractAndWrapWord(value) }} />
                        </div>
                    ))}

                    {currentQuestionSet.length !== obj[currentObjIndex]["questions"].length &&
                        <center>
                            <button onClick={updateSolution} className="mt-4 p-2 bg-yellow-500 text-black rounded-lg">
                                Update Solution
                            </button>
                        </center>
                    }

                </div>
            </div>

            {currentQuestionSet.length === obj[currentObjIndex]["questions"].length
                && currentObjIndex < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
