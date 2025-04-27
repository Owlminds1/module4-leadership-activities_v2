'use client'

import './style.css'


import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const obj = [
        {
            img: S1,
            heading: "Getting Ready Stress",
            subHeading: "Ava is trying to get ready for an event, but her parents keep asking for extra tasks to be done."
        },
        {
            img: S2,
            heading: "Discussion Disruptions",
            subHeading: "Ethan’s friend keeps interrupting him during a group discussion, while ethan is trying to say something."
        },
        {
            img: S3,
            heading: "Sibling Borrowing Clothes",
            subHeading: "Chloe’s sibling keeps taking her clothes without asking."
        },
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
