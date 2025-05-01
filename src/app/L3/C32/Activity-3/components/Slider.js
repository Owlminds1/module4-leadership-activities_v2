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
            subHeading: "Ava is getting ready for an event, but her parents keep giving her extra chores."
        },
        {
            img: S2,
            heading: "Discussion Disruptions",
            subHeading: "Ethan is trying to speak during a group discussion, but his friend keeps cutting him off."
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
            {/* <h1 className="heading">{obj[currentObjIndex]["heading"]}</h1> */}
            <h1 className="heading">{obj[currentObjIndex]["subHeading"]}</h1>
            <Image alt="currentObj" className='currentObj' src={obj[currentObjIndex]["img"]} />
            {currentObjIndex < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
