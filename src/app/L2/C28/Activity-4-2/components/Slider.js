'use client';

import { useState } from 'react';

export default function Slider() {
    const [jingle, setJingle] = useState('');

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Jingle Goal: Learn to ride a bike without training wheels
            </h1>

            <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">Biking Jingle</h2>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                    Pedal fast, pedal free, <br />
                    Look at me—I’m biking free! <br />
                    1-2-3, just wait and see, <br />
                    I’ll ride so far, just watch me!
                </p>
            </div>

            <h2 className="text-xl font-semibold text-blue-700 mb-2">Your Jingle:</h2>
            <textarea
                className="w-full min-h-[120px] p-3 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 transition"
                placeholder="Write your own jingle here..."
                value={jingle}
                onChange={(e) => setJingle(e.target.value)}
            />
        </div>
    );
}
