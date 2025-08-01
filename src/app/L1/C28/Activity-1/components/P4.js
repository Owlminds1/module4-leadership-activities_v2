'use client'

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import './style.css';

export default function P3() {
  const seenHeading = "Planning your action";

  const questions = [
    "What can I help with during mealtime?",
    "How do I set reminders to help during meals?",
    "How will I feel after helping with mealtime?",
    "What will help me keep going, even if the job gets boring to do every day? ",
    "Who at home can be part of my Home Harmony Hero team?"
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Planning Your Goal', 10, 15);
    doc.setFontSize(12);

    let y = 30;

    questions.forEach((question, index) => {
      const splitQuestion = doc.splitTextToSize(`${index + 1}. ${question}`, 180);
      doc.text(splitQuestion, 10, y);
      y += splitQuestion.length * 7;

      const splitAnswer = doc.splitTextToSize(`Ans: ${answers[index] || '-'}`, 180);
      doc.text(splitAnswer, 10, y);
      y += splitAnswer.length * 7 + 5;

      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save('planning-your-goal.pdf');
  };

  return (
    <div className='slidesMainContainer p-6 max-w-4xl mx-auto'>
      <h1 className="text-3xl font-bold mb-10 text-blue-700">
        {seenHeading}
      </h1>

      <div className="space-y-8">
        {questions.map((question, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
            <p className="text-lg font-semibold text-gray-800 mb-3">
              {index + 1}. {question}
            </p>
            <textarea
              value={answers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder="Type your answer here..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          onClick={generatePDF}
          className="bg-green-600 text-white px-8 py-3 text-lg rounded-lg shadow hover:bg-green-700 transition-all hover:scale-105"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
