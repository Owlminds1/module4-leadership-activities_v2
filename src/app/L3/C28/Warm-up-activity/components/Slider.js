'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function StoryChooser() {
  const storyTitles = [
    'Lost in Space',
    'The Magical Forest',
    'A Mystery at the Museum',
    'Robots Take Over the School',
    'The Secret Underground City',
    'A Dragon in the Backyard',
    'A Savannah with a Secret Portal',
    'Aliens Visit Earth for a Day',
    'The Haunted Library',
  ];

  const [selectedStory, setSelectedStory] = useState(null);
  const [storyText, setStoryText] = useState('');

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(selectedStory || 'My Story', 10, 20);
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(storyText, 180); // Wrap text
    doc.text(lines, 10, 30);

    doc.save(`${selectedStory || 'story'}.pdf`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full text-center">
        {!selectedStory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {storyTitles.map((title, index) => (
              <button
                key={index}
                onClick={() => setSelectedStory(title)}
                className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white text-sm sm:text-base font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:scale-105"
              >
                {title}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-left">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">{selectedStory}</h2>
            <textarea
              placeholder="Start your story here..."
              className="w-full h-60 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base mb-4"
              value={storyText}
              onChange={(e) => setStoryText(e.target.value)}
            />
            <button
              onClick={handleDownload}
              className="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200"
            >
              Generate story
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
