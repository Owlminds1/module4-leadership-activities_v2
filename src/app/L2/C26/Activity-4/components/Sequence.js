"use client";
import './style.css'

import Image from 'next/image'
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

import Filler from './Filler'
import Modal from "@/components/ModalInit";


import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";



export default function DragDropOptions(props) {
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const [moveToNextQ, setMoveToNextQ] = useState(false)

    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [isSVisible, setIsSVisible] = useState(true)

    /*
    Answer The Class Science Fair Project: 
        Task 1: Emma 
        Task 2: Sophie 
        Task 3: Leo
        Task 4: Noah OR Lucas 
        Task 5: Noah OR Lucas
    
    Answer Set Planning a School Field Trip: 
        Task 1 : Jack 
        Task 2 : Lily 
        Task 3 : James
        Task 4 : Olivia 
        Task 5 : Ryan
*/

    const obj = [
        {
            heading: 'The Class Science Fair Project',
            img: S1,
            subHeading: 'The school science fair is coming up, and Ms.Harris has assigned a group project to five students. They have to create a working volcano model that erupts! But there’s a lot to do—research, building, making a poster, and presenting it. If they don’t plan well, they might not finish in time.',
            tasks: [
                'Research the science behind the project.',
                'Build the project model.',
                'Make a poster with key information.',
                'Present the project during the fair.',
                'Answer questions from the judges.'
            ],
            chars: [
                { id: 1, name: 'Emma', img: S1_C1, skills: ['Research'] },
                { id: 2, name: 'Leo', img: S1_C2, skills: ['Research', 'Making posters'] },
                { id: 3, name: 'Sophie', img: S1_C3, skills: ['Building models'] },
                { id: 4, name: 'Noah', img: S1_C4, skills: ['Building models', 'Speaking'] },
                { id: 5, name: 'Lucas', img: S1_C5, skills: ['Research', 'Building models', 'Speaking'] },
            ],
            ans: [
                [1], [3], [2], [4, 5], [5, 4]
            ]
        },
        {
            heading: 'Planning a School Field Trip',
            img: S2,
            subHeading: "Maya's class is planning a field trip to a nature park! Every student has to take responsibility for one task —scheduling, packing supplies, and choosing activities. Teamwork is key to a smooth and exciting trip!",
            tasks: [
                'Creating the schedule ',
                'Choosing outdoor activities',
                'Getting permission slips signed ',
                'Packing snacks and supplies ',
                'Making a reminder poster'
            ],
            chars: [
                { id: 1, name: 'Jack', img: S2_C1, skills: ['Good at organizing schedules and planning'] },
                { id: 2, name: 'Lily', img: S2_C2, skills: ['Knows a lot about nature and outdoor activities'] },
                { id: 3, name: 'James', img: S2_C3, skills: ['Good at talking to people and getting permission', 'Good at organizing schedules and planning'] },
                { id: 4, name: 'Olivia', img: S2_C4, skills: ['Great at packing and making checklists'] },
                { id: 5, name: 'Ryan', img: S2_C5, skills: ['Creative and good at making posters and reminders', 'Knows a lot about nature and outdoor activities'] },
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
            setMoveToNextQ(true)
        } else {
            setMoveToNextQ(false)
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
        if (moveToNextQ) {
            setCurrentObjIndex((prevIndex) => prevIndex + 1);
            setIsSVisible(true)
            props.setIsHeadingVisiable(true)
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
                                    {/* Draggable Characters Section at Top */}
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
                                                                        <p className='charSkill' key={idx}>Skill: {skill}</p>
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

                                    {/* Horizontal Task Containers at Bottom */}
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

                                    {/* Submit Button if no characters left */}
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
