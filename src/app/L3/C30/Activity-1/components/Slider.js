'use client'

import './style.css'


import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)

    const obj = [
        {
            img: S1,
            heading: "The Fundraiser",
            subHeading: "Your class is on a mission to raise $500 for a local animal shelter, to buy food, blankets, and supplies for animals in need. You’ve baked cookies, collected donations, and worked hard. But after two weeks, you’ve only gathered $100. The shelter is depending on you, and the clock is ticking!"
        },
        {
            img: S2,
            heading: "The Snack Dare",
            subHeading: "Everyone at school was cracking up about a party where someone dared to eat a super spicy chip! Now, you’re off to a birthday party this weekend — and guess what? One of those dare-loving kids will be there too. They’re famous for wild challenges, like drinking weird mixes or eating spoonfuls of hot sauce. You can’t help but wonder: what if they dare you next?"
        }
    ]

    const solutionObj = [
        "List choices",
        "List outcomes",
        "Decide",
        "Power up",
        "Reflect on decisions"
    ]



    const [currentSolutionObj, setCurrentSolutionObj] = useState([])


    const handleNext = () => {
        setCurrentSolutionObj([])
        setCurrentObjIndex(currentObjIndex + 1)
    }

    const updateSolution = () => {
        const len = currentSolutionObj.length;
        if (len < solutionObj.length) {
            setCurrentSolutionObj([...currentSolutionObj, solutionObj[len]]);
        }
    };


    return (
        <div className='slidesMainContainer'>
            <div className="flex gap-4">
                <div className="w-1/2 bg-blue-500 p-4 text-white leftCon">
                    <h1 className='headingOg'>{obj[currentObjIndex]["heading"]}</h1>
                    <h1 className="heading">{obj[currentObjIndex]["subHeading"]}</h1>
                    <Image alt="currentObjIndex" className='currentObj' src={obj[currentObjIndex]["img"]} />

                </div>
                <div className="w-1/2 bg-green-500 p-4 text-white rightCon">
                    {currentSolutionObj.map((value, index) => (
                        <div key={index} className="bg-white text-black text-[19px] px-2 py-1 rounded-lg mb-5 solutionPara">
                            <p className='sp2 font-semibold text-[20px]'>{index+1}{'. '}{value}</p>
                        </div>
                    ))}

                    {currentSolutionObj.length < solutionObj.length &&
                        <center>
                            <button onClick={updateSolution} className="mt-4 p-2 bg-yellow-500 text-black rounded-lg">
                                Next
                            </button>
                        </center>
                    }

                </div>
            </div>

            {currentObjIndex < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
