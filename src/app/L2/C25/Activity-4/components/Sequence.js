"use client";
import './style.css'

import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Modal from "@/components/ModalInit";

const initialOptions = [
    { id: "1", text: "Listens to others", answer: "supportOptions" },
    { id: "2", text: "Ignores others", answer: "underminesOptions" },
    { id: "3", text: "Encourages teammates", answer: "supportOptions" },
    { id: "4", text: "Shares responsibilities", answer: "supportOptions" },
    { id: "5", text: "Takes credit for everything", answer: "underminesOptions" },
    { id: "6", text: "Complaints instead of helping", answer: "underminesOptions" },
    { id: "7", text: "Celebrates team success", answer: "supportOptions" },
    { id: "8", text: "Excludes teammates", answer: "underminesOptions" },
    { id: "9", text: "Solves problems calmly", answer: "supportOptions" },
    { id: "10", text: "Stays positive in challenges", answer: "supportOptions" },
    { id: "11", text: "Blames others for mistakes", answer: "underminesOptions" },
    { id: "12", text: "Always follows others without thinking", answer: "underminesOptions" },
    { id: "13", text: "Gives honest feedback", answer: "supportOptions" },
    { id: "14", text: "Works alone on personal tasks", answer: "waste" },
    { id: "15", text: "Likes to work in complete silence.", answer: "waste" },
    { id: "16", text: "Likes to keep things very organized", answer: "waste" },
];

export default function DragDropOptions() {
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const [sections, setSections] = useState({
        options: initialOptions.map(item => ({ ...item, color: "bg-yellow-500" })),
        supportOptions: [],
        underminesOptions: []
    });

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const sourceList = [...sections[result.source.droppableId]];
        const destinationList = [...sections[result.destination.droppableId]];

        const [movedItem] = sourceList.splice(result.source.index, 1);

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

        ["supportOptions", "underminesOptions"].forEach((sectionKey) => {
            updatedSections[sectionKey] = updatedSections[sectionKey].map(item => {
                const isCorrect = item.answer === sectionKey;
                if (isCorrect) correctCount++;
                totalCount++;
                return { ...item, color: isCorrect ? "bg-green-500" : "bg-red-500" };
            });
        });

        setSections(updatedSections);

        setTimeout(() => {
            if (correctCount === totalCount) {
                setModalTitle('Yay! All answers are correct!');
            } else {
                setModalTitle("Oops! your answers are incorrect.");
            }
            setOpenModal(true);
        }, 200);
    };

    const showSubmitBtn = () => {
        return sections.supportOptions.length > 0 || sections.underminesOptions.length > 0;
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <div className="relative h-screen p-5 flex flex-col sequenceConatinerX">
            <DragDropContext onDragEnd={onDragEnd}>

                {/* 3 Columns Layout */}
                <div className="grid grid-cols-3 gap-4 w-full">

                    {/* Options Column */}
                    <Droppable droppableId="options">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="min-h-[500px] p-4 bg-blue-100 rounded-lg shadow-lg"
                            >
                                <h2 className="text-lg font-semibold mb-4 text-center text-blue-700">
                                    <u>Options</u>
                                </h2>
                                {sections.options.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="bg-white text-black p-2 mb-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white transition"
                                            >
                                                {item.text}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    {/* Support Column */}
                    <Droppable droppableId="supportOptions">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="min-h-[500px] p-4 bg-green-100 rounded-lg shadow-lg"
                            >
                                <h2 className="text-lg font-semibold mb-4 text-center text-green-700">
                                    <u>Supports Team Morale</u>
                                </h2>
                                {sections.supportOptions.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`${item.color} text-white p-2 mb-2 rounded-md cursor-pointer`}
                                            >
                                                {item.text}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    {/* Undermines Column */}
                    <Droppable droppableId="underminesOptions">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="min-h-[500px] p-4 bg-red-100 rounded-lg shadow-lg"
                            >
                                <h2 className="text-lg font-semibold mb-4 text-center text-red-700">
                                    <u>Undermines Team Morale</u>
                                </h2>
                                {sections.underminesOptions.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`${item.color} text-white p-2 mb-2 rounded-md cursor-pointer`}
                                            >
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

                {/* Submit Button */}
                {showSubmitBtn() &&
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleSubmit}
                            className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:bg-green-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                }

            </DragDropContext>

            {/* Modal */}
            <Modal
                title={modalTitle}
                content={modalContent}
                open={openModal}
                closeModal={closeModal}
            />
        </div>
    );
}
