"use client";
import './style.css'

import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Modal from "@/components/ModalInit";

const initialOptions = [
    { id: "1", text: "Encourages team members", answer: "boostsMorale" },
    { id: "2", text: "Ignores team ideas", answer: "hindersMorale" },
    { id: "3", text: "Shares responsibilities fairly", answer: "boostsMorale" },
    { id: "4", text: "Blames others unfairly", answer: "hindersMorale" },
    { id: "5", text: "Listens to ideas", answer: "boostsMorale" },
    { id: "6", text: "Excludes certain members", answer: "hindersMorale" },
    { id: "7", text: "Talks negatively often", answer: "hindersMorale" },
    { id: "8", text: "Avoids responsibility", answer: "hindersMorale" },
    { id: "9", text: "Helps struggling teammates", answer: "boostsMorale" },
    { id: "10", text: "Appreciates others' efforts", answer: "boostsMorale" },
    { id: "11", text: "Stays positive always", answer: "boostsMorale" },
    { id: "12", text: "Never takes breaks", answer: "waste" },
    { id: "13", text: "Always follows the majority", answer: "waste" },
    { id: "14", text: "Always tries to do everything alone.", answer: "waste" }
];

export default function DragDropOptions() {
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState('')
    const [openModal, setOpenModal] = useState(false);

    const [sections, setSections] = useState({
        options: initialOptions.map(item => ({ ...item, color: "bg-yellow-500" })), // Default yellow
        boostsMorale: [],
        hindersMorale: []
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

        ["boostsMorale", "hindersMorale"].forEach((sectionKey) => {
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
                setModalTitle('Yay! All answers are correct!')
            } else {
                setModalTitle("Oops! your answers are incorrect.");
            }
            setOpenModal(true)
        }, 200)
    };

    const showSubmitBtn = () => {
        let show = false;
        if (sections.options.length === 0) {
            show = true;
        } else if (sections.options.length === 3) {
            show = true;
            for (let i = 0; i < sections.options.length; i++) {
                if (sections.options[i]["id"] !== "12" && 
                    sections.options[i]["id"] !== "13" && 
                    sections.options[i]["id"] !== "14") {
                    show = false;
                    break;
                }
            }
        }
        return show;
    };

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <div className="relative min-h-screen p-5 flex flex-col">
            <DragDropContext onDragEnd={onDragEnd}>
                
                {/* Main Grid - 3 Columns */}
                <div className="grid grid-cols-3 gap-4 w-full">
                    {/* Options Column */}
                    <Droppable droppableId="options">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="min-h-[500px] p-4 bg-blue-100 rounded-lg shadow-lg flex flex-col items-center"
                            >
                                <h2 className="text-lg font-semibold mb-4 text-center text-blue-700 underline">Options</h2>
                                {sections.options.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="bg-white text-black p-2 mb-2 rounded-md cursor-pointer transition hover:bg-green-500 hover:text-white w-full text-center"
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

                    {/* Boosts Morale Column */}
                    <Droppable droppableId="boostsMorale">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="min-h-[500px] p-4 bg-green-100 rounded-lg shadow-lg flex flex-col items-center"
                            >
                                <h2 className="text-lg font-semibold mb-4 text-center text-green-700 underline">Boosts Morale</h2>
                                {sections.boostsMorale.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`${item.color} text-white p-2 mb-2 rounded-md cursor-pointer w-full text-center`}
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

                    {/* Hinders Morale Column */}
                    <Droppable droppableId="hindersMorale">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="min-h-[500px] p-4 bg-red-100 rounded-lg shadow-lg flex flex-col items-center"
                            >
                                <h2 className="text-lg font-semibold mb-4 text-center text-red-700 underline">Hinders Morale</h2>
                                {sections.hindersMorale.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`${item.color} text-white p-2 mb-2 rounded-md cursor-pointer w-full text-center`}
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
                {showSubmitBtn() && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleSubmit}
                            className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:bg-green-700 transition"
                        >
                            Submit
                        </button>
                    </div>
                )}
            </DragDropContext>

            <Modal
                title={modalTitle}
                content={modalContent}
                open={openModal}
                closeModal={closeModal}
            />
        </div>
    );
}
