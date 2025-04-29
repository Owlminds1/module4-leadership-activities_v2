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
            objSubHeading: "The class teacher assigns a group poster project about environmental awareness. There are four students in your group: Emma, Liam, Alex, and Mia. Emma and Liam are working hard, but Alex and Mia are barely contributing. Mia is playing on her tablet, and Alex keeps saying, 'They’ve got it covered. I don’t need to do much.' As the deadline approaches, Emma and Liam feel frustrated because they are doing all the work.",
            questions: []
        },
        {
            img: S2,
            objHeading: "The Tug-of-War Game",
            objSubHeading: "At a sports event, the teacher organized a tug-of-war game with two teams of six players each. During initial practice with just two players, everyone pulled with full strength. However, once all six players joined, some—like Ryan and Zoe—reduced their effort, assuming the stronger teammates would cover for them. In the end, the team lost because not everyone contributed their maximum effort.",
            questions: [
                "How could the team have inspired every member to give their best and contribute equally?",
                "What specific advice would you give to Ryan and Zoe?",
                "How could the stronger players have guided Ryan and Zoe to stay focused and pull harder?"
            ]
        },
        {
            img: S3,
            objHeading: "The Relay Race Challenge",
            objSubHeading: "During sports day, teams are running a relay race. Everyone is excited and running fast, but Liam, the third runner, doesn't put much effort in and slows down, assuming Sophia, the last runner, will make up for it. But because of this, the team falls further behind and loses the race.",
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
                "What problem is happening at the bake sale?",
                "Why do you think some have stopped helping?"
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
