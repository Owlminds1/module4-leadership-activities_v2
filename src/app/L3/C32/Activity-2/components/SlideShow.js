'use client'

import './style.css'
import { useState, useEffect } from 'react';
import Modal from "@/components/ModalInit";

export default function SlideShow() {
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const [nextQ, setNextQ] = useState(false);

    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [score, setScore] = useState(0);

    const objects = [
        {
            "text": "What is social loafing?",
            "options": [
                "Working harder when others are around",
                "Letting others do most of the work in a group",
                "Taking a break after working hard",
                "Being the leader in a team"
            ],
            "correctAnswer": 1
        },
        {
            "text": "Why do people sometimes do social loaf in groups?",
            "options": [
                "They enjoy helping others",
                "They don’t know the answers",
                "They think someone else will do the work",
                "They are scared of being wrong",
            ],
            "correctAnswer": 2
        },
        {
            "text": "Which of these is a way to stop social loafing?",
            "options": [
                "Ignore the problem",
                "Make team goals clear and give everyone a role",
                "Let the teacher do the work",
                "Only work with friends",
            ],
            "correctAnswer": 1
        },
        {
            "text": "What could happen if someone keeps social loafing?",
            "options": [
                "The group gets stronger",
                "Everyone works harder",
                "It helps the group finish early",
                "The team may feel frustrated and less motivated",
            ],
            "correctAnswer": 3
        },
        {
            "text": "What’s a good sign that your team is working well together?",
            "options": [
                "Only one person does the work",
                "Everyone is talking at the same time",
                "Each person is doing their own part",
                "No one wants to speak",
            ],
            "correctAnswer": 2
        }
    ]

    const [quizCompleted, setQuizCompleted] = useState(false)
    useEffect(() => {
        // console.log(timeLeft, currentObjIndex, objects.length)
        if (timeLeft < 0) {
            if (currentObjIndex === (objects.length - 1)) {
                nextQuestion()
            } else {
                setModalTitle('You missed answering! Move to the next question.');
                setNextQ(true)
                setOpenModal(true)
            }
        }

        if (!openModal) {
            const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    const handleSelectedOption = (selectedOption) => {
        if (selectedOption === objects[currentObjIndex].correctAnswer) {
            setModalTitle('Yay! Your answer is correct!')
            setScore(prevScore => prevScore + 1);
        } else {
            setModalTitle('Incorrect Answer');
            setModalContent(`Correct answer is : ${objects[currentObjIndex].options[objects[currentObjIndex].correctAnswer]}`)
        }
        setNextQ(true)
        setOpenModal(true)
    };


    const nextQuestion = () => {
        if (currentObjIndex < objects.length - 1) {
            setCurrentObjIndex(prev => prev + 1);
            setTimeLeft(30);
        } else {
            setQuizCompleted(true)
        }
    };

    const closeModal = () => {
        setOpenModal(false)
        setModalContent('')
        if (nextQ) {
            nextQuestion();
            setNextQ(false)
        }
    }

    return (
        <div className="slideShowContainer p-4 space-y-4">
            {quizCompleted ? (
                <h1 className="text-[30px] font-semibold text-center">
                    Quiz completed! Your final score is {score}/{objects.length}
                </h1>
            ) : (
                <div>
                    <p style={openModal ? { visibility: 'hidden' } : {}}
                        className="text-right text-[30px] mt-4 mb-4 text-red-500 font-bold"
                    >
                        Time left: {timeLeft}s
                    </p>
                    <p className="text-lg font-semibold text-center mb-4 bg-gray-100 p-4 rounded-lg">
                        Question {currentObjIndex + 1}: {objects[currentObjIndex].text}
                    </p>
                    <center>
                        {objects[currentObjIndex].options.map((option, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => handleSelectedOption(index)}
                                    className="px-4 cursor-pointer py-2 m-2 bg-blue-500 text-white rounded-lg shadow-md">
                                    {option}
                                </button>
                                <br />
                            </div>

                        ))}
                    </center>
                </div>
            )}


            <Modal
                title={modalTitle}
                content={modalContent}
                open={openModal}
                closeModal={closeModal}
            />
        </div>
    );
}
