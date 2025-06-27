'use client'

import './style.css'
import { jsPDF } from 'jspdf';

import Image from 'next/image'
import S0 from '../assets/s0.jpeg';
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';
import S4 from '../assets/s4.jpeg';

import { useState } from 'react';

export default function Slider() {
    const [currentObj, setCurrentObj] = useState(0)
    const [pdfData, setPdfData] = useState({})

    const obj = [
        S0,
        S1,
        S2,
        S3,
        S4
    ]

    const objHeading = [
        "I want to learn how to make pancakes on my own for breakfast",
        "The Forgotten Lines",
        "The Group Project Challenge",
        "The Team’s Tiebreaker Trouble",
        "Think of a time when something wasn’t going your way—maybe at school, in a hobby, or with friends"
    ]

    const objSubHeading = [
        "",
        "Liam has been selected to give a small speech during the school assembly. He practised a lot but forgets his lines during rehearsal. He gets nervous and says, 'Maybe I’m not meant to speak in front of others.'",
        'Ella is working on a group project with two friends, but they keep getting distracted and are not helpful. Ella feels overwhelmed. “Why should I even bother trying,” she says, “if no one else seems to bother?”',
        "Team Blaze, a group of students including Maya, Aiden, and Zoe, is competing in a trivia quiz competition. They’ve made it to the final round but start arguing about answers. Maya says, 'Forget it, we’re just going to lose now!'",
        ""
    ]

    const solutionObj = [
        [
            "Be able to make pancakes without help by the weekend.",
            "Each time I try, I’ll note what went well and what I need to fix (like flipping them better or getting the mix right).",
            "Ask an adult to show me the steps safely or help me the first time.",
            "Enjoy my pancakes—and add toppings once I perfect them!"
        ],
        [
            "What is Liam’s goal?",
            "How can Liam track his progress while practising?",
            "Who can help Liam feel more confident?",
            "What reward can Liam give himself after his speech?"            
        ],
        [
            "What goal can Ella set for her group?",
            "How can she track if her teammates are helping?",
            "Who can she talk to for help in solving this fairly?",
            "What’s a good reward when the group works together successfully?"            
        ],
        [
            "What goal can the team set together?",
            "How can they track their teamwork during the competition?",
            "Who can help the team get back on track?",
            "What’s a fun reward if the team works well together?"            
        ],
        [
            "What was your goal in that situation?",
            "How could you have tracked your progress?",
            "Who could you have talked to for help?",
            "What small reward could have kept you motivated?"
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
            return "S – Set a Goal"
        }
        else if (index == 1) {
            return "T – Track Progress"
        }
        else if (index == 2) {
            return "A – Ask for Help"
        }
        else if (index == 3) {
            return "R – Reward Yourself"
        }
    }


    const handleInput = (e, question) => {
        const val = e.target.value
        setPdfData((prevPdfData) => ({ ...prevPdfData, [question]: val }));

    }



    const generatePdf = () => {
        const doc = new jsPDF();
        let y = 20;
        const pageHeight = doc.internal.pageSize.height;
        const margin = 10;
        const lineSpacing = 7;

        doc.setFontSize(18);
        doc.text('Shine Bright Like A STAR', 105, y, { align: 'center' });

        y += 15;
        doc.setFontSize(12);

        Object.entries(pdfData).forEach(([question, answer]) => {
            const questionLines = doc.splitTextToSize(question, 180);
            const answerLines = doc.splitTextToSize(`Answer: ${answer}`, 180);
            const totalLines = questionLines.length + answerLines.length;

            if (y + totalLines * lineSpacing > pageHeight - margin) {
                doc.addPage();
                y = margin;
            }

            doc.text(questionLines, margin, y);
            y += questionLines.length * lineSpacing;

            doc.text(answerLines, margin, y);
            y += answerLines.length * lineSpacing + 5; // Add a bit of space before next block
        });

        doc.save('Shine Bright Like A STAR.pdf');
    };


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
                        <div key={index} className='bg-white text-black text-[19px] px-2 py-1 rounded-lg mb-5 solutionPara'>
                            <div key={index} className="solutionPara2">
                                <p className='sp1'>{getSolutionHead(index)}</p>
                                <p className='sp2'>{value}</p>
                            </div>
                            {currentObj === obj.length - 1 &&
                                <input
                                    onChange={(e) => { handleInput(e, value) }}
                                    placeholder={value}
                                    className='w-[100%] mt-6 border-2 border-gray-300 p-2 rounded' type='text' />
                            }
                        </div>
                    ))}

                    {currentSolutionObj.length < solutionObj[currentObj].length &&
                        <center>
                            <button onClick={updateSolution} className="mt-4 p-2 bg-yellow-500 text-black rounded-lg">
                                Next
                            </button>
                        </center>
                    }

                    {currentObj === obj.length - 1 && currentSolutionObj.length == solutionObj[currentObj].length &&
                        <button onClick={generatePdf}>Generate pdf</button>
                    }


                </div>
            </div>

            {currentObj < obj.length - 1 && currentSolutionObj.length == solutionObj[currentObj].length &&
                <button onClick={handleNext}>Next</button>
            }
        </div>
    );
}
