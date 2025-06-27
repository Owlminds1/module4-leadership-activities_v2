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
            heading: "Spilled Snacks",
            subHeading: "Liam sees his classmate Maya crying because she spilled her food on the floor."
        },
        {
            img: S2,
            heading: "Mum Needs Help ",
            subHeading: "Ella notices her mum carrying heavy grocery bags and looking tired."
        },
        {
            img: S3,
            heading: "Game-Time Trouble",
            subHeading: "Noah is playing a game with his two sisters, Ava and Zoe. Ava and Zoe keep arguing about the rules, and no one is having fun anymore."
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
