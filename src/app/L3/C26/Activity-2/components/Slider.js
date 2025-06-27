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

    const [showProceedBtn, setShowProceedBtn] = useState(false)
    const [tempQ, setTempQ] = useState([])
    const [tempQCounter, setTempQCounter] = useState(0)

    const obj = [
        {
            img: S1,
            objHeading: "The Group Poster Project",
            objSubHeading: "The class teacher assigns a group poster project about environmental awareness to: Emma, Liam, Alex, and Mia. Emma and Liam work hard, but Alex and Mia barely contribute. Mia plays on her ipad, and Alex says, 'They’ve got it covered. I don’t need to do much.' As the due date approaches, Emma and Liam feel frustrated because they are doing all the work.",
            questions: []
        },
        {
            img: S2,
            objHeading: "The Tug-of-War Game",
            objSubHeading: "The teacher organized a tug-of-war with two sports teams of six players each. During practice with fewer players, everyone pulled with full strength. However, when the whole team joined, some—like Ryan and Zoe—compromised on their effort, assuming the stronger teammates would cover. Finally, the team lost because not everyone put in their maximum effort.",
            questions: [
                "How could the team have inspired every member to give their best and contribute equally?",
                "What specific advice would you give to Ryan and Zoe?",
                "How could the stronger players have guided Ryan and Zoe to stay focused and pull harder?"
            ]
        },
        {
            img: S3,
            objHeading: "The Relay Race Challenge",
            objSubHeading: "For the sports day relay race, teams are excited to participate. But Liam, the third runner, slows down assuming that Sophia, the last runner, will make up for it. But this causes the team to lose the race.",
            questions: [
                "If you were on Liam’s team, what would you say to him to encourage him?",
                "What could Liam’s team have done before the race to make sure everyone ran at full effort?"
            ]
        },
        {
            img: S4,
            objHeading: "The School Fundraiser Bake Sale",
            objSubHeading: "A group of students organized a bake sale fundraiser. While participation was strong initially, several students lost focus, assuming others will keep things running. Instead of assisting customers, they began chatting amongst themselves. The stall grew messy, and customers were left confused about prices because too few students were paying attention.",
            questions: [
                "Why do you think some were not attentive?",
                "How did this affect the fundraiser?",
                "If you were in charge of the bake sale, what would you do to keep all involved?",
                "How can teams make sure that work is shared fairly?"
            ]
        },
    ]


    const handleNext = () => {
        setTempQCounter(0);
        setTempQ([])
        const new_currentObjIndex = currentObjIndex + 1
        setCurrentObjIndex(new_currentObjIndex)
        if (obj[new_currentObjIndex]["questions"].length > 0) {
            setShowProceedBtn(true)
        }

    }

    const handleProceed = () => {
        if (obj[currentObjIndex]["questions"][tempQCounter]) {
            setTempQ((prevTempQ) => [
                ...prevTempQ,
                obj[currentObjIndex]["questions"][tempQCounter]
            ]);
            const newCounter = tempQCounter + 1;

            setTempQCounter(newCounter);

            if (!obj[currentObjIndex]["questions"][newCounter]) {
                setShowProceedBtn(false)
            }
        }
        // console.log(tempQCounter)
        // console.log(tempQ)
    }

    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{obj[currentObjIndex]["objHeading"]}</h1>
            <div className='divContainer'>
                <h1 className='subHeading'>{obj[currentObjIndex]["objSubHeading"]}</h1>
                <Image alt="currentObj" className='currentObj' src={obj[currentObjIndex]["img"]} />
            </div>

            {tempQ.length > 0 &&
                <h1 className='text-[23px] font-semibold mb-3 mt-4' >Understanding the Impact</h1>
            }

            {tempQ.map((question, index) => (
                <div className='questions' key={index}>
                    <p>Q{index + 1} : {question}</p>
                </div>
            ))}


            {showProceedBtn && obj[currentObjIndex]["questions"].length > 0 &&
                <button onClick={handleProceed}>Proceed</button>
            }

            <br />

            {!showProceedBtn && currentObjIndex < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }

            <br />
            <br />

        </div>
    );
}
