'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from "@/components/ModalInit";

import I1 from '../assets/p2/i1.jpeg';
import I2 from '../assets/p2/i2.jpeg';
import I3 from '../assets/p2/i3.jpeg';
import I4 from '../assets/p2/i4.jpeg';
import I5 from '../assets/p2/i5.jpeg';
import I6 from '../assets/p2/i6.jpeg';
import I7 from '../assets/p2/i7.jpeg';
import I8 from '../assets/p2/i8.jpeg';
import I9 from '../assets/p2/i9.jpeg';
import I10 from '../assets/p2/i10.jpeg';
import I11 from '../assets/p2/i11.jpeg';
import I12 from '../assets/p2/i12.jpeg';
import I13 from '../assets/p2/i13.jpeg';
import I14 from '../assets/p2/i14.jpeg';


export default function P2(props) {
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState('')
    const [openModal, setOpenModal] = useState(false);

    const images = [
        {
            img: I1,
            name: "Forks"
        },
        {
            img: I2,
            name: "Napkin"
        },
        {
            img: I3,
            name: "Toy dinosaur"
        },
        {
            img: I4,
            name: "Plates"
        },
        {
            img: I5,
            name: "Sock"
        },
        {
            img: I6,
            name: "Glass of water"
        },
        {
            img: I7,
            name: "School book"
        },
        {
            img: I8,
            name: "Spoons"
        },
        {
            img: I9,
            name: "Remote control"
        },
        {
            img: I10,
            name: "Hairbrush"
        },
        {
            img: I11,
            name: "Puzzle pieces"
        },
        {
            img: I12,
            name: "Salt shaker"
        },
        {
            img: I13,
            name: "Teddy bear"
        },
        {
            img: I14,
            name: "Crayons"
        }
    ];


    const hideableIndexes = [2, 4, 6, 8, 9, 10, 12, 13];

    const [answerIndexs, setAnswerIndexs] = useState([])
    const [hiddenImages, setHiddenImages] = useState(Array(images.length).fill(false));


    // useEffect(() => {
    //     if (answerIndexs.length === hideableIndexes.length) {
    //         setModalTitle("Good Job!")
    //         setOpenModal(true)
    //         // alert("Good Job!")
    //         // props.handleNext()
    //     }
    // }, [answerIndexs]);

    const handleClick = (index) => {
        if (hideableIndexes.includes(index)) {
            setHiddenImages((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
            });
            setAnswerIndexs((preAnswerIndex) => [...preAnswerIndex, index])
        }
    };


    const handleCheckAnswers = () => {
        if (answerIndexs.length === hideableIndexes.length) {
            setModalTitle("Good Job!")
            setOpenModal(true)
        } else {
            setModalTitle("Some items are pending to be sorted.")
            setOpenModal(true)
        }
    }


    const closeModal = () => {
        setOpenModal(false)
        if(answerIndexs.length === hideableIndexes.length){
            props.handleNext()
        }
    }

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 p-4">
                {images.map((imgData, index) => (
                    <div
                        key={index}
                        className={`transition-opacity duration-300 border border-gray-300 rounded-[5px] p-[5px]
                            ${hiddenImages[index] ? 'invisible' : 'visible'}`}
                        onClick={() => handleClick(index)}
                    >
                        <Image
                            src={imgData.img}
                            alt={`img-${index}`}
                            className="cursor-pointer hover:scale-105 transition-transform duration-300 w-full h-auto cursor-pointer rounded shadow"
                            width={300}
                            height={200}
                        />
                        <p className='mt-2 text-[17px]'>{imgData.name}</p>
                    </div>
                ))}


            </div>
            <button
                onClick={handleCheckAnswers}
                className="mt-[50px] bg-green-600 text-white px-[25px] py-[6px] text-[18px] rounded-[10px] border-0 cursor-pointer hover:text-[19px]"
            >Next</button>


            <Modal
                title={modalTitle}
                content={modalContent}
                open={openModal}
                closeModal={closeModal}
            />

        </div>
    );
}
