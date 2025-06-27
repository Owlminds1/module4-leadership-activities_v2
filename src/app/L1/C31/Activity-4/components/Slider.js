'use client'

import './style.css'


import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';
import S4 from '../assets/s4.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObj, setCurrentObj] = useState(0)
    const obj = [
        S1,
        S2,
        S3,
        S4
    ]

    const objHeading = [
        'The Spilled Juice Accident',
        'The Bedroom Cleanup Conflict',
        'The TV Show Disagreement',
        'The Last Cookie Dispute'
    ]

    const objSubHeading = [
        'At snack time, Noah bumped Emma’s juice. It spilled! Emma yelled, "You did that!" Noah said, "No, it was an accident!"',
        'During snack time, Noah spilled Emma’s juice. She yelled, "You did that!" Noah said, "No, it was a mistake!"',
        'Mia and Lucas share a room. Mum asked both to tidy up. Mia did her share, but Lucas kept playing. Mia got upset and said, "You never help! I have to do everything.',
        'Zoe and Jake were watching TV. Jake wanted sports. Zoe wanted cartoons. Jake grabbed the remote and said, "I had it first!"  Zoe said, "That’s not fair!"',
        'Liam and his older sister, Sophie, spotted a cookie left on the plate. As Liam reached for it, Sophie quickly grabbed it and said, "I got it first! It’s mine!" Liam frowned and said, "That’s not fair! I wanted it too!"'
    ]

    const solutionObj = [
        [
            "Emma takes a deep breath before reacting.",
            "Instead of blaming, she uses an 'I' statement: 'I feel frustrated because my juice spilled.'",
            "They think of ways to fix the situation—maybe clean up together or ask for help.",
            "Emma decided  to grab some napkins and clean it up.",
            "Emma realizes it was an accident and says, It’s okay, let’s just clean it up!"
        ],
        [

            "Mia takes a deep breath and counts to three before reacting.",
            "Instead of blaming Lucas, she uses an 'I' statement: 'I feel upset because I need help cleaning our room.'",
            "They think of ways to solve the problem—maybe making it a fun game, setting a timer, or asking an adult for help.",
            "Mia says, 'Let’s race! Let’s see who can pick up five toys the fastest!' Lucas agrees and starts cleaning.",
            "Mia sees that Lucas is trying and says, 'Thanks for helping! Now we can play together before dinner!'"
        ],
        [
            "Zoe takes a deep breath.",
            "Instead of yelling, she says: I feel upset because I really wanted to watch cartoons.",
            "They think of a way to share the TV: Maybe they can take turns or watch together.",
            "Zoe suggests, How about we watch my show first, then your show?",
            "Jake agrees, and they find a fair way to share.",
        ],
        [
            "Liam takes a deep breath before reacting.",
            "Instead of arguing, Liam says: I feel sad because I really wanted a cookie too.",
            "They think of solutions: they can split the cookie or ask if more cookies are available",
            "Liam suggests, How about we break it in half and share?",
            "Sophie agrees, and they both enjoy the cookie happily.            ",
        ]
    ]


    const [currentSolutionObj, setCurrentSolutionObj] = useState([])


    const handleNext = () => {
        setCurrentSolutionObj([])
        setCurrentObj(currentObj + 1)
    }

    const updateSolution = () => {
        const len = currentSolutionObj.length;
        if (len < solutionObj[currentObj].length) {
            setCurrentSolutionObj([...currentSolutionObj, solutionObj[currentObj][len]]);
        }
    };

    const getSolutionHead = (index) => {
        if (index == 0) {
            return "STOP"
        }
        else if (index == 1) {
            return "SAY"
        }
        else if (index == 2) {
            return "THINK"
        }
        else if (index == 3) {
            return "CHOOSE"
        }
        else if (index == 4) {
            return "RESPECT"
        }

    }

    return (
        <div className='slidesMainContainer'>
            <div className="flex gap-4">
                <div className="w-1/2 bg-blue-500 p-4 text-white leftCon">
                    <h1 className='headingOg'>{objHeading[currentObj]}</h1>
                    <h1 className="heading">{objSubHeading[currentObj]}</h1>
                    <Image alt="currentObj" className='currentObj' src={obj[currentObj]} />

                </div>
                <div className="w-1/2 bg-green-500 p-4 text-white rightCon">
                    {currentSolutionObj.map((value, index) => (
                        <div key={index} className="bg-white text-black text-[19px] px-2 py-1 rounded-lg mb-5 solutionPara">
                            <p className='sp1'>{getSolutionHead(index)}</p>
                            <p className='sp2'>{value}</p>
                        </div>
                    ))}

                    <center>
                        <button onClick={updateSolution} className="mt-4 p-2 bg-yellow-500 text-black rounded-lg">
                            Update Solution
                        </button>
                    </center>
                </div>
            </div>

            {currentObj < obj.length - 1 &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
