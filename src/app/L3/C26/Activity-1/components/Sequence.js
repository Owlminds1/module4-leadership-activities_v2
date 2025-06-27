"use client";
import './style.css'

import Image from 'next/image'
import Modal from "@/components/ModalInit";

import S1 from '../assets/scenarios/scenario_1/s1.jpeg';
import S1_C1 from '../assets/scenarios/scenario_1/c1.jpeg';
import S1_C2 from '../assets/scenarios/scenario_1/c2.jpeg';
import S1_C3 from '../assets/scenarios/scenario_1/c3.jpeg';
import S1_C4 from '../assets/scenarios/scenario_1/c4.jpeg';
import S1_C5 from '../assets/scenarios/scenario_1/c5.jpeg';


import S2 from '../assets/scenarios/scenario_2/s1.jpeg';
import S2_C1 from '../assets/scenarios/scenario_2/c1.jpeg';
import S2_C2 from '../assets/scenarios/scenario_2/c2.jpeg';
import S2_C3 from '../assets/scenarios/scenario_2/c3.jpeg';
import S2_C4 from '../assets/scenarios/scenario_2/c4.jpeg';
import S2_C5 from '../assets/scenarios/scenario_2/c5.jpeg';


import S3 from '../assets/scenarios/scenario_3/s1.jpeg';
import S3_C1 from '../assets/scenarios/scenario_3/c1.jpeg';
import S3_C2 from '../assets/scenarios/scenario_3/c2.jpeg';
import S3_C3 from '../assets/scenarios/scenario_3/c3.jpeg';
import S3_C4 from '../assets/scenarios/scenario_3/c4.jpeg';
import S3_C5 from '../assets/scenarios/scenario_3/c5.jpeg';

import Filler from './Filler'


import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// S1 
// Task 1: Daniel 
// Task 2: Sophie 
// Task 3: Jack
// Task 4: Olivia 
// Task 5: Ethan

// S2
// Task 1 : Ben 
// Task 2 : Lucas 
// Task 3 : Emma 
// Task 4 : Noah 
// Task 5 : Zara


// S2
// Task 1 : Jack 
// Task 2 : Mai 
// Task 3 : Olivia 
// Task 4 : Liam 
// Task 5 : Sophie


