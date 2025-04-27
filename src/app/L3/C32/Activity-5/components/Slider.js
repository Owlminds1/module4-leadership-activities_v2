"use client";

import { useState } from "react";
import Image from "next/image";
import C2 from "../assets/c1.jpeg";
import C1 from "../assets/c2.jpeg";
import C3 from "../assets/c3.jpeg";

// Define all screens
const screens = [
  {
    heading: "Sam and Taylor had a science project submission today. But Taylor didn’t get the poster.",
    images: [
      { src: C1, label: "Sam", message: 'Sam says, Taylor! You forgot the poster! You ruined our project!' },
      { src: C2, label: "Taylor" },
    ],
  },
  {
    heading: "What might Taylor say to explain their side?",
    images: [
      { src: C1, label: "Sam" },
      { src: C2, label: "Taylor", inputName: "taylorResponse" },
    ],
  },
  {
    heading: "What might Sam think after hearing Taylor’s explanation?",
    images: [
      { src: C1, label: "Sam", inputName: "samThinkResponse" },
      { src: C2, label: "Taylor" },
    ],
  },
  {
    heading: "What could Sam say to understand better?",
    images: [
      { src: C1, label: "Sam", inputName: "samUnderstandResponse" },
      { src: C2, label: "Taylor" },
    ],
  },
  {
    heading: "What could Taylor reply?",
    images: [
      { src: C1, label: "Sam" },
      { src: C2, label: "Taylor", inputName: "taylorReply" },
    ],
  },
  {
    heading: "What could Sam say after hearing Taylor’s reason?",
    images: [
      { src: C1, label: "Sam", inputName: "samAfterTaylorResponse" },
      { src: C2, label: "Taylor" },
    ],
  },
  {
    heading: "What could the teacher say to help them learn from this?",
    images: [{ src: C3, label: "Teacher", inputName: "teacherAdvice" }],
  },
  {
    heading: "What could Sam and Taylor decide to do for next time?",
    images: [
      { src: C1, label: "Sam", inputName: "samSolution" },
      { src: C2, label: "Taylor", inputName: "taylorSolution" },
    ],
  },
];

// Automatically build initial inputs object
const initialInputs = {};
screens.forEach(screen => {
  screen.images.forEach(img => {
    if (img.inputName) {
      initialInputs[img.inputName] = "";
    }
  });
});

export default function Home() {
  const [screenIndex, setScreenIndex] = useState(0);
  const [inputs, setInputs] = useState(initialInputs);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (screenIndex < screens.length - 1) {
      setScreenIndex(screenIndex + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center mt-6 p-4">
      {!submitted ? (
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">
            {screens[screenIndex].heading}
          </h1>

          <div className="flex justify-around items-start gap-8 mb-6">
            {screens[screenIndex].images.map((img, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 relative">
                <Image
                  src={img.src}
                  alt={img.label}
                  className="w-32 h-32 object-cover rounded-full"
                />

                {/* Show message only for Screen 0 (first screen) */}
                {screenIndex === 0 && img.message && (
                  <div className="top-full mt-2 p-3 bg-blue-100 text-blue-900 rounded-lg shadow-md text-center w-60 break-words text-md">
                    {img.message}
                  </div>)}

                {/* Textarea if inputName exists */}
                {img.inputName && (
                  <textarea
                    name={img.inputName}
                    value={inputs[img.inputName]}
                    onChange={handleInputChange}
                    placeholder="Type your answer..."
                    className="p-2 border rounded-md w-64 mt-4 h-24"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleNext}
              className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
            >
              {screenIndex === screens.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        // Output after submission
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-5xl w-full">
          {screens.map((screen, idx) => (
            <div key={idx} className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-4">{screen.heading}</h2>

              <div className="flex justify-around items-start gap-8 mb-4">
                {screen.images.map((img, idx2) => (
                  <div key={idx2} className="flex flex-col items-center gap-2 relative">
                    <Image
                      src={img.src}
                      alt={img.label}
                      className="w-24 h-24 object-cover rounded-full"
                    />

                    {/* Show message only on first screen */}
                    {idx === 0 && img.message && (
                      <div className="mt-2 p-3 bg-blue-100 text-blue-900 rounded-lg shadow-md text-center max-w-[250px] text-md font-bold">
                        {img.message}
                      </div>
                    )}

                    {/* Display input answer */}
                    {img.inputName && (
                      <div className="mt-2 p-3 bg-blue-100 text-blue-900 rounded-lg shadow-md text-center max-w-[250px] text-md">
                        <span className="font-bold">{img.label} says:</span> {inputs[img.inputName]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
