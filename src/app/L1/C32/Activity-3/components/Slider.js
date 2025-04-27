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
            heading: "Toy Trouble at School",
            subHeading: "Lucas takes Mia’s toy without asking."
        },
        {
            img: S2,
            heading: "Not Sharing Colors",
            subHeading: "Jackson refuses to share colors with his sibling Ella."
        },
        {
            img: S3,
            heading: "Toothpaste Trouble",
            subHeading: "Sophie squeezed out too much toothpaste and left the cap off, and her mom sees it."
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
