"use client";

import './style.css';
import { useState } from "react";

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const obj = [
        "Initiative behaviour",
        "Bossy behaviour",
    ];

    const [input, setInput] = useState("");
    const [pros, setPros] = useState({
        "Initiative behaviour": [],
        "Bossy behaviour": [],
    });
    const [cons, setCons] = useState({
        "Initiative behaviour": [],
        "Bossy behaviour": [],
    });

    const handleNext = () => {
        setCurrentObjIndex(currentObjIndex + 1);
        setInput("");
    };

    const handleAdd = (type, behaviour) => {
        if (!input.trim()) return;

        const updatedPros = { ...pros };
        const updatedCons = { ...cons };

        if (type === "pro") {
            updatedPros[behaviour].push(input.trim());
        } else {
            updatedCons[behaviour].push(input.trim());
        }

        setPros(updatedPros);
        setCons(updatedCons);
        setInput("");
    };

    const handleCompare = () => {
        setCurrentObjIndex(2); // Move to Screen 3
    };

    const hasEnoughForCompare = pros["Bossy behaviour"].length > 0 && cons["Bossy behaviour"].length > 0;

    const getMaxLength = (a, b) => Math.max(a.length, b.length);

    return (
        <div className="proConMainCon min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center px-4 py-10">
            {currentObjIndex < 2 && (
                <>
                    <h1 className="text-3xl font-bold text-purple-700 mb-8">🌟 Pros & Cons Chart For: <i>{obj[currentObjIndex]}</i></h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mb-12">
                        <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-green-300 flex flex-col items-center">
                            <div className="text-5xl mb-2">🟢</div>
                            <h2 className="text-2xl font-bold text-green-700 mb-4">Pros</h2>
                            <div className="w-full min-h-[200px] bg-green-50 rounded-2xl p-4 space-y-2 overflow-auto">
                                {pros[obj[currentObjIndex]].length === 0 ? (
                                    <p className="text-green-600 italic">No pros yet. Add one below!</p>
                                ) : (
                                    pros[obj[currentObjIndex]].map((item, index) => (
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

                        <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-red-300 flex flex-col items-center">
                            <div className="text-5xl mb-2">🔴</div>
                            <h2 className="text-2xl font-bold text-red-700 mb-4">Cons</h2>
                            <div className="w-full min-h-[200px] bg-red-50 rounded-2xl p-4 space-y-2 overflow-auto">
                                {cons[obj[currentObjIndex]].length === 0 ? (
                                    <p className="text-red-600 italic">No cons yet. Add one below!</p>
                                ) : (
                                    cons[obj[currentObjIndex]].map((item, index) => (
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

                    <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your idea here..."
                            className="bg-white flex-1 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-md text-lg"
                        />
                        <button
                            onClick={() => handleAdd("pro", obj[currentObjIndex])}
                            className="cursor-pointer bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-xl shadow-md"
                        >
                            Add to Pros
                        </button>
                        <button
                            onClick={() => handleAdd("con", obj[currentObjIndex])}
                            className="cursor-pointer bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-xl shadow-md"
                        >
                            Add to Cons
                        </button>
                    </div>

                    {currentObjIndex < obj.length - 1 &&
                        <button
                            className="cursor-pointer mt-10 bg-blue-400 hover:bg-green-500 text-white px-8 py-2 rounded-xl shadow-md"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    }

                    {currentObjIndex === 1 && hasEnoughForCompare && (
                        <button
                            className="cursor-pointer mt-10 bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-2 rounded-xl shadow-md"
                            onClick={handleCompare}
                        >
                            Compare
                        </button>
                    )}
                </>
            )}

{currentObjIndex === 2 && (
    <div className="w-full max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-purple-300">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">🔍 Initiative vs Bossy behaviour</h2>

        {obj.map((behaviour, index) => (
            <div key={index} className="mb-10">
                <h3 className={`text-2xl font-bold mb-4 text-center ${behaviour === "Initiative behaviour" ? "text-green-700" : "text-red-700"}`}>
                    {behaviour}
                </h3>

                <div className="overflow-auto rounded-2xl shadow-md border border-gray-200">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-purple-100 text-purple-800 text-lg">
                                <th className="py-3 px-6 text-left border-b border-gray-300">Pros</th>
                                <th className="py-3 px-6 text-left border-b border-gray-300">Cons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: Math.max(pros[behaviour].length, cons[behaviour].length || 1) }).map((_, rowIdx) => (
                                <tr key={rowIdx} className="hover:bg-purple-50">
                                    <td className="py-3 px-6 border-b border-gray-200 text-green-700">
                                        {pros[behaviour][rowIdx] || <span className="text-gray-400 italic">–</span>}
                                    </td>
                                    <td className="py-3 px-6 border-b border-gray-200 text-red-600">
                                        {cons[behaviour][rowIdx] || <span className="text-gray-400 italic">–</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        ))}
    </div>
)}

            
        </div>
    );
}
