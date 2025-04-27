'use client'

import './com2Style.css'


import Image from 'next/image'
import S1 from '../assets/com2/s1.jpeg';
import S2 from '../assets/com2/s2.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObj, setCurrentObj] = useState(0)

    const obj = [
        {
            img: S1,
            heading: "Drawing Disaster",
            subHeading: "Sofia proudly shows her drawing, but Liam giggles and says, “That looks funny!” Sofia feels hurt and embarrassed.",
            solution: [
                "Sofia takes a deep breath and reminds herself not to yell or cry.",
                "She calmly tells Liam, “I feel sad when you laugh at my drawing.”",
                "Sofia thinks: Should I tell the teacher? Move away? Ask Liam why he laughed?",
                "Sofia decides to say, “I worked hard on it. I like my drawings.",
                "She doesn’t tease him back. Instead, she smiles and says, “Everyone’s art is different!"
            ]
        },
        {
            img: S2,
            heading: "Juice Box Jealousy",
            subHeading: "Jack brings plain water to school, but his sister Chloe has a juice box. Jack feels disappointed.",
            solution: [
                "Jack takes a deep breath before saying anything.",
                "He says, “I feel a little sad because I wanted juice too.”",
                "Jack thinks: Maybe I can ask Mum to pack juice next time? Can I enjoy my water anyway?",
                "Jack smiles and says, “I’ll bring juice next time too. Let’s trade a fun fact while we drink!”",
                "He doesn't complain or try to grab Chloe’s juice. He respects that it’s her treat today."
            ]
        },
    ]


    const [currentSolutionObj, setCurrentSolutionObj] = useState([])


    const handleNext = () => {
        setCurrentSolutionObj([])
        setCurrentObj(currentObj + 1)
    }

    const updateSolution = () => {
        const len = currentSolutionObj.length;
        if (len < obj[currentObj]["solution"].length) {
            setCurrentSolutionObj([...currentSolutionObj, obj[currentObj]["solution"][len]]);
        }
    };

    const getSolutionHead = (index) => {
        if (index == 0) {
            return "STOP"
        }
        else if (index == 1) {
            return "SAY"
        }
        else if (index == 2) {
            return "THINK"
        }
        else if (index == 3) {
            return "CHOOSE"
        }
        else if (index == 4) {
            return "RESPECT"
        }

    }

    return (
        <div className='slidesMainContainer'>
            <div className="flex gap-4">
                <div className="w-1/2 bg-blue-500 p-4 text-white leftCon">
                    <h1 className='headingOg'>{obj[currentObj]["heading"]}</h1>
                    <h1 className="heading">{obj[currentObj]["subHeading"]}</h1>
                    <Image alt="currentObj" className='currentObj' src={obj[currentObj]["img"]} />

                </div>
                <div className="w-1/2 bg-green-500 p-4 text-white rightCon">
                    {currentSolutionObj.map((value, index) => (
                        <div key={index} className="bg-white text-black text-[19px] px-2 py-1 rounded-lg mb-5 solutionPara">
                            <p className='sp1'>{getSolutionHead(index)}</p>
                            <p className='sp2'>{value}</p>
                        </div>
                    ))}

                    {currentSolutionObj.length < obj[currentObj]["solution"].length &&
                        <center>
                            <button onClick={updateSolution} className="mt-4 p-2 bg-yellow-500 text-black rounded-lg">
                                Update Solution
                            </button>
                        </center>
                    }
                </div>
            </div>


            {currentSolutionObj.length === obj[currentObj]["solution"].length && currentObj < obj.length - 1 ? (
                <button onClick={handleNext}>Next</button>
            ) : currentObj < obj.length - 1 ? (
                <h1 className="mt-4">
                    <i>Note: Make sure all the options are explored and discussed to reveal the next button.</i>
                </h1>
            ) : null}
        </div>
    );
}
