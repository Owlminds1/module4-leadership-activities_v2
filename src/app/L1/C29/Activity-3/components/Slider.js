"use client";

import './style.css'

import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';
import S4 from '../assets/s4.jpeg';
import S5 from '../assets/s5.jpeg';

import { useState } from "react";

export default function Slider() {
    const [light, setLight] = useState("none");
    const [currentObjIndex, setCurrentObjIndex] = useState(0)

    const obj = [
        {
            img: S1,
            subHeading: "Luca noticed a messy reading shelf. He quietly started arranging the books without being asked."
        },
        {
            img: S2,
            subHeading: "Olivia saw a friend spill their water bottle. Instead of saying something, she looked away."
        },
        {
            img: S3,
            subHeading: "Ben grabbed the glue from Mia and said, ‘You’re doing it wrong. Let me do it instead,’ then started gluing pieces of the poster they were making for the class project."
        },
        {
            img: S4,
            subHeading: "Charlie saw his team struggling with their group project but didn’t offer to help. He just watched."
        },
        {
            img: S5,
            subHeading: "Emma told Jack, ‘Let me finish it for you so you don’t get in trouble,’ and started colouring his page."
        }
    ]


    const handleNext = () => {
        setCurrentObjIndex(currentObjIndex + 1)
    }

    const getGlow = (color) => {
        if (light !== color) return "";
        let shadowColor = "";
        if (color === "red") shadowColor = "shadow-[0_0_30px_5px_rgba(248,113,113,0.8)]";
        if (color === "yellow") shadowColor = "shadow-[0_0_30px_5px_rgba(250,204,21,0.8)]";
        if (color === "green") shadowColor = "shadow-[0_0_30px_5px_rgba(74,222,128,0.8)]";
        return `${shadowColor} animate-pulse`;
    };

    return (
        <div>
            <div className="h-screen w-screen lightsMainCon bg-gray-100">

                <div className="w-full flex justify-between mb-8 text-white text-lg font-medium">
                    <div className="w-1/3 bg-green-500 p-2 text-left">
                        <span className="font-semibold">Green Light</span> – This means the character is taking initiative.
                    </div>
                    <div className="w-1/3 bg-yellow-400 p-2 text-left text-black">
                        <span className="font-semibold">Yellow Light</span> – This light shows that the character sees a problem or someone who needs help, but they aren’t doing anything about it.
                    </div>
                    <div className="w-1/3 bg-red-500 p-2 text-left">
                        <span className="font-semibold">Red Light</span> – This light means the character is trying to control everything and not listening to others' ideas.
                    </div>
                </div>

                <div className='flex '>
                    <div className='w-1/2 secContainer shadow mr-12'>
                        <h1 className='text-[20px] font-semibold mb-4'>Scenario {currentObjIndex + 1}</h1>
                        <div className='secContainer1'>
                            <h1 className="subHeading  w-[400px] text-left mr-6 text-[20px]">{obj[currentObjIndex]["subHeading"]}</h1>
                            <Image alt="currentObj" className='currentObj w-[250px]' src={obj[currentObjIndex]["img"]} />
                        </div>
                    </div>

                    <div className="w-1/2 div2 flex flex-col justify-center items-center gap-6 p-6 rounded-2xl shadow-lg bg-white">
                        <div
                            className={`w-38 h-38 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${getGlow(
                                light
                            )}`}
                            style={{
                                backgroundColor:
                                    light === "red"
                                        ? "#fa2c37"
                                        : light === "yellow"
                                            ? "#fdc800"
                                            : light === "green"
                                                ? "#06d706"
                                                : "#e5e7eb",
                                transition: "background-color 0.3s ease"
                            }}
                        >
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => setLight("red")}
                                className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow"
                            >
                                Red Light
                            </button>
                            <button
                                onClick={() => setLight("yellow")}
                                className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full shadow"
                            >
                                Yellow Light
                            </button>
                            <button
                                onClick={() => setLight("green")}
                                className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow"
                            >
                                Green Light
                            </button>
                        </div>
                    </div>
                </div>
                {currentObjIndex < obj.length - 1 &&
                    <button
                        className="mt-8 bg-blue-500 text-white px-8 py-2 cursor-pointer rounded hover:bg-green-900 shadow"
                        onClick={handleNext}>Next</button>
                }

            </div>
        </div>
    );
}
