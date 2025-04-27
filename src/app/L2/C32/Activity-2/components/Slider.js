"use client";
import { useState } from "react";

const STARQuestion = (prop) => {
    const solutionElements = [
        { letter: "S", meaning: "Set a Goal" },
        { letter: "T", meaning: "Track Progress" },
        { letter: "A", meaning: "Ask for Help" },
        { letter: "R", meaning: "Reward Yourself" },
    ];

    const [revealedIndex, setRevealedIndex] = useState(0);

    const handleUpdateSolution = () => {
        if (revealedIndex < solutionElements.length) {
            setRevealedIndex(revealedIndex + 1);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-2xl rounded-xl text-gray-800">
            <h1 className="text-2xl font-semibold mb-6 text-center">
                How many elements does the STAR technique have?
                And which are they?
            </h1>


            <div className="space-y-4 mb-6">
                {solutionElements.slice(0, revealedIndex).map((element, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <span className="text-xl font-extrabold">{element.letter}:</span>
                        <span className="text-lg">{element.meaning}</span>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-4">
                {revealedIndex < solutionElements.length &&
                    <button
                        onClick={handleUpdateSolution}
                        className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Update Solution
                    </button>
                }
                {revealedIndex > solutionElements.length - 1 && (
                    <button 
                        onClick={prop.handleNext}
                        className="cursor-pointer px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default STARQuestion;
