'use client'

import './style.css'

import Image from 'next/image'
import C1 from '../assets/c1.jpeg';
import C2 from '../assets/c2.jpeg';
import C3 from '../assets/c3.jpeg';
import C4 from '../assets/c4.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const obj = [
        {
            heading: "The Class Newspaper",
            subHeading: "Emma’s group is in charge of making the school’s weekly class newspaper.",
            subHeading2: [
                {
                    img: C1,
                    text: "Emma is the editor,"
                },
                {
                    img: C2,
                    text: "Jay is writing the sports section,"
                },
                {
                    img: C3,
                    text: "Mia is doing the artwork,"
                },
                {
                    img: C4,
                    text: "Leo is supposed to write the jokes column."
                },
            ],
            subHeading3: "But every time Emma checks in, Leo says, “I’m still thinking of something funny,” and never actually writes anything. The deadline is tomorrow."
        }
    ]

    const handleNext = () => {
        setCurrentObjIndex(currentObjIndex + 1)
    }

    return (
        <div className="slidesMainContainer min-h-screen w-full p-6 bg-gradient-to-br from-indigo-100 to-pink-100 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
                {/* LEFT SIDE: Scenario and Roles */}
                <div className="md:w-1/2 space-y-4 border-l-4 border-purple-500 pl-4">
                    <h1 className="heading text-2xl font-bold text-purple-700">{obj[currentObjIndex].heading}</h1>
                    <h2 className="subHeading text-lg text-gray-800">{obj[currentObjIndex].subHeading}</h2>

                    <div className="bg-[#ebdcff] rounded-lg shadow-md p-4 border border-purple-200">
                        <ul className="space-y-4">
                            {obj[currentObjIndex].subHeading2.map((t, index) => (
                                <div key={index} className="flex items-center">
                                    <Image
                                        className="w-[70px] h-[70px] object-cover mr-4 rounded-full border-2 border-purple-400"
                                        src={t.img}
                                        alt="img"
                                    />
                                    <li className="text-[20px] text-base text-gray-700">{t.text}</li>
                                </div>
                            ))}
                        </ul>
                    </div>

                    <h2 className="text-left text-[22px] mt-6 text-gray-900">{obj[currentObjIndex].subHeading3}</h2>
                </div>

                {/* RIGHT SIDE: Questions */}
                <div className="md:w-1/2 space-y-6">
                    <div>
                        <label className="font-semibold block text-left text-[22px] mb-2 text-purple-800">Q. Who might be social loafing here?</label>
                        <textarea className="w-full border border-purple-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" rows="4"></textarea>
                    </div>

                    <div className='mt-14'>
                        <label className="font-semibold block text-[22px] text-left mb-2 text-purple-800">Q. How can the group complete its task on time?</label>
                        <textarea className="w-full border border-purple-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" rows="4"></textarea>
                    </div>
                </div>
            </div>

            {currentObjIndex < obj.length - 1 && (
                <button
                    onClick={handleNext}
                    className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-200"
                >
                    Next
                </button>
            )}
        </div>
    );
}
