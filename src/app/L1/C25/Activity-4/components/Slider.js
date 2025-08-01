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
        'At the end of the day, the classroom gets messy but all students are ready to go home instead of tidying the space.',
        'Ira is about to go on stage for a class performance but suddenly feels too nervous to perform.',
        "During recess, Zoho and his friends are trying to carry a big, heavy box of sports equipment, but it's too hard for them to lift.",
        'Ava and Sam both want to use the same swing, and they start arguing.'
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
