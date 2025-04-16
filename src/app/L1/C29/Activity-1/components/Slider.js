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
            heading: "The Loud Line Leader",
            subHeading: "No one was lining up after recess. Daniel stood up, called everyone’s names loudly and said, 'Line up right now! I said so!'"
        },
        {
            img: S2,
            heading: "The Quiet Helper",
            subHeading: "Ella noticed her friend couldn’t find their pencil. She went to the supply box, got an extra pencil, and handed it to them without saying a word."
        },
        {
            img: S3,
            heading: "The Messy Mix-Up",
            subHeading: "Noah saw the classroom was a bit messy after craft time. He clapped his hands and said loudly, 'Everyone! Clean up now! This place is a mess!' Then he started cleaning up himself."
        },
        {
            img: S4,
            heading: "The Rushing Rescue",
            subHeading:"Emma noticed her classmate Jack was colouring slowly and might not finish on time. She leaned over and said, 'Here, give it to me—I’ll do it for you so you don’t get in trouble!' Then she started colouring part of his work."
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
