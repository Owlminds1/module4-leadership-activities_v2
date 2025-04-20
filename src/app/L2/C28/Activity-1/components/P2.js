"use client";
import './p2Style.css'

import Image from 'next/image';
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

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

const initialOptions = [
    { id: "1", img: I4, text: "Crumpled worksheet", answer: "recycleTrash" },
    { id: "2", img: I1, text: "Apple core", answer: "compostTrash" },
    { id: "3", img: I3, text: "Plastic wrapper", answer: "generalTrash" },
    { id: "4", img: I5, text: "Empty juice box", answer: "recycleTrash" },
    { id: "5", img: I2, text: "Banana peel", answer: "compostTrash" },
    { id: "6", img: I7, text: "Empty water bottle", answer: "recycleTrash" },
    { id: "7", img: I6, text: "Used paper napkin", answer: "compostTrash" },
    { id: "8", img: I11, text: "Broken rubber band", answer: "generalTrash" },
    { id: "9", img: I8, text: "Pencil shavings", answer: "compostTrash" },
    { id: "10", img: I9, text: "Yogurt cup (plastic)", answer: "recycleTrash" },
    { id: "11", img: I10, text: "Tissue", answer: "compostTrash" },
];

export default function DragDropOptions(props) {
    const [sections, setSections] = useState({
        options: initialOptions.map(item => ({ ...item, color: "bg-yellow-500" })), // Default yellow
        recycleTrash: [],
        compostTrash: [],
        generalTrash: [],
    });

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const sourceList = [...sections[result.source.droppableId]];
        const destinationList = [...sections[result.destination.droppableId]];

        const [movedItem] = sourceList.splice(result.source.index, 1);

        // Prevent duplicates by ensuring the item isn't already in the destination list
        if (!destinationList.some(item => item.id === movedItem.id)) {
            destinationList.splice(result.destination.index, 0, movedItem);
        }

        setSections({
            ...sections,
            [result.source.droppableId]: sourceList,
            [result.destination.droppableId]: destinationList,
        });
    };

    const handleSubmit = () => {
        const updatedSections = { ...sections };
        let correctCount = 0;
        let totalCount = 0;

        ["recycleTrash", "compostTrash", "generalTrash"].forEach((sectionKey) => {
            updatedSections[sectionKey] = updatedSections[sectionKey].map(item => {
                const isCorrect = item.answer === sectionKey;
                if (isCorrect) correctCount++;
                totalCount++;
                return { ...item, color: isCorrect ? "bg-green-500" : "bg-red-500" };
            });
        });

        setSections(updatedSections);
        setTimeout(function () {
            if (correctCount === totalCount) {
                alert("Good job moving to next part!");
                props.handleNext();
            } else {
                alert("Oops! your answers are incorrect.");
            }
        }, 200)
    };

    return (
        <div className="relative h-screen p-5 flex flex-col sequenceConatinerX">
            <DragDropContext onDragEnd={onDragEnd}>

                {/* Top Sections */}
                <div className="grid grid-cols-3 gap-4 w-full">
                    {["recycleTrash", "compostTrash", "generalTrash"].map((sectionKey) => (
                        <Droppable key={sectionKey} droppableId={sectionKey}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="w-64 min-h-[500px] p-4 bg-gray-100 rounded-lg shadow-lg d2"
                                >
                                    <h2 className="text-lg font-semibold mb-2 text-center">
                                        <u>
                                            {sectionKey === "recycleTrash"
                                                ? "Recycle Trash"
                                                : sectionKey === "compostTrash"
                                                    ? "Compost Trash"
                                                    : "General Trash"}
                                        </u>
                                    </h2>
                                    {sections[sectionKey].map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={`${item.color} text-white p-2 mb-2 rounded-md cursor-pointer flex items-center`}
                                                >
                                                    <Image className='rounded-[10px] w-[50px] mr-2' src={item.img} alt="item" />
                                                    {item.text}
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

                {/* Submit Button (Only when options are empty) */}
                {sections.options.length === 0 && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={handleSubmit}
                            className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:bg-green-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                )}

                {/* Bottom Options Section */}
                <div className="absolute_XX bottom-10_XX w-full flex justify-center mt-12 p-2 bg-blue-500">
                    <Droppable droppableId="options">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="w-full p-4 flex flex-wrap gap-2 justify-center"
                            >
                                <h2 className="w-full text-lg font-semibold text-center text-white mb-2">Trash</h2>
                                {sections.options.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="bg-white text-black p-2 rounded-md cursor-pointer transition duration-300 hover:bg-green-500 hover:text-white"
                                            >
                                                <Image className='rounded-[10px] w-[120px]' src={item.img} alt="item" />
                                                {item.text}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </div>
    );
}
