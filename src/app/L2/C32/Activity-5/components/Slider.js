"use client";

import { useState } from "react";
import Image from 'next/image';
import C1 from '../assets/c1.jpeg';
import C2 from '../assets/c2.jpeg';
import C3 from '../assets/c3.jpeg';

const screens = [
  {
    heading: "Mia and Jack were a part of a soccer team, and they lost, and Mia thinks Jack didn’t try hard enough.",
    images: [
      { src: C1, label: "Mia", message: 'Mia says, “Jack, you made us lose the soccer match!”' },
      { src: C2, label: "Jack" },
    ],
    inputName: null,
  },
  {
    heading: "What might Jack say to explain his side?",
    images: [
      { src: C1, label: "Mia" },
      { src: C2, label: "Jack", inputName: "jackResponse" },
    ],
    textAfterImage: null,
  },
  {
    heading: "What could Mia say after hearing the other side?",
    images: [
      { src: C1, label: "Mia", inputName: "miaResponse" },
      { src: C2, label: "Jack" },
    ],
    textAfterImage: null,
  },
  {
    heading: "What could a coach say to help both characters see both sides?",
    images: [{ src: C3, label: "Coach", inputName: "coachResponse" }],
    textAfterImage: null,
  },
  {
    heading: "What solution could Mia say that would help them win next time?",
    images: [
      { src: C1, label: "Mia", inputName: "miaSolution" },
      { src: C2, label: "Jack" },
    ],
    textAfterImage: null,
  },
];

export default function Home() {
  const [screenIndex, setScreenIndex] = useState(0);
  const [inputs, setInputs] = useState({
    jackResponse: "",
    miaResponse: "",
    coachResponse: "",
    miaSolution: "",
  });
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
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">{screens[screenIndex].heading}</h1>

          <div className="flex justify-around items-start gap-8 mb-6">
            {screens[screenIndex].images.map((img, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 relative">
                <Image src={img.src} alt={img.label} className="w-32 h-32 object-cover rounded-full" />
                
                {/* Message for Mia on Screen 1 */}
                {img.message && (
                  <div className="mt-2 p-3 bg-blue-100 text-blue-900 rounded-lg shadow-md text-center max-w-[250px] text-md">
                    {img.message}
                  </div>
                )}

                {/* Textarea for input */}
                {img.inputName && (
                  <textarea
                    name={img.inputName}
                    value={inputs[img.inputName]}
                    onChange={handleInputChange}
                    placeholder="Type your answer..."
                    className="p-2 border rounded-md w-70 mt-2 h-24"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Button */}
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
        // Submitted screen
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl w-full">

          {screens.map((screen, idx) => (
            <div key={idx} className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-4">{screen.heading}</h2>

              <div className="flex justify-around items-start gap-8 mb-4">
                {screen.images.map((img, idx2) => (
                  <div key={idx2} className="flex flex-col items-center gap-2 relative">
                    <Image src={img.src} alt={img.label} className="w-24 h-24 object-cover rounded-full" />
                    
                    {/* Message under Mia's image for first screen */}
                    {img.message && (
                      <div className="mt-2 p-3 bg-blue-100 text-blue-900 rounded-lg shadow-md text-center max-w-[250px] text-md font-bold">
                        {img.message}
                      </div>
                    )}

                    {/* Answer */}
                    {img.inputName && (
                      <p className="mt-2 p-3 bg-blue-100 text-blue-900 rounded-lg shadow-md text-center max-w-[250px] text-md">
                        <span className="font-bold">{img.label} says:</span> {inputs[img.inputName]}
                      </p>
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
