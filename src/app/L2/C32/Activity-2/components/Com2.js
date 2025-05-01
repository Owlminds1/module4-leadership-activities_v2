'use client'

import './style.css'


import { useState } from 'react';

export default function Com2() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const obj = [
        {
            heading: "Ron gives up easily when tasks get difficult. What advice would you give him?",
        },
        {
            heading: "Why is it important to set a goal before you start something?",
        },
        {
            heading: "What are the benefits of tracking progress?",
        },
        {
            heading: "Zoee is embarrassed to ask for help. What would you like to say to her?",
        },
        {
            heading: "Suggest a few fun ways to reward oneself.",
        },
        {
            // news: "In Sunnytown, the kids are preparing for a big bike race. Some of them feel like giving up because it’s hard to practice every day.",
            heading: "In Sunnytown, the kids are preparing for a big bike race. Some of them feel like giving up because it’s hard to practice every day. Please suggest how to keep them excited with the STAR method.",
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
