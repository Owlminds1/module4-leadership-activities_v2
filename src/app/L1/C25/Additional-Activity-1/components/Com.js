import './style.css';
import { useState } from "react";

export default function Com() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [items, setItems] = useState([]);

    const obj = [
        {
            question: "What happened to the little red train in the story?"
        },
        {
            question: "Who didn’t help? Why do you think they said no?"
        },
        {
            question: "Who finally helped? What made the Little Blue Engine different from the others?"
        },
        {
            question: "What leadership qualities did the Little Blue Engine show?"
        },
        {
            question: "Can you think of someone in real life who is like the Little Blue Engine? What makes them a good leader?"
        }
    ];

    const handleStart = () => {
        setItems([obj[currentObjIndex]]);
        setCurrentObjIndex(0);
    };

    const handleNextQuestion = () => {
        let currentIndex = currentObjIndex + 1
        setItems([...items, obj[currentIndex]]);
        setCurrentObjIndex(currentIndex);
    };

    return (
        <div className="flex p-6">
            <div className="w-1/2">
                <video
                    className="w-[100%] rounded-lg"
                    controls
                    src="/assets/L1-C25/Additional-Activity-1/v1.mp4"
                ></video>
            </div>

            <div className="w-1/2 flex flex-col space-y-4">
                <center>
                    {items.length > 0 ? (
                        <div className="text-left ml-10">
                            {items.map((item, index) => (
                                <div key={index} className="mb-6">
                                    <h1 className="text-xl font-semibold mb-2">Q{index + 1}. {item.question}</h1>
                                    {index === currentObjIndex && obj.length - 1 > currentObjIndex && (
                                        <button
                                            onClick={handleNextQuestion}
                                            className="cursor-pointer px-4 py-2 bg-blue-500 text-white w-full mt-4 rounded-md shadow-md hover:bg-blue-600 transition"
                                        >
                                            Next Question
                                        </button>
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
