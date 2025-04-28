import './style.css';
import { useState } from "react";

export default function Com() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [items, setItems] = useState([]);

    const obj = [
        {
            question: "Why did Maya not see herself as a leader at first?",
            answer: ""
        },
        {
            question: "Maya listened to the townspeople and valued everyone’s ideas. What leadership quality does this show?",
            answer: "Empathy"
        },
        {
            question: "Even though she wasn’t the loudest person, Maya inspired others through her actions. What leadership quality does this show?",
            answer: "Leading by example"
        },
        {
            question: "Maya included the farmers, engineers, and children in finding a solution. What leadership quality did she show?",
            answer: "Teamwork, wisdom to combine different abilities."
        },
        {
            question: "Maya kept going even when the problem seemed difficult. What leadership quality did she show?",
            answer: "Determination"
        },
        {
            question: "After the water was restored, Maya didn’t take all the credit—she was just happy the town was safe. What does this tell us about her?",
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
                    src="/assets/L2-C25/Activity-1/v1.mp4"
                ></video>
            </div>

            <div className="w-1/2 flex flex-col space-y-4 ml-10">
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

                                                {currentObjIndex === 0 ? "Next Question" : "Reveal Leadership Quality"}

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
