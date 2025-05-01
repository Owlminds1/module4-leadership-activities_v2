'use client'

import './style.css'

import Image from 'next/image';
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';
import S4 from '../assets/s4.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const [decisionMade, setDecisionMade] = useState('')

    const obj = [
        {
            heading: "If I decide to help clean up the living room, consequence could be",
            subHeading: [
                "Family member smiles and says thank you",
                "We have more space to move & play",
                "I feel proud!",
            ]
        },
        {
            heading: "Telling the Truth",
            subHeading: [],
            img: S1
        },
        {
            heading: "Yelling at a Friend",
            subHeading: [],
            img: S2
        },
        {
            heading: "Asking Before Taking Something",
            subHeading: [],
            img: S3
        },
        {
            heading: "Lying to a Parent or Teacher",
            subHeading: [],
            img: S4
        }

    ]


    const handleNext = () => {
        setDecisionMade('')
        setCurrentObjIndex(currentObjIndex + 1)
    }

    const handleDecisionMade = (val) => {
        setDecisionMade(val)
    }

    return (
        <div className='slidesMainContainer'>

            {currentObjIndex === 0 &&
                <h1 className="heading text-left"><i>Example:</i></h1>
            }

            <h1 className={`heading ${currentObjIndex === 0 ? 'text-left' : ''}`}>
                <i>Decision</i>: {obj[currentObjIndex]["heading"]}
            </h1>

            {obj[currentObjIndex]["img"] &&
                <Image src={obj[currentObjIndex]["img"]}
                    alt='img'
                    className='mb-6 rounded-[10px] shadow-xl w-[350px]' />
            }

            {obj[currentObjIndex]["subHeading"].length > 0 &&
                <h1 className="subHeading">Consequence:</h1>
            }


            {currentObjIndex > 0 && decisionMade === '' &&
                <div>
                    <button onClick={(e) => (handleDecisionMade('Good Decision'))}>Good Decision</button>
                    <button onClick={(e) => (handleDecisionMade('Bad Decision'))} className='ml-6'>Bad Decision</button>
                </div>
            }

            {currentObjIndex > 0 && decisionMade !== '' &&
                <p className='text-[22px]'><b>Q:</b> What will be the consequences of this?</p>
            }



            <ul className='list-disc list-inside'>
                {obj[currentObjIndex]["subHeading"].map((text, index) => (
                    <li key={index}>{text}</li>
                ))}
            </ul>

            {(currentObjIndex === 0 || decisionMade !== '') && currentObjIndex < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
