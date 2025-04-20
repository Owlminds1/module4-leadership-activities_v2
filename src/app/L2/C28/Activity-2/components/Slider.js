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
        "If I want to get better at running, I’d: ",
        "Luca and the LEGO Spaceship",
        "The Science Project",
        "The Class Skit Challenge"
    ]

    const objSubHeading = [
        "",
        "Luca wants to build a LEGO spaceship all by himself. He starts strong, but the pieces keep falling off. After a few tries, he sighs and says, ‘I’m just not good at this!’",
        "Sara and Maya are working together on a volcano science project. They get excited at first but then disagree on how to build it. The lava doesn’t flow properly in their first try, and both start feeling frustrated.",
        "A group of classmates is preparing a skit for the school assembly. At first, everyone is excited, but then they start forgetting their lines or not showing up to practice. The group feels like giving up.",
        ""
    ]

    const solutionObj = [
        [
            "Run 1 km without stopping",
            "Mark each day I practice",
            "Get tips from a coach",
            "Enjoy a smoothie after each run!"
        ],
        [
            "What is Luca’s goal?",
            "How can Luca track his progress?",
            "Who can help or cheer him on?",
            "What reward can Luca give himself?"            
        ],
        [
            "What is their goal?",
            "How can they track their progress?",
            "Who can help or cheer them on?",
            "What reward can they give themselves?"            
        ],
        [
            "What is the team’s goal?",
            "How can they track their progress?",
            "Who can help or cheer them on?",
            "What reward can the team give themselves?"            
        ],
        [
            "What is one thing I want to get better at?",
            "How will I track my progress?",
            "Who can help or cheer me on?",
            "What will I reward myself for?"
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
                                Update Solution
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
