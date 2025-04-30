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
            heading: "The Whisper Chain",
            subHeading: "Sarah heard someone say something mean . She shared it with her best friend, just trying to get it off her mind. But by the end of the day, the story had been passed along, changed, and ended up causing real hurt to someone who hadn’t even been part of it."
        },
        {
            img: S2,
            heading: " Birthday Switch-Up",
            subHeading: "Arjun had been counting down the days to his birthday party at the arcade. But when the morning finally arrived, he saw that his little sister looked sad — the noise and flashing lights weren’t her favorite. Wanting her to enjoy the day too, he Arjun switched the plan and took everyone to the zoo. His sister’s bright smile made it worth it, but deep down, Arjun couldn’t shake his own disappointment."
        },
        {
            img: S3,
            heading: "The Missing Sock Blame",
            subHeading: "Sam was in a panic before his football match — his favorite socks were missing!  He blamed his sister and even got their mum involved. But later, while digging through his sports bag, Sam found the socks — right where he had packed them and totally forgotten!"
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
