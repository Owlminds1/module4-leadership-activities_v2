import './style.css';
import { useState } from "react";

export default function Com() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [items, setItems] = useState([]);

    const obj = [
        {
            question: "Katherine faced many obstacles because of her race and gender. But instead of giving up, she kept going. What leadership quality does that show?",
            answer: "Perseverance & Determination"
        },
        {
            question: "Katherine believed in her abilities even when others doubted her. What leadership quality does that show?",
            answer: "Confidence"
        },
        {
            question: "Katherine knew that her work was important, so she stayed focused even when things were tough. What leadership quality does that show?",
            answer: "Dedication"
        },
        {
            question: "Katherine’s work opened doors for many women in science. What leadership quality does that show?",
            answer: "Inspiring"
        },
        {
            question: "Katherine's calculations had to be perfect because astronauts’ lives depended on them. She took her work seriously and made sure it was done right. What leadership quality does that show?",
            answer: "Responsibility"
        },
        {
            question: "Even though Katherine made history, she didn’t seek fame. She stayed focused on her work and helped others succeed. What leadership quality does that show?",
            answer: "Humility"
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
            }, 300); // 300ms
        }
    };

    return (
        <div className="flex p-6">
            <div className="w-1/2">
                <video
                    className="w-[100%] rounded-lg"
                    controls
                    src="/assets/L3-C25/Activity-1/v1.mp4"
                ></video>
            </div>

            <div className="w-1/2 flex flex-col space-y-4 ml-4">
                <center>
                    {items.length > 0 ? (
                        <div className="text-left">
                            {items.map((item, index) => (
                                <div key={index} className="mb-6">
                                    <h1 className="text-lg font-semibold mb-2">Q{index + 1}. {item.question}</h1>
                                    {item.answer ? (
                                        <h2 className="text-green-600 font-semibold text-md text-lg">A{index + 1}. {item.answer}</h2>
                                    ) : (
                                        index === currentObjIndex && (
                                            <button
                                                onClick={handleRevealLeadershipQuality}
                                                className="cursor-pointer px-4 py-2 bg-blue-500 text-white w-full mt-4 rounded-md shadow-md hover:bg-blue-600 transition"
                                            >
                                                Reveal Leadership Quality
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
