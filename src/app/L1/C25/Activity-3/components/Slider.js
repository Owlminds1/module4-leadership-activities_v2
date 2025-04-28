'use client'


import Image from 'next/image'
import Teacher from '../assets/teacher.jpeg';
import Ff from '../assets/ff.jpeg';
import BassP from '../assets/bassP.jpeg';
import ZooK from '../assets/zooK.jpeg';
import SHelp from '../assets/sHelp.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObj, setCurrentObj] = useState(0);
    const [showX, setShowX] = useState(false);

    const obj = [
        Teacher,
        Ff,
        BassP,
        ZooK,
        SHelp
    ];

    const objHeading = [
        'A teacher in a classroom.',
        'A firefighter courageously rescuing people.',
        'A basketball team captain delivering a motivational speech to their teammates before a game.',
        'A zookeeper feeding animals in a zoo.',
        'Ron helping Ria who fell on the playground.'
    ];

    const qualities = {
        mustHave: [
            "Takes Charge",
            "Make Good Choices",
            "Is Brave",
            "Helps Others Work Together",
            "Selflessness",
        ],
        niceToHave: [
            "Kind",
            "Confidence",
            "Fairness",
            "Hard Work"
        ]
    };

    const handleNext = () => {
        setCurrentObj(prev => prev + 1);
    };

    const handleNext2 = () => {
        setShowX(true)
    }

    return (
        <div className="flex flex-col items-center p-8 text-center">
            {!showX &&
                <>
                    <h1 className="text-2xl mb-6 text-gray-800">{objHeading[currentObj]}</h1>
                    <Image alt="Slide Image" className="w-72 h-auto rounded-lg mb-6 shadow-md" src={obj[currentObj]} />
                </>
            }
            {currentObj < obj.length - 1 &&
                <button
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg cursor-pointer text-lg transition duration-300 hover:bg-blue-700"
                    onClick={handleNext}>
                    Next
                </button>
            }

            {!showX && currentObj === obj.length - 1 &&
                <button
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg cursor-pointer text-lg transition duration-300 hover:bg-blue-700"
                    onClick={handleNext2}>
                    Explore Must to hand and Nice to have Leadership qualities
                </button>
            }


            {showX &&
                <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-lg w-full max-w-lg">
                    <h2 className="text-xl mb-6 text-gray-800 font-semibold">Qualities of a Good Leader</h2>

                    <div className="space-y-8">
                        {/* Must Have Section */}
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold text-blue-600">Must Have:</h3>
                            <div className="space-y-3">
                                {qualities.mustHave.map((quality, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 text-lg">{quality}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Nice to Have Section */}
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold text-green-600">Nice to Have:</h3>
                            <div className="space-y-3">
                                {qualities.niceToHave.map((quality, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 text-lg">{quality}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
