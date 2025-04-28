'use client';

import './styleCom2.css'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import Image from 'next/image'
import Modal from "@/components/ModalInit";

import { useState } from 'react';

export default function SlideShow() {
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(false);
    const [revealedQuestions, setRevealedQuestions] = useState(0); // number of questions revealed

    const objects = [
        {
            img: S1,
            text: 'Your team is losing by one point, and there are only two minutes left. Everyone is feeling nervous, and the game is intense. As the leader, how should you respond?',
            supportiveApproch: "We’ve got this! Let’s stay focused, work as a team, and make the best plays. No matter what happens, we give our best effort and support each other!",
            bossyLeaderApproch: "You're all playing terribly! Just give me the ball—I’ll do it myself! If we lose, it’s your fault, not mine!",
            seen: "Leading a Sports Team in a Close Game",
            questions: [
                "Which leadership approach would help the team perform better?",
                "How can a supportive leader make sure tasks get done without being too controlling?",
                "Can a bossy leader ever be effective? Why or why not?"
            ]
        },
        {
            img: S2,
            text: 'Your family is on a camping trip, but things aren’t going as planned. The tent is difficult to set up, some people are tired, and others are frustrated.',
            supportiveApproch: "Let’s take it step by step! You hold the poles while I set up the stakes. We’ll get this done together and then enjoy a campfire.",
            bossyLeaderApproch: "You're doing it all wrong! Just let me handle it because no one else knows what they’re doing!",
            seen: "Managing a Family Camping Trip",
            questions: [
                "Which leadership style would make the camping trip more enjoyable and why?",
                "What challenges might a supportive leader face, and how can they overcome them?",
                "If you were on this trip, which leadership style would you use, and how would you handle the situation?"
            ]
        }
    ];

    const handleSelectedOption = () => {
        setSelectedOption(true);
        setRevealedQuestions(0); // start questions from zero
    }

    const handleNextQuestion = () => {
        const currentObject = objects[currentObjIndex];

        if (revealedQuestions < currentObject.questions.length - 1) {
            setRevealedQuestions(revealedQuestions + 1);
        } else {
            // Finished revealing all questions for this object
            if (currentObjIndex < objects.length - 1) {
                setCurrentObjIndex(currentObjIndex + 1);
                setSelectedOption(false); // reset to show options again
                setRevealedQuestions(0);
            } else {
                setModalTitle('The activity is completed.');
                setModalContent('Great job completing all the scenarios!');
                setOpenModal(true);
            }
        }
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    const currentObject = objects[currentObjIndex];

    return (
        <div className="slideShowContainer">
            <div className="flex items-center">

                <div className="w-1/2 p-4 leftContainer">
                    <p className='objText0'>Scenario {currentObjIndex + 1} : {currentObject.seen}</p>
                    <p className="objText">{currentObject.text}</p>
                    <Image className="objImg" src={currentObject.img} alt="Scenario Image" />
                </div>

                <div className="w-1/2 p-4 rightContainer">
                    {!selectedOption ? (
                        <div>
                            <div className='d1'>
                                <p className='selectionBtnHeading'>Supportive Leader Approach:</p>
                                <button className="selectionBtn" onClick={handleSelectedOption}>
                                    {currentObject.supportiveApproch}
                                </button>
                            </div>
                            <br />
                            <div className='d2'>
                                <p className='selectionBtnHeading'>Bossy Leader Approach:</p>
                                <button className="selectionBtn" onClick={handleSelectedOption}>
                                    {currentObject.bossyLeaderApproch}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className='text-left'>
                            {currentObject.questions.slice(0, revealedQuestions + 1).map((question, index) => (
                                <p key={index} className='text-[22px] mb-8'>
                                    Q{index + 1}.{question}
                                </p>
                            ))}
                            <button className="text-[20px] mt-4 px-6 py-2 w-[100%] cursor-pointer bg-blue-500 hover:bg-blue-700 text-white rounded-lg" onClick={handleNextQuestion}>
                                {revealedQuestions < currentObject.questions.length - 1 ? 'Next' : 'Continue'}
                            </button>
                        </div>
                    )}
                </div>

            </div>

            <Modal
                title={modalTitle}
                content={modalContent}
                open={openModal}
                closeModal={closeModal}
            />
        </div>
    );
}
