'use client'

import './style.css'


import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';
import S4 from '../assets/s4.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObj, setCurrentObj] = useState(0)
    const obj = [
        S1,
        S2,
        S3,
        S4
    ]

    const objHeading = [
        "Amelia's group is working on a project, but two team members keep arguing about whose idea is better. The project deadline is tomorrow, and nothing is getting done.",
        "New student joins Joe's class and sits along during lunch.",
        "Shaun's team is playing an important match, but the referee makes a call that seems unfair. As a result, his teammates get frustrated and lose focus.",
        "Zarabi and her friends take a turn on a hiking trip, thus getting lost. Some people become unsure, while others argue about which way to go."
    ]

    // (Is this leadership, or just kindness? Can small actions make someone a leader?)

    const handleNext = () => {
        setCurrentObj(currentObj + 1)
    }


    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{objHeading[currentObj]}</h1>
            <h1 className='mb-4 text-[22px] font-semibold'>What would a good leader do?</h1>
            <Image alt="currentObj" className='currentObj' src={obj[currentObj]} />
            {currentObj < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
