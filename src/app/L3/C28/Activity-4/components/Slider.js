'use client';

import GT from "../assets/gt.jpg"
import Image from 'next/image';

export default function StoryChooser() {

  return (
    <div>
      <h1 className="font-semibold text-[25px] mb-6">Greta Thunberg</h1>
      <Image className="mb-2 w-[300px] rounded-[10px] shadow-xl p-6 bg-gray-100 rounded-2xl" src={GT} alt="gt" />
      <i>
        <a 
          target="_blank"
          className="text-blue-500"
          href="https://en.wikipedia.org/wiki/Greta_Thunberg">Reference</a>
      </i>
      <h1 className="text-[22px] w-[700px] mt-4">
        She’s a young climate activist from Sweden who started speaking up about global warming when she was just 15. She began with one sign outside her school — and now millions of people around the world listen to her.
      </h1>
    </div>
  );
}
