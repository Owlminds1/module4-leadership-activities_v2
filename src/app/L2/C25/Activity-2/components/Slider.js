'use client'

import './style.css'


import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s1.jpeg';
import S4 from '../assets/s1.jpeg';
import S5 from '../assets/s1.jpeg';
import S6 from '../assets/s1.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObj, setCurrentObj] = useState(0)
    const obj = [
        "Empathy",
        "Teamwork",
        "Determination",
        "Responsibility",
        "Confidence"
    ]

    const objHeading = [
        'Empathy means understanding and caring about how others feel. A leader with empathy listens, supports, and helps others in need. They don’t ignore someone who is upset, they try to help!',
        'Teamwork means working together and making sure everyone gets a chance to help. Good leaders support their team and share responsibilities.',
        'Determination means never giving up, even when something is hard. A leader keeps trying and encourages others to do the same.',
        'Being responsible means keeping promises, making good choices, and setting a good example for others.',
        'Confidence means believing in yourself and your ideas. A confident leader speaks up, tries new things, and encourages others to do the same.',
    ]

    const objImg = [
        S1,
        S2,
        S3,
        S4,
        S5,
        S6
    ]

    // (Is this leadership, or just kindness? Can small actions make someone a leader?)

    const handleNext = () => {
        setCurrentObj(currentObj + 1)
    }


    return (
        <div className='slidesMainContainer'>
            <p className='heading'>
                {obj[currentObj]}
            </p>
            <h1 className="mb-4 subHeading">{objHeading[currentObj]}</h1>
            <Image 
                className='rounded-[10px] w-[350px]'
                src={objImg[currentObj]} alt='img' />
            {currentObj < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
