'use client'

import './style.css'
import Slider_Activity_4_2 from '../../Activity-4-2/components/Slider'


import { useState } from 'react';

export default function Slider() {
    const [newObj, setNewObj] = useState([])
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const [showSlider_Activity_4_2_btn, setSlider_Activity_4_2_btn] = useState(false)
    const [showSlider_Activity_4_2, setShowSlider_Activity_4_2] = useState(false)

    const obj = [
        'I see why you think that making new friends is important because it helps us meet new people and learn different things',
        'But I feel differently because old friends already know and understand us, and strong friendships take time to build.',
        'I guess we both agree that friendships, whether old or new, are important to appreciate and support each other!'
    ]
    const scenario = "Making New Friends vs. Sticking with Old Friends";

    const statement = "Making new friends is more important than sticking with old friends!"

    const handleNext = () => {
        setNewObj((prevNewObj) => [...prevNewObj, obj[currentObjIndex]])
        setCurrentObjIndex(prevCurrentObjIndex => prevCurrentObjIndex + 1)
        if (currentObjIndex === obj.length - 1) {
            setSlider_Activity_4_2_btn(true)
        }
    }
    const handleShowSlider_Activity_4_2 = () => {
        setSlider_Activity_4_2_btn(false)
        setShowSlider_Activity_4_2(true)
    }

    const f1 = "Acknowledge the other person’s opinion"
    const f2 = "Share your own perspective without judging"
    const f3 = "Find Common Ground"

    return (
        <>
            {!showSlider_Activity_4_2 &&
                <div className='slidesMainContainer'>
                    <h1 className='scenario'>Scenario : {scenario}</h1>
                    <h1 className='statement'>Statement : {statement}</h1>
                    {newObj.map((obj, index) => (
                        <div key={index} className="listCon">
                            {index === 0 ? (
                                <h2>{f1}</h2>
                            ) : index === 1 ? (
                                <h2>{f2}</h2>
                            ) : index === 2 ? (
                                <h2>{f3}</h2>
                            ) : null}
                            <h1>{obj}</h1>
                        </div>
                    ))}
                    {newObj.length != obj.length &&
                        <button onClick={handleNext}>Next</button>
                    }
                </div>
            }

            {showSlider_Activity_4_2_btn &&
                <button 
                className="bg-gradient-to-r from-[#28a745] to-[#218838] text-white py-3 px-4 text-[18px] font-bold mt-10 border-none rounded-lg cursor-pointer w-fit transition-all duration-300 ease-in-out shadow-md hover:from-[#218838] hover:to-[#1e7e34] hover:text-[19px] hover:scale-105 hover:shadow-lg"
                    onClick={handleShowSlider_Activity_4_2}>
                    Practice this framework
                </button>
            }

            {showSlider_Activity_4_2 && <Slider_Activity_4_2 />}
        </>
    );
}
