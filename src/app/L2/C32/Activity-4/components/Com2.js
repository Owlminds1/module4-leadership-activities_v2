"use client";
import { useState } from "react";

const Com2 = (prop) => {
    const solutionElements = [
        { meaning: "What does 'Space' mean in the 4-step  decision-making process?" },
        { meaning: "What does 'Voice' mean in the 4-step  decision-making process?" },
        { meaning: "What does 'Audience' mean in the 4-step  decision-making process?" },
        { meaning: "What does 'Influence' mean in the 4-step  decision-making process?" },
    ];

    const [revealedIndex, setRevealedIndex] = useState(0);

    const handleUpdateSolution = () => {
        if (revealedIndex < solutionElements.length) {
            setRevealedIndex(revealedIndex + 1);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-2xl rounded-xl">
            <h1 className="text-2xl font-semibold mb-6 text-center">
                4-step decision-making process
            </h1>


            <div className="space-y-4 mb-6 text-center">
                {solutionElements.slice(0, revealedIndex).map((element, index) => (
                    <div key={index} className="space-x-3 mb-6">
                        <span className="text-xl">Q{index+1}. {element.meaning}</span>
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

export default Com2;
