'use client'

import './com3Style.css'


import Image from 'next/image'
import S1 from '../assets/s/s1.jpeg';
import S2 from '../assets/s/s2.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObj, setCurrentObj] = useState(0)

    const obj = [
        {
            img: S1,
            heading: "The Forgotten Seat at the School Play",
            subHeading: "Liam promised Oliver that he would save a seat during the school play. But when Oliver arrived, he saw Liam sitting with someone else. Liam waved at Oliver but didn’t make space for him.",
            solution: [
                "Oliver pauses and stays calm before reacting.",
                "Oliver says, “I felt disappointed when you didn’t save me a seat.”",
                "Oliver wonders — maybe Liam got nervous.",
                "Oliver decides to talk it out and ask Liam to let him know next time if saving a seat isn’t possible.",
                "Oliver listens to Liam’s side too and doesn’t jump to blame."
            ]
        },
        {
            img: S2,
            heading: "The Great Room Decoration Debate",
            subHeading: "Ella and Jake share a bedroom. Jake loves superheroes and already started decorating the room with superhero posters. Ella feels the room should reflect both of their styles, but Jake didn’t ask for her opinion.",
            solution: [
                "Does Ella have enough SPACE to share her ideas?",
                "How can Ella use her VOICE in this situation?",
                "Who is the right AUDIENCE to listen to Ella?",
                "How can  Ella turn this conversation into INFLUENCE?"
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

    function extractAndWrapWord(str) {
        const words = ["SPACE", "VOICE", "AUDIENCE", "INFLUENCE"];
        const regex = new RegExp(`\\b(${words.join("|")})\\b`, "i");
        return str.replace(regex, (match) => `<span class="sp1">${match}</span>`);
    }
    return (
        <div className='slidesMainContainer'>
            <h1 className='mb-2 text-[18px] font-semibold'>
                {currentObj === 0 ? "Use STOP-SAY-THINK-CHOOSE-RESPECT" : "Use LUNDY "}Framework
            </h1>

            <div className="flex gap-4">
                <div className="w-1/2 bg-blue-500 p-4 text-white leftCon">
                    <h1 className='headingOg'>{obj[currentObj]["heading"]}</h1>
                    <h1 className="heading">{obj[currentObj]["subHeading"]}</h1>
                    <Image alt="currentObj" className='currentObj' src={obj[currentObj]["img"]} />

                </div>
                <div className="w-1/2 bg-green-500 p-4 text-white rightCon">
                    {currentSolutionObj.map((value, index) => (
                        <div key={index} className="bg-white text-black text-[19px] px-2 py-1 rounded-lg mb-5 solutionPara">
                            {currentObj === 0 ?
                                (
                                    <div className='flex'>
                                        <p className='sp1'>{getSolutionHead(index)}</p>
                                        <p className='sp2'>{value}</p>
                                    </div>

                                ) : (
                                    <p className='sp2' dangerouslySetInnerHTML={{ __html: extractAndWrapWord(value) }} />

                                )}
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
