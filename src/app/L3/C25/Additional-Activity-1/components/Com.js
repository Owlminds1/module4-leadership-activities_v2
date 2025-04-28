import './style.css';
import { useState } from "react";

export default function Com() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [items, setItems] = useState([]);

    const obj = [
        {
            question:"The main character tried to boss her classmates around, but they wouldn’t listen. What leadership quality was she missing?",
            answer:"Respect"
        },
        {
            question:"The main character used her cape to protect Lucas from bullies. What leadership quality does this show?",
            answer:"Courage"
        },
        {
            question:"Instead of keeping her cape, the main character cut it into 26 pieces for her classmates. What leadership quality does this show?",
            answer:"Empowerment"
        },
        {
            question:"The teacher told her, “That is what it means to be a leader.” What leadership quality had she finally learned?",
            answer:"Selflessness"
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
                    src="/assets/L3-C25/Additional-Activity-1/v1.mp4"
                ></video>
            </div>

            <div className="w-1/2 flex flex-col space-y-4 ml-4">
                <center>
                    {items.length > 0 ? (
                        <div className="text-left">
                            {items.map((item, index) => (
                                <div key={index} className="mb-6">
                                    <h1 className="text-xl font-semibold mb-2">Q{index + 1}. {item.question}</h1>
                                    {item.answer ? (
                                        <h2 className="text-green-600 font-semibold text-md text-xl">A{index + 1}. {item.answer}</h2>
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
