"use client";
import "./style.css";
import { useState, useRef, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialOptions = [
    { id: "1", text:"The teacher notices and praises your responsibility." , answer: "You throw your rubbish in the bin after lunch without being reminded."},
    { id: "2", text:"Everyone feels respected and excited to share.", answer: "You say, `Let’s listen to everyone’s idea before we decide.`"},
    { id: "3", text:"Your classmate feels upset and doesn't want to work with you.", answer: "You grab the markers from a classmate and say, `I need them now!`"},
    { id: "4", text:"The group feels included and enjoys working together.", answer: "You ask your group, “Do you want to take turns being the leader?”"},
    { id: "5", text:"Your friend feels embarrassed and stops drawing.", answer: "You shout, `That’s not how you do it!` while your friend is drawing."},
    { id: "6", text:"Others see you as respectful and polite.", answer: "You wait patiently for your turn while others are speaking."},
    { id: "7", text:"Your classmate feels thankful and smiles.", answer: "You offer to help a classmate who dropped all their books."},
    { id: "8", text:"The teacher feels disrespected and disappointed.", answer: "You roll your eyes when your teacher asks you to fix your mistake."}
];

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

export default function DragDropOptions() {
    const alertTriggered = useRef(false);
    const [sections, setSections] = useState(null);

    useEffect(() => {
        const shuffledOptions = shuffleArray([...initialOptions]);
        const allDropZones = [...new Set(initialOptions.map(item => item.answer).filter(ans => ans !== "-"))];

        setSections({
            options: shuffledOptions.map(item => ({ ...item, color: "bg-yellow-500" })),
            ...Object.fromEntries(allDropZones.map(zone => [zone, []])),
        });
    }, []);

    if (!sections) return null; // Prevents rendering until state is initialized

    const onDragEnd = (result) => {
        if (!result.destination) return;

        setSections((prevSections) => {
            const sourceList = [...prevSections[result.source.droppableId]];
            const destinationList = [...(prevSections[result.destination.droppableId] || [])];

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
        if(sections.options.length > 0 ){
            alert("Please complete the activity")
            return;
        }
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
            alert(correctCount === totalCount && totalCount > 0 ? "Yay! All answers are correct!" : "Oops! Some answers are incorrect.");
            alertTriggered.current = false;
        }, 200);
    };

    return (
        <div className="relative h-screen flex flex-col sequenceContainerX">
            <DragDropContext onDragEnd={onDragEnd}>
                <h1 className="text-center font-semibold text-[22px] mb-4">Actions</h1>
                {/* <div className="flex flex-row gap-4 w-full overflow-x-auto"> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">

                    {Object.keys(sections).filter(key => key !== "options").map((sectionKey) => (
                        <Droppable key={sectionKey} droppableId={sectionKey}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className="w-64 min-h-[120px] p-3 bg-gray-100 rounded-lg shadow-lg d2 flex-shrink-0">
                                    <h2 className="font-semibold mb-2 text-center">{sectionKey}</h2>
                                    {sections[sectionKey]?.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={`${item.color} text-white p-2 mb-2 rounded-md cursor-pointer`}>
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

                <div className="flex justify-center mt-4">
                    <button onClick={handleSubmit} className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:bg-green-700 transition duration-300">
                        Submit
                    </button>
                </div>

                <div className="absolute bottom-10 w-full flex justify-center bg-blue-500">
                    <Droppable droppableId="options">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} className="w-full p-4 flex flex-wrap gap-2 justify-center">
                                <h2 className="w-full text-lg font-semibold text-center text-white mb-2">Consequences</h2>
                                {sections.options.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="bg-white text-black p-2 rounded-md cursor-pointer transition duration-300 hover:bg-green-500 hover:text-white">
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
