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
        "Ria’s group is working on a class project, but a team member has left.",
        "Ben's group is designing a poster for a class project, but a student is too bossy to let others contribute. Some group members feel left out.",
        "Chloe's class is preparing for a group performance, but some students are nervous and afraid they will forget their lines. They don’t want to go on stage.",
        "Nathan was at the beach with family when they noticed a group of younger kids playing too close to deep water. There were no adults nearby to watch."
    ]

    // (Is this leadership, or just kindness? Can small actions make someone a leader?)

    const handleNext = () => {
        setCurrentObj(currentObj + 1)
    }


    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{objHeading[currentObj]}</h1>
            <h1 className='mb-4 text-[22px] font-semibold'>What should a leader do?</h1>
            <Image alt="currentObj" className='currentObj' src={obj[currentObj]} />
            {currentObj < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
