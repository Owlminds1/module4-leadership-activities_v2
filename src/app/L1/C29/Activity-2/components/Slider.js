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
            heading: "Dinner Table Helpers",
            subHeading:"Dinner is done. The plates and cups are still on the table. The TV is on but the table is still messy."
        },
        {
            img: S2,
            heading: "At the Grocery Store",
            subHeading:"You’re shopping with your parents. They’re looking for something on the shelf, and the trolley is in the way of another shopper."
        },
        {
            img: S3,
            heading: "Package at the Door",
            subHeading:"You notice a parcel parked at your front door."
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
