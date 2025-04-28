import './style.css';
import S1 from '../assets/s1.jpeg';
import Image from 'next/image';

import { useState } from "react";

export default function Com(props) {
    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [items, setItems] = useState([]);

    const obj = [
        {
            question: "Q. What did Maya do when she saw a problem?",
            answer: ""
        },
        {
            question: "--- Which leadership quality this shows?",
            answer: "Problem-solving and Staying Positive"
        },
        {
            question: "Q. How did Maya make her friends feel better?",
            answer: ""
        },
        {
            question: "--- Which leadership quality this shows?",
            answer: "Encouragement and Creativity"
        },
        {
            question: "Q. Did Maya wait for someone else to fix the problem, or did she take action?",
            answer: ""
        },
        {
            question: "--- Which leadership quality this shows?",
            answer: "Initiative and Confidence"
        },
        {
            question: "Q. Did Maya force her friends to play her games, or did she suggest and involve them?",
            answer: ""
        },
        {
            question: "--- Which leadership quality this shows?",
            answer: "Teamwork, and Respect for Others"
        },
        {
            question: "Q. Was Maya scared of trying something new, or did she show courage?",
            answer: ""
        },
        {
            question: "--- Which leadership quality this shows?",
            answer: "Bravery, and Thinking Outside the Box"
        }

    ];

    const handleStart = () => {
        setItems([{
            question: obj[0].question,
            answer: ""
        }]);
        setCurrentObjIndex(0);
    };

    const handleRevealLeadershipQuality = () => {
        const updatedItems = [...items];
        updatedItems[currentObjIndex].answer = obj[currentObjIndex].answer;
        setItems(updatedItems);

        // After showing the answer, if there are more questions, move to next
        const nextIndex = currentObjIndex + 1;
        if (nextIndex < obj.length) {
            setTimeout(() => { // small timeout to allow UI update
                setItems(prev => [
                    ...prev,
                    { question: obj[nextIndex].question, answer: "" }
                ]);
                setCurrentObjIndex(nextIndex);
            }, 50); // 300ms
        }

        if (nextIndex === obj.length) {
            props.handleShowStartBtn()
        }
    };

    return (
        <div className="flex p-6">
            <div className="w-1/2">
                <center>
                    <h1 className='text-[25px] font-semibold mb-4'>Maya and the Rainy Day</h1>
                    <h1 className='text-[20px] mb-4'>One day, Maya and her friends were excited to go out and play, but suddenly, it started to rain. Everyone groaned. Instead of complaining, Maya had an idea. She gathered her friends and suggested fun indoor games like “Simon Says” and a storytelling circle. Soon, laughter filled the room.</h1>
                    <Image className='rounded w-[70%]' src={S1} alt="s1" />
                </center>
            </div>

            <div className="w-1/2 flex flex-col space-y-4 ml-10">
                <center>
                    {items.length > 0 ? (
                        <div className="text-left">
                            {items.map((item, index) => (
                                <div key={index} className="mb-6">
                                    <h1 className="text-xl font-semibold mb-2">
                                        {item.question}
                                    </h1>

                                    {item.answer ? (
                                        <h2 className="text-green-600 font-semibold text-md text-xl">A{index + 1}. {item.answer}</h2>
                                    ) : (
                                        index === currentObjIndex && (
                                            <button
                                                onClick={handleRevealLeadershipQuality}
                                                className="cursor-pointer px-4 py-2 bg-blue-500 text-white w-full mt-4 rounded-md shadow-md hover:bg-blue-600 transition"
                                            >
                                                {currentObjIndex % 2 === 0 ? "Next Question" : "Reveal Leadership Quality"}

                                            </button>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <button
                            onClick={handleStart}
                            className="cursor-pointer px-4 py-2 bg-green-500 text-white w-[200px] rounded-md shadow-md hover:bg-green-600 transition"
                        >
                            Start
                        </button>
                    )}
                </center>
            </div>
        </div>
    );
}
