'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function JingleWriter() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [jingle, setJingle] = useState('');

  const handleSave = () => {
    const doc = new jsPDF();

    const title = `Jingle Goal: ${goal}`;
    const jingleText = jingle || '(No jingle written)';

    doc.setFontSize(16);
    doc.text(title, 10, 20);

    doc.setFontSize(14);
    doc.text('Your Jingle:', 10, 30);

    // Wrap the jingle text and render
    const lines = doc.splitTextToSize(jingleText, 180);
    doc.text(lines, 10, 40);

    doc.save('my-jingle.pdf');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      {step === 1 && (
        <>
          <h1 className="text-2xl font-bold text-center mb-4">Set a Goal for the Jingle</h1>
          <input
            type="text"
            placeholder="Enter your goal here..."
            className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <button
            onClick={() => setStep(2)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="text-2xl font-bold text-center mb-4">
            Jingle Goal: Learn to ride a bike without training wheels
          </h1>
          <div className="bg-blue-50 p-4 rounded-xl mb-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Biking Jingle
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              Pedal fast, pedal free, <br />
              Look at me—I’m biking free! <br />
              1-2-3, just wait and see, <br />
              I’ll ride so far, just watch me!
            </p>
          </div>
          <button
            onClick={() => setStep(3)}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Start Making Jingle
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h1 className="text-2xl font-bold text-center mb-4">
            Jingle Goal: {goal || '(No goal set)'}
          </h1>
          <textarea
            className="w-full min-h-[120px] p-3 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 transition"
            placeholder="Write your own jingle here..."
            value={jingle}
            onChange={(e) => setJingle(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}
