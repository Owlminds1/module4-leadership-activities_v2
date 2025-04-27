'use client'

import './style.css'


import Image from 'next/image'
import C1 from '../assets/c1.jpeg';
import C2 from '../assets/c2.jpeg';
import C3 from '../assets/c3.jpeg';
import C4 from '../assets/c4.jpeg';


import { useState } from 'react';

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const obj = [
        {
            heading: "The Class Newspaper",
            subHeading: "Emma’s group is in charge of making the school’s weekly class newspaper.",
            subHeading2: [
                {
                    img: C1,
                    text: "Emma is the editor,"
                },
                {
                    img: C2,
                    text: "Jay is writing the sports section,"
                },
                {
                    img: C3,
                    text: "Mia is doing the artwork,"
                },
                {
                    img: C4,
                    text: "Leo is supposed to write the jokes column."
                },

            ],
            subHeading3: "But every time Emma checks in, Leo says, “I’m still thinking of something funny,” and never actually writes anything. The deadline is tomorrow."
        }
    ]


    const handleNext = () => {
        setCurrentObjIndex(currentObjIndex + 1)
    }


    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{obj[currentObjIndex]["heading"]}</h1>
            <h1 className="subHeading">{obj[currentObjIndex]["subHeading"]}</h1>
            {/* <Image alt="currentObj" className='currentObj' src={obj[currentObjIndex]["img"]} /> */}
            <br />

            <ul className='subHeading'>
                {obj[currentObjIndex]["subHeading2"].map((t, index) => (
                    <div key={index} className='flex items-center mb-10'>
                        <Image 
                            className='w-[100px] mr-4 rounded-[50px]'
                            src={t.img} alt='img' />
                        <li>{t.text}</li>
                    </div>
                ))}
            </ul>
            <br />

            <h1 className="subHeading">{obj[currentObjIndex]["subHeading3"]}</h1>
            {currentObjIndex < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
