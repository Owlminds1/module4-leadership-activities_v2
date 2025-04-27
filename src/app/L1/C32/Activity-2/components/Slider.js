'use client'

import './style.css'


import { useState } from 'react';

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
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
            subHeading: []
        },
        {
            heading: "Yelling at a Friend",
            subHeading: []
        },
        {
            heading: "Asking Before Taking Something",
            subHeading: []
        },
        {
            heading: "Lying to a Parent or Teacher",
            subHeading: []
        }

    ]


    const handleNext = () => {
        setCurrentObjIndex(currentObjIndex + 1)
    }


    return (
        <div className='slidesMainContainer'>
            {currentObjIndex === 0 &&
                <h1 className="heading"><i>Example:</i></h1>
            }

            <h1 className="heading">
                <i>Decision</i>  : {obj[currentObjIndex]["heading"]}
            </h1>

            {obj[currentObjIndex]["subHeading"].length > 0 &&
                <h1 className="subHeading">Consequence:</h1>
            }

            <ul className='list-disc list-inside'>
                {obj[currentObjIndex]["subHeading"].map((text, index) => (
                    <li key={index}>{text}</li>
                ))}
            </ul>

            {currentObjIndex < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
