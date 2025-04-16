"use client";

import './style.css';

import { useState } from "react";

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const obj = [
        "Initiative behaviour",
        "Bossy behaviour"
    ]
    const [input, setInput] = useState("");
    const [pros, setPros] = useState([]);
    const [cons, setCons] = useState([]);

    const handleNext = () => {
        setCurrentObjIndex(currentObjIndex + 1)
        setPros([])
        setCons([])
    }

    const handleAdd = (type) => {
        if (!input.trim()) return;

        if (type === "pro") {
            setPros([...pros, input.trim()]);
        } else {
            setCons([...cons, input.trim()]);
        }

        setInput("");
    };

    return (
        <div className="proConMainCon min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center px-4 py-10">
            <h1 className="text-3xl font-bold text-purple-700 mb-8">🌟 T-Chart For: <i>{obj[currentObjIndex]}</i></h1>

            {/* Pros and Cons Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mb-12">
                {/* Pros Box */}
                <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-green-300 flex flex-col items-center">
                    <div className="text-5xl mb-2">🟢</div>
                    <h2 className="text-2xl font-bold text-green-700 mb-4">Pros</h2>
                    <div className="w-full min-h-[200px] bg-green-50 rounded-2xl p-4 space-y-2 overflow-auto">
                        {pros.length === 0 ? (
                            <p className="text-green-600 italic">No pros yet. Add one below!</p>
                        ) : (
                            pros.map((item, index) => (
                                <div
                                    key={index}
                                    className="text-[22px] font-semibold bg-green-100 px-3 py-2 rounded-md text-green-800 shadow-sm flex items-center gap-3"
                                >
                                    <span className="text-4xl">👍</span>
                                    <span>{item}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Cons Box */}
                <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-red-300 flex flex-col items-center">
                    <div className="text-5xl mb-2">🔴</div>
                    <h2 className="text-2xl font-bold text-red-700 mb-4">Cons</h2>
                    <div className="w-full min-h-[200px] bg-red-50 rounded-2xl p-4 space-y-2 overflow-auto">
                        {cons.length === 0 ? (
                            <p className="text-red-600 italic">No cons yet. Add one below!</p>
                        ) : (
                            cons.map((item, index) => (
                                <div
                                    key={index}
                                    className="text-[22px] font-semibold bg-red-100 px-3 py-2 rounded-md text-red-800 shadow-sm flex items-center gap-3"
                                >
                                    <span className="text-4xl">👎</span>
                                    <span>{item}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Input Section */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your idea here..."
                    className="bg-white flex-1 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-md text-lg"
                />
                <button
                    onClick={() => handleAdd("pro")}
                    className="cursor-pointer bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-xl shadow-md"
                >
                    Add to Pros
                </button>
                <button
                    onClick={() => handleAdd("con")}
                    className="cursor-pointer bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-xl shadow-md"
                >
                    Add to Cons
                </button>
            </div>

            {currentObjIndex < obj.length - 1 &&
                <button 
                    className='cursor-pointer mt-10 bg-blue-400 hover:bg-green-500 text-white px-8 py-2 rounded-xl shadow-md'
                    onClick={handleNext}>Next</button>
            }
        </div>
    );
}
