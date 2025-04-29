'use client'

import './style.css'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';

import Map from '../assets/map.jpeg';
import TalkieTalkie from '../assets/walkieTalkie.jpeg';
import Flashlight from '../assets/flashlight.jpeg';
import Food from '../assets/food.jpeg';
import FirstAid from '../assets/firstAid.jpeg';
import WarmCloths from '../assets/warmCloths.jpeg';


import Modal from "@/components/ModalInit";

import Image from 'next/image'

import { useState } from 'react';

export default function Com1() {
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const [moveToNextQ, setMoveToNextQ] = useState(false)

    const [currentObjIndex, setCurrentObjIndex] = useState(0)

    const objects = [
        {
            img: S1,
            heading: "The Balloon is Losing Hot Air Rapidly!",
            subHeading: "There’s a leak in the balloon, and it’s sinking quickly! You must drop something to stay airborne longer.",
            ans: 6
        },
        {
            img: S2,
            heading: "The Balloon is Drifting Over the Ocean!",
            subHeading: "Strong winds have pushed your balloon over the sea. You need to drop weight to avoid sinking into the water.",
            ans: 5
        },
        {
            img: S3,
            heading: "A Wild Animal is Blocking Your Landing Spot!",
            subHeading: "As you have already located where you will land, now you have to focus on staying in the air longer, and once the wild animals go away, you can land.",
            ans: 1
        }
    ]

    const handleOptionSelection = (selectionOption) => {
        let answer = isAnswerCorrect(selectionOption);
        if (answer) {
            setMoveToNextQ(true)
            setModalTitle('Yay! The answers are correct!')            
        } else {
            setMoveToNextQ(false)
            setModalTitle('Oops! The answer is incorrect');
        }
        setOpenModal(true)
    }

    const isAnswerCorrect = (selectionOption) => {
        if (objects[currentObjIndex]["ans"] === selectionOption) {
            return true;
        }
        return false;
    }

    const closeModal = () => {
        setOpenModal(false)
        if(moveToNextQ){
            setCurrentObjIndex(currentObjIndex + 1)
        }
    }

    return (
        <div className="slideShowContainer">
            {currentObjIndex < objects.length ? (
                <div className="flex items-center">
                    
                    <div className="w-1/2 p-4 leftContainer">
                        <p className='objText0'>Scenario {currentObjIndex + 1} : {objects[currentObjIndex]['heading']}</p>
                        <p className="objText">{objects[currentObjIndex]['subHeading']}</p>
                        <Image className="objImg" src={objects[currentObjIndex]['img']} alt="objImg" />
                    </div>

                    <div className="w-1/2 p-4 rightContainer text-left">
                        <h1 className='text-center optionsHeading'>Which item would you drop?</h1>
                        
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center optionContainer" onClick={() => { handleOptionSelection(1) }}>
                                <Image src={Map} alt="map" className="w-full optionImg" />
                                <p className="optionTxt mt-2">Map</p>
                            </div>
                            <div className="text-center optionContainer" onClick={() => { handleOptionSelection(2) }}>
                                <Image src={TalkieTalkie} alt="TalkieTalkie" className="w-full optionImg" />
                                <p className="optionTxt mt-2">Walkie Talkie</p>
                            </div>
                            <div className="text-center optionContainer" onClick={() => { handleOptionSelection(3) }}>
                                <Image src={Flashlight} alt="Flashlight" className="w-full optionImg" />
                                <p className="optionTxt mt-2">Flashlight</p>
                            </div>
                        </div>


                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="text-center optionContainer" onClick={() => { handleOptionSelection(4) }}>
                                <Image src={Food} alt="Food" className="w-full optionImg" />
                                <p className="optionTxt mt-2">Food</p>
                            </div>
                            <div className="text-center optionContainer" onClick={() => { handleOptionSelection(5) }}>
                                <Image src={FirstAid} alt="FirstAid" className="w-full optionImg" />
                                <p className="optionTxt mt-2">First Aid Kit</p>
                            </div>
                            <div className="text-center optionContainer" onClick={() => { handleOptionSelection(6) }}>
                                <Image src={WarmCloths} alt="FirstAid" className="w-full optionImg" />
                                <p className="optionTxt mt-2">Warm Cloths</p>
                            </div>
                        </div>
                    </div>


                </div>
            ) : (
                <div className='activityEndContainer'>
                    <h1 className='activityEndHeading'>The Activity is completed</h1>
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
