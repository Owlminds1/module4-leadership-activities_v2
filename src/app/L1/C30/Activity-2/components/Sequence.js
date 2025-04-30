"use client";
import "./style.css";
import { useState, useRef, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Modal from "@/components/ModalInit";

const initialOptions = [
    { id: "1", text: "Your friend smiles and shares with you later.", answer: "Share toy" },
    { id: "2", text: "You don’t have lunch at school.", answer: "Forget lunchbox" },
    { id: "3", text: "They get distracted and can’t focus on their book.", answer: "Talk Loudly" },
    { id: "4", text: "They smile and feel happy.", answer: "Say thank you" },
    { id: "5", text: "Someone steps on your toys and gets hurt.", answer: "Don't clean up after playing with toys" },
    { id: "6", text: "Your class gets a new fish in the tank.", answer: "-" },
    { id: "7", text: "The school bell rings earlier than usual.", answer: "-" },
];

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};



export default function DragDropOptions() {
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState('')
    const [openModal, setOpenModal] = useState(false);

    const alertTriggered = useRef(false);
    const [sections, setSections] = useState(null);

    const [submitBtnVisiable, setSubmitBtnVisiable] = useState(false);

    useEffect(() => {
        const shuffledOptions = shuffleArray([...initialOptions]);
        const allDropZones = [...new Set(initialOptions.map(item => item.answer).filter(ans => ans !== "-"))];

        setSections({
            options: shuffledOptions.map(item => ({ ...item, color: "bg-yellow-500" })),
            ...Object.fromEntries(allDropZones.map(zone => [zone, []])),
        });

    }, []);

    useEffect(() => {
        if (sections && sections['options'] && sections['options'].length < 3) {
            setSubmitBtnVisiable(true)
        } else {
            setSubmitBtnVisiable(false)
        }
    }, [sections])

    
    if (!sections) return null; // Prevents rendering until state is initialized


    function hasIds(arr) {
        const ids = arr.map(obj => obj.id);
        return ids.includes("6") && ids.includes("7");
    }

    const onDragEnd = (result) => {
        if (!result.destination) return;

        setSections((prevSections) => {
            const sourceList = [...prevSections[result.source.droppableId]];
            const destinationList = [...(prevSections[result.destination.droppableId] || [])];
            // setSubmitBtnVisiable
            const [movedItem] = sourceList.splice(result.source.index, 1);

            if (!destinationList.some(item => item.id === movedItem.id)) {
                destinationList.splice(result.destination.index, 0, movedItem);
            }

            return {
                ...prevSections,
                [result.source.droppableId]: sourceList,
                [result.destination.droppableId]: destinationList,
            };
        });
    };

    const handleSubmit = () => {

        if (alertTriggered.current) return;
        alertTriggered.current = true;

        let correctCount = 0;
        let totalCount = 0;

        const updatedSections = { ...sections };

        Object.keys(updatedSections).forEach((sectionKey) => {
            if (sectionKey !== "options") {
                updatedSections[sectionKey] = updatedSections[sectionKey].map((item) => {
                    const isCorrect = item.answer === sectionKey;
                    if (isCorrect) correctCount++;
                    totalCount++;
                    return { ...item, color: isCorrect ? "bg-green-500" : "bg-red-500" };
                });
            }
        });

        setSections(updatedSections);

        setTimeout(() => {
            if (totalCount === 0) {
                setModalTitle('Please complete the story')
            }
            else if (correctCount === totalCount && totalCount > 0) {
                setModalTitle('Yay! All answers are correct!')
            } else {
                setModalTitle('Oops! Some answers are incorrect.')
            }
            setOpenModal(true)
            alertTriggered.current = false;
        }, 200);
    };


    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <div className="relative h-screen p-5 flex flex-col">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex flex-row w-full h-full gap-4 overflow-hidden">

                    {/* LEFT COLUMN: */}
                    <div className="w-1/2 overflow-y-auto pl-2">
                        <h2 className="text-xl font-semibold text-center mb-4">Consequences</h2>
                        <Droppable droppableId="options">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="p-4 bg-blue-100 rounded-lg shadow-inner min-h-[400px] flex flex-col gap-3"
                                >
                                    {sections.options.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="bg-white text-black p-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white transition"
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
                        <br />
                        <br />
                        {submitBtnVisiable &&
                            <button
                                onClick={handleSubmit}
                                className="w-[100%] bg-green-600 cursor-pointer text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:bg-green-700 transition duration-300"
                            >
                                Submit
                            </button>
                        }
                    </div>



                    {/* RIGHT COLUMN: */}
                    <div className="w-1/2 overflow-y-auto pr-2">
                        <h2 className="text-xl font-semibold text-center mb-4">Decisions</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {Object.keys(sections).filter(key => key !== "options").map((sectionKey) => (
                                <Droppable key={sectionKey} droppableId={sectionKey}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className="min-h-[100px] py-2 px-4 bg-gray-100 rounded-lg shadow-lg"
                                        >
                                            <h3 className="text-md font-semibold mb-2 text-center"><u>{sectionKey}</u></h3>
                                            {sections[sectionKey]?.map((item, index) => (
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
                            ))}
                        </div>
                    </div>

                </div>


                {/* Modal */}
                <Modal
                    title={modalTitle}
                    content={modalContent}
                    open={openModal}
                    closeModal={closeModal}
                />
            </DragDropContext>
        </div>
    );

}
