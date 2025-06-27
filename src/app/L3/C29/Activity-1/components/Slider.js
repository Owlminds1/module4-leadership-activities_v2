'use client'

import './style.css'


import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';
import S4 from '../assets/s4.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const obj = [
        {
            img: S1,
            heading:"The Group Project Starter",
            subHeading:"Everyone was talking at the end of art class. Liam grabbed a broom and shouted, “Ugh! You guys are so messy! Clean up NOW or I’ll tell the teacher!”"
        },
        {
            img: S2,
            heading:"The Art Clean-Up Captain",
            subHeading:"Art class was ending, and everyone was talking. Lia grabbed a broom and shouted, `Ugh! You guys are so messy! Clean up NOW or I’ll tell the teacher!`"
        },
        {
            img: S3,
            heading:"The Classroom Door Debate",
            subHeading:"It was noisy in the hallway. Zoe got up, closed the door, and said, 'It’s hard to concentrate with that noise. You all should’ve closed it earlier. Don’t let it happen again.'"
        },
        {
            img: S4,
            heading:"The Assembly Mix-Up",
            subHeading:"The class was supposed to head to the school assembly, but the teacher got delayed. Everyone looked around, unsure if they should line up or stay seated. Noah noticed the time and saw other classes walking by—but he just stayed in his seat, waiting for someone else to speak up."
        }
    ]


    const handleNext = () => {
        setCurrentObjIndex(currentObjIndex + 1)
    }


    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{obj[currentObjIndex]["heading"]}</h1>
            <h1 className="subHeading">{obj[currentObjIndex]["subHeading"]}</h1>
            <Image alt="currentObj" className='currentObj' src={obj[currentObjIndex]["img"]} />
            {currentObjIndex < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
