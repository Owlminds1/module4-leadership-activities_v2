"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import Mars from '../assets/mars.jpg';
import MarsP from '../assets/marsP4.jpeg';
import Image from 'next/image';

export default function MarsTrip() {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const [solutionIndex, setSolutionIndex] = useState(-1);

    const solutionElements = [
        { letter: "S", meaning: "Set a Goal" },
        { letter: "T", meaning: "Track Progress" },
        { letter: "A", meaning: "Ask for Help" },
        { letter: "R", meaning: "Reward Yourself" },
    ];

    const handleInputChange = (e, question) => {
        setAnswers({ ...answers, [question]: e.target.value });
    };

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const handleUpdateSolution = () => {
        if (solutionIndex < solutionElements.length - 1) {
            setSolutionIndex(solutionIndex + 1);
        } else {
            setStep(step + 1);
        }
    };

    const handleSubmit = () => {
        const doc = new jsPDF();
        let y = 20;
        const maxWidth = 180; // Define maxWidth here so it can be used throughout the function
        const pageHeight = doc.internal.pageSize.height; // Get the page height

        // Function to check and add a new page if needed
        const checkPageHeight = () => {
            if (y > pageHeight - 30) {  // Leave some margin space at the bottom
                doc.addPage();  // Create a new page
                y = 20;  // Reset y position for the new page
            }
        };

        // Add main heading
        doc.setFontSize(22);
        doc.text("Trip to Mars", 10, y);
        y += 15;
        checkPageHeight();  // Check if a new page is needed

        // Print first 3 questions with their answers
        const orderedQuestions = [
            "What things will you carry with you?",
            "How will you prepare for the journey?",
            "Name of the one person you would love to take along with you on the trip?"
        ];

        orderedQuestions.forEach((question) => {
            const answer = answers[question];
            if (answer) {
                doc.setFontSize(13);
                doc.text(question, 10, y);
                y += 15;
                checkPageHeight();

                // Wrap the answer text
                doc.setFontSize(13);
                const margin = 10;
                const wrappedText = doc.splitTextToSize(answer, maxWidth);  // Wrap text
                doc.text(wrappedText, margin, y);
                y += wrappedText.length * 13;  // Adjust y based on the number of lines in wrapped text
                checkPageHeight();
            }
        });

        // Step 4 Letter to Friend
        const friendName = answers["Name of the one person you would love to take along with you on the trip?"] || "your friend";
        doc.setFontSize(13);
        doc.text(`Letter to ${friendName}`, 10, y);
        y += 20;
        checkPageHeight();

        // Add the starting statement answer (but no question)
        const startStatement = answers["Give a starting statement for the letter"];
        if (startStatement) {
            doc.setFontSize(13);
            const wrappedStartStatement = doc.splitTextToSize(startStatement, maxWidth);
            doc.text(wrappedStartStatement, 10, y);
            y += wrappedStartStatement.length * 13;
            checkPageHeight();
        }

        // STAR section — exactly as you asked
        const starOrder = [
            { label: "Set a Goal:", question: "What will be the GOAL for the trip?" },
            { label: "Track Progress:", question: "How will we TRACK PROGRESS for the preparation of the trip?" },
            { label: "Ask for Help:", question: "Would you like to HELP me by joining?" },
            { label: "Reward:", question: "How will we REWARD ourselves after the success of this mission?" }
        ];

        starOrder.forEach(({ label, question }) => {
            const answer = answers[question];
            if (answer) {
                doc.setFontSize(13);
                doc.text(label, 10, y);
                y += 20;
                checkPageHeight();

                // Wrap the answer text
                doc.setFontSize(13);
                const wrappedText = doc.splitTextToSize(answer, maxWidth);
                doc.text(wrappedText, 10, y);
                y += wrappedText.length * 13;
                checkPageHeight();
            }
        });

        // Add the ending statement answer (but no question)
        const endStatement = answers["Give an ending statement for the letter"];
        if (endStatement) {
            doc.setFontSize(13);
            const wrappedEndStatement = doc.splitTextToSize(endStatement, maxWidth);
            doc.text(wrappedEndStatement, 10, y);
            y += wrappedEndStatement.length * 13;
            checkPageHeight();
        }

        // Save the PDF
        doc.save("mars-trip-letter.pdf");
    }


    const handleSubmitV1 = () => {
        const doc = new jsPDF();
        let y = 20;
        const maxWidth = 180; // Define maxWidth here so it can be used throughout the function

        // Add main heading
        doc.setFontSize(22);
        doc.text("Trip to Mars", 10, y);
        y += 15;

        // Print first 3 questions with their answers
        const orderedQuestions = [
            "What things will you carry with you?",
            "How will you prepare for the journey?",
            "Name of the one person you would love to take along with you on the trip?"
        ];

        orderedQuestions.forEach((question) => {
            const answer = answers[question];
            if (answer) {
                doc.setFontSize(13);
                doc.text(question, 10, y);
                y += 15;

                // Wrap the answer text
                doc.setFontSize(13);
                const margin = 10;
                const wrappedText = doc.splitTextToSize(answer, maxWidth);  // Wrap text
                doc.text(wrappedText, margin, y);
                y += wrappedText.length * 15; // Adjust y based on the number of lines in wrapped text
            }
        });

        // Step 4 Letter to Friend
        const friendName = answers["Name of the one person you would love to take along with you on the trip?"] || "your friend";
        doc.setFontSize(13);
        doc.text(`Letter to ${friendName}`, 10, y);
        y += 20;

        // Add the starting statement answer (but no question)
        const startStatement = answers["Give a starting statement for the letter"];
        if (startStatement) {
            doc.setFontSize(13);
            const wrappedStartStatement = doc.splitTextToSize(startStatement, maxWidth);
            doc.text(wrappedStartStatement, 10, y);
            y += wrappedStartStatement.length * 13;
        }

        // STAR section — exactly as you asked
        const starOrder = [
            { label: "Set a Goal:", question: "What will be the GOAL for the trip?" },
            { label: "Track Progress:", question: "How will we TRACK PROGRESS for the preparation of the trip?" },
            { label: "Ask for Help:", question: "Would you like to HELP me by joining?" },
            { label: "Reward:", question: "How will we REWARD ourselves after the success of this mission?" }
        ];

        starOrder.forEach(({ label, question }) => {
            const answer = answers[question];
            if (answer) {
                doc.setFontSize(13);
                doc.text(label, 10, y);
                y += 20;

                // Wrap the answer text
                doc.setFontSize(13);
                const wrappedText = doc.splitTextToSize(answer, maxWidth);
                doc.text(wrappedText, 10, y);
                y += wrappedText.length * 13;
            }
        });

        // Add the ending statement answer (but no question)
        const endStatement = answers["Give an ending statement for the letter"];
        if (endStatement) {
            doc.setFontSize(13);
            const wrappedEndStatement = doc.splitTextToSize(endStatement, maxWidth);
            doc.text(wrappedEndStatement, 10, y);
            y += wrappedEndStatement.length * 13;
        }

        // Save the PDF
        doc.save("mars-trip-letter.pdf");
    }


    let subHeading = "Let's prepare for the trip";
    let questions = [];

    if (step === 1) {
        subHeading = "Let's prepare for the trip";
        questions = [
            { question: "What things will you carry with you?", input: true },
            { question: "How will you prepare for the journey?", input: true },
            { question: "Name of the one person you would love to take along with you on the trip?", input: true },
            { question: "And why would you take that person?", input: true },
        ];
    } else if (step === 2) {
        subHeading = "";
        questions = [
            { question: "Do you remember any tips we learned in our previous classes about how to motivate others?", input: false },
        ];
    } else if (step === 3) {
        subHeading = "STAR Technique";
        questions = [
            { question: "How many elements does STAR have? And which are they?", input: false },
        ];
    } else if (step === 4) {
        subHeading = `Writing a letter to ${answers["Name of the one person you would love to take along with you on the trip?"] || "your friend"}`;
        questions = [
            { question: "Give a starting statement for the letter", input: true },
            { question: "What will be the GOAL for the trip?", input: true },
            { question: "How will we TRACK PROGRESS for the preparation of the trip?", input: true },
            { question: "Would you like to HELP me by joining?", input: true },
            { question: "How will we REWARD ourselves after the success of this mission?", input: true },
            { question: "Give an ending statement for the letter", input: true },
        ];
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gradient-to-b from-[#fdf2e9] to-[#ffffff] text-[#5a2d0c] font-sans">
            <div 
            className={`${step > 1 ? 'max-w-2xl ' : ''} bg-white p-8 rounded-2xl shadow-2xl w-full`}>
                <div className="flex items-center justify-center mb-6">
                    {(step === 1 || step === 4) && (
                        <Image src={Mars} alt="Mars" className="h-12 w-12 mr-2" />
                    )}
                    <h2 className="text-2xl font-bold tracking-wide">{subHeading}</h2>
                </div>

                <div
                    className={`${step > 1 ? 'flex-col gap-6' : ''}flex`}>
                    {step === 1 &&
                        <div className="w-1/2 flex justify-center">
                            <Image 
                                className="w-[90%] rounded-[20px]"
                                src={MarsP} alt="MarsP" />
                        </div>
                    }
                    <div
                        className={`${step === 1 ? 'w-1/2 flex-col gap-6' : ''} `}>
                        {questions.map((q, idx) => (
                            <div key={idx}>
                                <p className="font-semibold mb-2 text-[18px]">{q.question}</p>
                                {q.input && (
                                    <input
                                        type="text"
                                        value={answers[q.question] || ""}
                                        onChange={(e) => handleInputChange(e, q.question)}
                                        className="w-full p-3 bg-white border border-[#ffe0b2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
                                        placeholder="Type your answer..."
                                    />
                                )}
                            <p style={{marginBottom:'15px', visibility:'hidden'}}>s</p>
                            </div>
                        ))}

                        {step === 3 && (
                            <div className="flex flex-col gap-4">
                                {solutionElements.slice(0, solutionIndex + 1).map((el, idx) => (
                                    <div key={idx} className="bg-[#fff3e0] p-4 rounded-xl flex items-center justify-between shadow-md">
                                        <span className="text-xl font-bold text-[#ff7b00]">{el.letter}</span>
                                        <span className="text-[#5a2d0c]">{el.meaning}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-8 flex justify-center">
                            {step === 3 ? (
                                <button
                                    onClick={handleUpdateSolution}
                                    className="cursor-pointer px-6 py-3 bg-[#ff7b00] hover:bg-[#ff5722] text-white rounded-xl transition"
                                >
                                    {solutionIndex === solutionElements.length - 1 ? "Next" : "Update Solution"}
                                </button>
                            ) : step === 4 ? (
                                <button
                                    onClick={handleSubmit}
                                    className="cursor-pointer px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition"
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    onClick={handleNext}
                                    className="cursor-pointer px-6 py-3 bg-[#ff7b00] hover:bg-[#ff5722] text-white rounded-xl transition"
                                >
                                    Next
                                </button>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
}