export default function DragDropOptions(props) {
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const [nextQ, setNextQ] = useState(false);

    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [isSVisible, setIsSVisible] = useState(true)
    const obj = [
        {
            heading: 'School Trip Dilemma',
            img: S1,
            subHeading: "Fimona's class is going on a field trip. There’s only one bus with limited space, and not all supplies fit. A team of students have to figure out the best way to pack.",
            tasks: [
                'Move supplies.',
                'Prioritise essential supplies.',
                'Suggest better packing strategy.',
                'Think creatively to find alternative ways.',
                'Arranging items.',
            ],
            chars: [
                { id: 1, name: 'Ethan', img: S1_C1, skills: ['Neat organizer', 'Heavy lifter'] },
                { id: 2, name: 'Sophia', img: S1_C2, skills: ['Supply expert'] },
                { id: 3, name: 'Olivia', img: S1_C3, skills: ['Creative problem-solver', 'Has a great memory and remembers past trips for reference'] },
                { id: 4, name: 'Daniel', img: S1_C4, skills: ['Heavy lifter'] },
                { id: 5, name: 'Jack', img: S1_C5, skills: ['Has a great memory and remembers past trips for reference'] },
            ],
            ans: [
                [4], [2], [5], [3], [1]
            ]
        },
        {
            heading: 'The Rescue Mission',
            img: S2,
            subHeading: 'A group is stranded after a plane crashes on a remote island. They must survive and escape within 24 hours. Resources are limited so they have to use their skills wisely.',
            tasks: [
                'Build a strong shelter.',
                'Find a clean water source.',
                'Identify and prepare food for the team.',
                'Navigate the island and determine the best escape plan.',
                'Transport heavy materials like logs and supplies.'
            ],
            chars: [
                { id: 1, name: 'Lucas', img: S2_C1, skills: ['Great at swimming'] },
                { id: 2, name: 'Emma', img: S2_C2, skills: ['Knows how to cook and find food', 'Good at building'] },
                { id: 3, name: 'Ben', img: S2_C3, skills: ['Good at building'] },
                { id: 4, name: 'Zara', img: S2_C4, skills: ['Strong and can carry heavy items', 'Understands navigation and map reading'] },
                { id: 5, name: 'Noah', img: S2_C5, skills: ['Understands navigation and map reading'] },
            ],
            ans: [
                [3], [1], [2], [5], [4]
            ]
        },
        {
            heading: 'The Space Station Crisis',
            img: S3,
            subHeading: "A spaceship’s oxygen system is crashing, and the crew has only 30 minutes to fix before air goes out. Everyone must use their expertise to restore the system calmly.",
            tasks: [
                'Repair the broken oxygen system.',
                'Analyze the oxygen system to assist with repairs.',
                'Monitor the health of the crew to prevent oxygen-related problems.',
                'Manage spacecraft functions in case of emergency. ',
                'Communicate with mission control for expert guidance.'
            ],
            chars: [
                { id: 1, name: 'Jake', img: S3_C1, skills: ['Engineer'] },
                { id: 2, name: 'Mia', img: S3_C2, skills: ['Scientist'] },
                { id: 3, name: 'Oliver', img: S3_C3, skills: ['Doctor'] },
                { id: 4, name: 'Liam', img: S3_C4, skills: ['Pilot', 'Engineer'] },
                { id: 5, name: 'Sophie', img: S3_C5, skills: ['Communications expert', 'Scientist'] },
            ],
            ans: [
                [1], [2], [3], [4], [5]
            ]
        }
    ];

    const currentObj = obj[currentObjIndex];

    const [sections, setSections] = useState({});

    useEffect(() => {
        if (currentObjIndex < obj.length) {
            const newObj = obj[currentObjIndex];
            setSections({
                ...Object.fromEntries(newObj.tasks.map(task => [task, []])),
                characters: newObj.chars.map(char => ({ ...char, color: "bg-blue-500" }))
            });
        }
    }, [currentObjIndex]);


    const onDragEnd = (result) => {
        if (!result.destination) return;

        const sourceList = [...sections[result.source.droppableId]];
        const destinationList = [...sections[result.destination.droppableId]];

        const [movedItem] = sourceList.splice(result.source.index, 1);
        if (!destinationList.some(item => item.name === movedItem.name)) {
            destinationList.splice(result.destination.index, 0, movedItem);
        }

        setSections({
            ...sections,
            [result.source.droppableId]: sourceList,
            [result.destination.droppableId]: destinationList,
        });
    };

    const handleSubmit = () => {
        let rightAns = 0;
        currentObj.tasks.forEach((task, taskIndex) => {
            if (sections[task] && sections[task].length > 0) {
                if (currentObj["ans"][taskIndex].includes(sections[task][0]["id"])) {
                    rightAns++
                }
            }
        })
        if (rightAns == currentObj.tasks.length) {
            setModalTitle('Yay! The answer is correct')
            setNextQ(true)
        } else {
            setModalTitle('Oops! The answer is incorrect')
        }
        setOpenModal(true)
    }

    const handleStart = () => {
        setIsSVisible(false)
        props.setIsHeadingVisiable(false)
    }

    const closeModal = () => {
        setOpenModal(false)
        if (nextQ) {
            setCurrentObjIndex((prevIndex) => prevIndex + 1);
            setIsSVisible(true)
            props.setIsHeadingVisiable(true)
            setNextQ(false)
        }
    }

    return (
        <div>
            {currentObjIndex < obj.length ? (
                <div>
                    {isSVisible ?
                        (
                            <Filler
                                heading={currentObj.heading}
                                subHeading={currentObj.subHeading}
                                imagex={currentObj.img}
                                handleStart={handleStart}
                            />
                        ) : (
                            <div className="relative h-screen flex flex-col">
                                <DragDropContext onDragEnd={onDragEnd}>

                                    {/* Draggable Characters Section */}
                                    <div className="w-full flex justify-center p-2 bg-blue-500">
                                        <Droppable droppableId="characters">
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.droppableProps} className="w-full p-4 flex flex-wrap gap-2 justify-center">
                                                    <h2 className="w-full text-lg font-semibold text-center text-white mb-2">Know Your Team</h2>
                                                    {sections.characters && sections.characters.map((char, index) => (
                                                        <Draggable key={char.name} draggableId={char.name} index={index}>
                                                            {(provided) => (
                                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="bg-white text-black p-1 rounded-md cursor-pointer transition duration-300 hover:bg-green-500 hover:text-white charImgContainer">
                                                                    <p className='charName'>Name: {char.name}</p>
                                                                    <Image className='charImg' src={char.img} alt='char' />
                                                                    {char.skills.map((skill, idx) => (
                                                                        <p className='charSkill mt-2' key={idx}>Skill: {skill}</p>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>


                                    {/* Horizontal Task Containers */}
                                    <div className="absolute bottom-1 w-full flex justify-center gap-6 p-4">
                                        {currentObj.tasks.map((task) => (
                                            <Droppable key={task} droppableId={task}>
                                                {(provided) => (
                                                    <div ref={provided.innerRef} {...provided.droppableProps} className="min-h-[120px] p-4 bg-gray-100 rounded-lg shadow-lg text-center">
                                                        <h2 className="font-semibold">{task}</h2>
                                                        {sections[task]?.map((char, index) => (
                                                            <Draggable key={char.name} draggableId={char.name} index={index}>
                                                                {(provided) => (
                                                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={`${char.color} charImgContainer text-white p-1 mb-2 rounded-md cursor-pointer`}>
                                                                        <div className="relative group inline-block">
                                                                            <Image className='charImg' src={char.img} alt='char' />
                                                                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 text-white text-sm bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                                                Name: {char.name}
                                                                                <br />
                                                                                {char.skills.map((skill, idx) => (
                                                                                    <p className='charSkill' key={idx}>Skill: {skill}</p>
                                                                                ))}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        ))}
                                    </div>


                                    {sections.characters && sections.characters.length === 0 && (
                                        <div className='text-center mt-6'>
                                            <button
                                                onClick={handleSubmit}
                                                className='bg-green-600 w-[50%] cursor-pointer text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:bg-green-700 transition duration-300'
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    )}

                                </DragDropContext>
                            </div>
                        )}
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
