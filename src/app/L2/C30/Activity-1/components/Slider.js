'use client'

import './style.css'
import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';
import S4 from '../assets/s4.jpeg';

import { useState } from 'react';

export default function Slider() {
    // const [introScreen, setIntroScreen] = useState(true);
    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [currentSolutionObj, setCurrentSolutionObj] = useState([]);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [showPick, setShowPick] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const stopArr = ["STOP", "Think", "Options", "Pick"];

    const obj = [
        {
            img: S1,
            heading: "",
            text: "Imagine you’re standing at the edge of a busy road. Would you just run across without looking?",
            choices: [
                "Wait, look both ways, and cross only when the road is completely clear.",
                "Cross quickly before a car gets too close."
            ],
            choice1_CC: [
                "This might take a little longer, but it ensures you stay safe"
            ],
            choice2_CC: [
                "Sounds fast, but it's dangerous! If the car speeds up or doesn’t see you, you will hurt yourself"
            ],
            ans: 0
        },
        {
            img: S2,
            heading: "Lost & Found",
            text: "Rhyan is walking on the playground when he sees a $10 bill on the ground. No one is around, and he doesn’t know who lost it. What should he do?",
            choices: [
                "Keep the money and buy a treat for himself.",
                "Take it to the teacher or the lost and found."
            ],
            choice1_CC: [
                "Rhyan enjoys a treat, but later feels guilty.",
                "The real owner might be upset."
            ],
            choice2_CC: [
                "The teacher thanks Rhyan.",
                "The rightful owner gets their money back and is happy.",
            ],
            ans: 1
        },
        {
            img: S3,
            heading: "The Homework Shortcut",
            text: "Lily has homework due tomorrow. Her friend tells her, ‘Just copy my answers, and we’ll both save time!’ What should she do?",
            choices: [
                "Do the work herself, even if it takes longer.",
                "Copy the answers to save time."
            ],
            choice1_CC: [
                "She understands the topic better.",
                "She feels proud of her effort"
            ],
            choice2_CC: [
                "Lily finishes quickly, but doesn’t learn the topic.",
                "The teacher might find out, and she feels guilty."
            ],
            ans: 0
        },
        {
            img: S4,
            heading: "The School Project vs. Soccer Game",
            text: "Alex's teacher gave a group project due tomorrow. His friends invite him to play soccer after school. He really wants to go, but his team is counting on him to finish his part. What should he do?",
            choices: [
                "Go play soccer with his friends and finish the project later at night.",
                "Finish his project first, then ask if he can join soccer afterward."
            ],
            choice1_CC: [
                "Alex has fun playing but is tired later.",
                "He struggles to finish, and his team is upset."
            ],
            choice2_CC: [
                "His team is happy because he finished his work.",
                "He still gets to play a little soccer.",
            ],
            ans: 1
        },
    ];

    // const handleStart = () => {
    //     setIntroScreen(false);
    // };

    const handleNext = () => {
        setCurrentObjIndex(currentObjIndex + 1);
        setCurrentSolutionObj([]);
        setSelectedChoice(null);
        setShowPick(false);
        setShowFeedback(false);
    };

    const updateSolution = () => {
        const len = currentSolutionObj.length;
        if (len < stopArr.length) {
            setCurrentSolutionObj([...currentSolutionObj, stopArr[len]]);
            if (stopArr[len] === "Options") {
                setShowPick(true); // Show "Pick" after Options are displayed
            }
        }
    };

    const handlePickChoice = (choiceIndex) => {
        setSelectedChoice(choiceIndex);
        setShowFeedback(true);
    };

    const showNextBtn = currentObjIndex < obj.length - 1 && showFeedback;

    // if (introScreen) {
    //     return (
    //         <div className="slidesMainContainer p-10 bg-white text-center">
    //             <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to the STOP Decision-Making Game!</h1>
    //             <p className="text-xl mb-8">You'll use the STOP steps to make smart and safe choices:</p>
    //             <ul className="list-disc list-inside text-lg mb-8 text-left max-w-xl mx-auto">
    //                 <li><b>S</b> - Stop</li>
    //                 <li><b>T</b> - Think</li>
    //                 <li><b>O</b> - Options</li>
    //                 <li><b>P</b> - Pick</li>
    //             </ul>
    //             <button className="buttonS1 px-6 py-2 text-white bg-blue-600 rounded-lg" onClick={handleStart}>Start</button>
    //         </div>
    //     );
    // }

    return (
        <div className="slidesMainContainer">
            <div className="flex gap-4">
                <div className="w-1/2 bg-blue-500 p-4 text-white leftCon">
                    <h1 className='headingOg'>{obj[currentObjIndex].heading}</h1>
                    <h1 className="heading">{obj[currentObjIndex].text}</h1>
                    <Image alt="Scenario" className='currentObj' src={obj[currentObjIndex].img} />
                </div>

                <div className="w-1/2 bg-green-500 p-4 text-white rightCon">
                    {currentSolutionObj.map((step, index) => (
                        <div key={index}>
                            <div className="bg-white text-black text-[19px] px-2 py-1 rounded-lg mb-5 solutionPara">
                                <p className='sp1'>{step}</p>
                            </div>

                            {step === "Options" && (
                                <div className="space-y-3 mb-4">
                                    {obj[currentObjIndex].choices.map((choice, idx) => (
                                        <div key={idx} className="bg-white text-black text-[18px] p-3 rounded text-gray-700">
                                            <i>
                                                <strong>Option {idx === 0 ? "A" : "B"}:</strong> {choice}
                                            </i>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {step === "Pick" && showPick && (
                                <div className="mt-4 space-x-4">
                                    <button onClick={() => handlePickChoice(0)} className="bg-[#c20c82] hover:bg-[#a10a6c] text-white px-4 py-2 rounded-[10px] cursor-pointer text-[17px]">Pick Option A</button>
                                    <button onClick={() => handlePickChoice(1)} className="bg-[#c20c82] hover:bg-[#a10a6c] text-white px-4 py-2 rounded-[10px] cursor-pointer text-[17px]">Pick Option B</button>
                                </div>
                            )}

                            {step === "Pick" && showFeedback && selectedChoice !== null && (
                                <div className="mt-4 bg-white text-gray-700 p-4 rounded">
                                    <i>
                                        <strong>Outcome of your choice:</strong>
                                        <ul className="list-disc mt-2 ml-5">
                                            {obj[currentObjIndex][selectedChoice === 0 ? 'choice1_CC' : 'choice2_CC'].map((line, i) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                        </ul>
                                    </i>
                                </div>
                            )}
                        </div>
                    ))}

                    {currentSolutionObj.length < stopArr.length &&
                        <center>
                            <button onClick={updateSolution} className="buttonS1 mt-4 px-4 py-2 bg-white text-black rounded">Update Solution</button>
                        </center>
                    }
                </div>
            </div>

            <br />
            {!showNextBtn &&
                <p><i>Note: Make sure all steps are completed and a choice is picked to reveal the Next button.</i></p>
            }
            {showNextBtn &&
                <button className='buttonS1 mt-4 px-4 py-2 bg-blue-600 text-white rounded' onClick={handleNext}>Next</button>
            }
        </div>
    );
}
