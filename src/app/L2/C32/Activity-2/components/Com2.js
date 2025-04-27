'use client'

import './style.css'


import { useState } from 'react';

export default function Com2() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const obj = [
        {
            heading: "What advice do you have for kids who feel like giving up?",
        },
        {
            heading: "Can you explain what the STAR method means?",
        },
        {
            heading: "Why is it important to set a goal before you start something?",
        },
        {
            heading: "How can tracking your progress make you feel better?",
        },
        {
            heading: "What would you say to someone who feels embarrassed to ask for help?",
        },
        {
            heading: "What’s a fun way you could reward yourself after working hard",
        },
        {
            news: "In Sunnytown, the kids are preparing for a big bike race. Some of them feel like giving up because it’s hard to practice every day.",
            heading: " As our Motivation Expert, how would you use the STAR method to help them stay strong and excited?",
        }

    ]


    const handleNext = () => {
        setCurrentObjIndex(currentObjIndex + 1)
    }


    return (
        <div className='slidesMainContainer'>

            {obj[currentObjIndex]["news"] && 
                <h1 className='heading mb-6'>
                    Breaking news:
                    <br />
                    {obj[currentObjIndex]["news"]}
                </h1>
            }
            <h1 className="heading">
                <i>Question</i>  : {obj[currentObjIndex]["heading"]}
            </h1>


            {currentObjIndex < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
