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



export default function Home() {
  const [inputs, setInputs] = useState({
    taylorResponse: "",
    samThinkResponse: "",
    samUnderstandResponse: "",
    taylorReply: "",
    samAfterTaylorResponse: "",
    teacherAdvice: "",
    samSolution: "",
    taylorSolution: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [displayedScreens, setDisplayedScreens] = useState([0]);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      const nextScreen = currentScreen + 1;
      setCurrentScreen(nextScreen);
      setDisplayedScreens([...displayedScreens, nextScreen]);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-xl space-y-12">
        {!submitted ? (
          <>
            {displayedScreens.map((screenIndex) => (
              <div key={screenIndex} className="space-y-6">
                <h2 className="text-xl font-bold text-center text-purple-800">
                  {screens[screenIndex].heading}
                </h2>
                <div className="flex justify-around flex-wrap gap-8">
                  {screens[screenIndex].images.map((img, imgIdx) => (
                    <div key={imgIdx} className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <Image
                          src={img.src}
                          alt={img.label}
                          className="w-32 h-32 object-cover rounded-full border-4 border-purple-300"
                        />
                        {(img.message || inputs[img.inputName]) && (

                          <div className="mt-4 left-full ml-2 bg-blue-200 text-blue-900 p-3 rounded-xl shadow-md max-w-xs text-md break-words whitespace-pre-wrap">
                            {img.message || inputs[img.inputName]}
                          </div>

                        )}
                      </div>
                      {img.inputName && screenIndex === currentScreen && (
                        <textarea
                          name={img.inputName}
                          value={inputs[img.inputName]}
                          onChange={handleInputChange}
                          placeholder="Type your response..."
                          className="w-64 p-2 border border-gray-300 rounded-md shadow-sm resize-none"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex justify-center pt-8">

              {currentScreen !== screens.length - 1 &&
                <button
                  onClick={handleNext}
                  className="cursor-pointer px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Next
                </button>
              }
            </div>
          </>
        ) : (
          <>
            {screens.map((screen, screenIdx) => (
              <div key={screenIdx} className="space-y-4">
                <h2 className="text-xl font-bold text-center text-purple-800">{screen.heading}</h2>
                <div className="flex justify-around flex-wrap gap-8">
                  {screen.images.map((img, imgIdx) => (
                    <div key={imgIdx} className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <Image
                          src={img.src}
                          alt={img.label}
                          className="w-24 h-24 object-cover rounded-full border-2 border-purple-300"
                        />
                        {(img.message || inputs[img.inputName]) && (
                          <div className="absolute -top-4 left-full ml-2 bg-blue-200 text-blue-900 p-3 rounded-xl shadow-md max-w-xs text-sm before:absolute before:content-[''] before:w-4 before:h-4 before:bg-blue-200 before:rotate-45 before:-left-2 before:top-4 before:rounded-sm">
                            {img.message || inputs[img.inputName]}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>


  );
}
