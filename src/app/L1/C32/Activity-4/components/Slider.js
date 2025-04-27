// pages/drag.tsx
"use client";

import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

const initialItems = ["STOP", "CHOOSE", "RESPECT", "THINK", "SAY"];
const correctOrder = ["STOP", "SAY", "THINK", "CHOOSE", "RESPECT"];

export default function DragPage(props) {
  const [items, setItems] = useState(initialItems);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);

    if (JSON.stringify(newItems) === JSON.stringify(correctOrder)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Drag and drop the words to arrange them in the correct order.</h1>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="words">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col gap-4 w-64"
            >
              {items.map((word, index) => (
                <Draggable key={word} draggableId={word} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`p-4 rounded-xl text-center font-bold text-lg bg-blue-100 ${
                        snapshot.isDragging ? "bg-blue-300" : ""
                      }`}
                    >
                      {word}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {isCorrect && (
        <div className="mt-6 flex flex-col items-center">
          <p className="text-green-600 font-semibold text-xl mb-4">Good job!</p>
          <p className="text-black-600 font-semibold text-xl mb-4">Do you remember what STOP – SAY – THINK – CHOOSE – RESPECT is, and why it is used?</p>
          <button 
            onClick={props.handleNext}
            className="px-6 py-2 cursor-pointer bg-green-800 hover:bg-green-600 text-white rounded-xl transition">
            Next
          </button>
        </div>
      )}
    </div>
  );
}
