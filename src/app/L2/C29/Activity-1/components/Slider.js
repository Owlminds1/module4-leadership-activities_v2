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
            heading: "Homework Helper",
            subHeading: "Aiden noticed his friend Zoe didn’t understand the homework. He said, `Hey Zoe, want me to help you with that? I just finished mine.`",
        },
        {
            img: S2,
            heading: "TV Time Trouble",
            subHeading: "Zara grabbed the remote from her younger brother and said, `I’m watching my show now. No arguments!`",
        },
        {
            img: S3,
            heading: "Table Talk",
            subHeading: "The library was getting noisy, and Jayden turned to his classmates and said, `Shhh! Everyone be quiet or we’ll get in trouble again!`",
        },
        {
            img: S4,
            heading: "The Seat Saver",
            subHeading: "Aria got to lunch early and saved five seats for her friends by spreading her things across the table. When other students tried to sit down, she said, `Sorry, these are taken.`",
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
