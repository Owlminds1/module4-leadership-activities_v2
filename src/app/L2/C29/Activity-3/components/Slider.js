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
            heading: "Dinner Time Drama",
            subHeading: "On the dining table, Liam looked at his mum and said sharply, `Mum! I said I want pasta for dinner! Make it now!`"
        },
        {
            img: S2,
            heading: "Project Power",
            subHeading: "During a group project at school, Sophie turns to her classmates to say, 'Emma, you do the writing. Noah, don’t do anything, else you will mess up the project."
        },
        {
            img: S3,
            heading: "Play Trouble",
            subHeading: "While playing at home, Ava looked at her brother Jake and said firmly, `Jake, if you want to play, just do as I say!`"
        },
        {
            img: S4,
            heading: "Lunch Line Helper",
            subHeading: "In the school cafeteria at lunchtime, Arjun saw the crowd and said to his classmates, Let’s make one straight line, please. I’ll help guide everyone so it’s fair!"
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
