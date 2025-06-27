'use client'

import './style.css'
import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';
import { useState } from 'react';

export default function Slider() {
    const [currentObj, setCurrentObj] = useState(0);
    const [progress, setProgress] = useState(0);
    const [revealedValues, setRevealedValues] = useState([]);
    const [justAddedValues, setJustAddedValues] = useState([]);

    const obj = [S1, S2, S3];

    const objHeading = [
        'The Ice Cream Mix-Up',
        'The New Student',
        'The Colouring Conflict'
    ];

    const objSubHeading = [
        'Emma and Jake went to an ice cream shop. Emma ordered chocolate, and Jake ordered vanilla. But when they got their cones, the flavors were switched! Emma took a bite of her ice cream and frowned. "I don’t like this!" she said. Jake looked upset too. "I wanted vanilla, not chocolate!" he said.',
        'Liam had just joined the class. He speaks a different language and doesn’t know all the games yet. During recess, he noticed the kids playing tag and asked to join. Some kids paused, unsure what to do. "Who’s that?" a student whispered. "He doesn’t know the rules," another said quietly.',
        'Mia and Noah were happily coloring together. When Mia wanted the red crayon, she noticed Noah already using it. She crossed her arms and grumbled, "You’re taking too long!" Noah felt hurt and pulled the crayon closer. Both wished things had gone differently and didn’t feel happy anymore.'
    ];

    const toleranceQtyObj = [
        ["Staying calm", "Being flexible", "Trying something new"],
        ["Including others", "Being patient", "Showing kindness"],
        ["Sharing", "Being understanding", "Taking turns"]
    ];

    const handleNext = () => {
        if (currentObj < obj.length - 1) {
            setCurrentObj(currentObj + 1);
            setJustAddedValues([]);
            let update = updateToleranceQtyObj();
            if (update) {
                updateProgress();
            }
        }
    };

    const updateProgress = () => {
        const update = updateToleranceQtyObj();
        if (update) {
            const newItems = toleranceQtyObj[currentObj].filter(
                (item) => !revealedValues.includes(item)
            );

            setRevealedValues([...newItems, ...revealedValues]);
            setJustAddedValues(newItems);

            let newProgress = (currentObj + 1) * 33;
            setProgress(newProgress);
        }
    };

    const updateToleranceQtyObj = () => {
        let update = false;
        for (let i = 0; i < revealedValues.length; i++) {
            if (toleranceQtyObj[currentObj].includes(revealedValues[i])) {
                return update;
            }
        }
        update = true;
        return update;
    };

    const getGradient = () => {
        if (progress < 33) {
            return "from-blue-500 to-cyan-400"; // Peaceful blue to cyan
        } else if (progress < 66) {
            return "from-cyan-400 to-indigo-400"; // Peaceful cyan to indigo
        } else {
            return "from-indigo-400 to-purple-400"; // Peaceful indigo to purple
        }
    };


    return (
        <div className="slidesMainContainer">
            <div className="flex gap-4">
                {/* Left Content - Image & Story */}
                <div className="w-[70%] bg-blue-500 p-4 text-white leftCon">
                    <h1 className="headingOg">{objHeading[currentObj]}</h1>
                    <h1 className="heading">{objSubHeading[currentObj]}</h1>
                    <Image alt="currentObj" className="currentObj" src={obj[currentObj]} />
                </div>

                {/* Right Content - Progress Bar & Values */}
                <div className="w-[30%] bg-green-500 p-4 text-white rightCon flex flex-col items-center">
                    <h1 className='text-[25px] font-semibold'>Tolerance Qualities</h1>

                    <div className="flex items-center gap-4 w-full">
                        {/* Progress Bar */}
                        <div className="w-6 bg-gray-300 h-100 rounded-lg relative">
                            <div
                                className={`absolute bottom-0 left-0 w-6 rounded-lg transition-all duration-500 bg-gradient-to-b ${getGradient()}`}
                                style={{ height: `${progress}%` }}
                            ></div>
                        </div>

                        {/* Revealed Tolerance Values */}
                        <div className="flex flex-col gap-2">
                            {revealedValues.map((value, index) => (
                                <p
                                    key={index}
                                    className={`px-2 py-1 rounded-lg transition-all duration-300
                                        ${justAddedValues.includes(value)
                                            ? 'bg-[#ffea00] text-black font-semibold'
                                            : 'bg-white text-black'}`}
                                >
                                    {value}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Button to Update Progress */}
                    {progress < 100 && (
                        <button onClick={updateProgress} className="mt-4 p-2 bg-yellow-500 text-black rounded-lg">
                            Update Progress
                        </button>
                    )}
                </div>
            </div>

            {/* Next Button */}
            {currentObj < obj.length - 1 && (
                <button onClick={handleNext} className="mt-4 p-2 bg-gray-700 text-white rounded-lg">
                    Next
                </button>
            )}
        </div>
    );
}
