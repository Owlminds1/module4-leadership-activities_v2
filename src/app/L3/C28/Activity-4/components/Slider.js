'use client';

import { useState } from 'react';
import GT from "../assets/gt.jpg";
import Image from 'next/image';

export default function StoryChooser() {
  const [screen, setScreen] = useState(1);
  const [visibleItems, setVisibleItems] = useState(0);

  const handleNextClick = () => {
    if (screen === 1) {
      if (visibleItems < 4) {
        setVisibleItems(prev => prev + 1);
      } else {
        setScreen(2);
      }
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-white p-6">
      {screen === 1 ? (
        <div className="text-left w-[700px]">
          <h1 className="font-semibold text-[25px] mb-4">Do you know what a manifesto is?</h1>
          <p className="text-[18px] mb-4">
            Well, a manifesto is a powerful message from a leader. It declares:
          </p>
          <ul className="list-decimal list-inside text-[18px] mb-4 transition-all duration-500">
            {visibleItems >= 1 && <li>What you believe in</li>}
            {visibleItems >= 2 && <li>What you want to change</li>}
            {visibleItems >= 3 && <li>How you plan to do it</li>}
            {visibleItems >= 4 && <li>What promise you make to those who support you</li>}
          </ul>
          <button 
            className="cursor-pointer mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="text-left w-[700px]">
          <h1 className="font-semibold text-[25px] mb-6">Greta Thunberg</h1>
          <Image 
            className="mb-2 w-[300px] rounded-[10px] shadow-xl p-6 bg-gray-100" 
            src={GT} 
            alt="gt" 
          />
          <i>
            <a 
              target="_blank"
              className="text-blue-500"
              href="https://en.wikipedia.org/wiki/Greta_Thunberg"
            >
              Reference
            </a>
          </i>
          <h1 className="text-[22px] mt-4">
            She’s a young climate activist from Sweden who started speaking up about global warming when she was just 15. 
            She began with one sign outside her school — and now millions of people around the world listen to her.
          </h1>
        </div>
      )}
    </div>
  );
}
