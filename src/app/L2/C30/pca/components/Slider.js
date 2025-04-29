'use client'

import './style.css'

export default function Slider() {
    const data = [
        {
            col1: "Dad",
            col2: ""
        }
    ];

    return (
        <div className="slidesMainContainer p-6 max-w-5xl mx-auto space-y-8 text-[18px] leading-relaxed">
            {/* DISCUSSION */}
            <div>
                <p className="font-semibold">
                    What did you discuss <span className="inline-block w-[60%] border-b border-gray-400 align-middle"></span>
                </p>
            </div>

            {/* SPACE */}
            <div>
                <p className="font-semibold">
                    Did everyone get{' '}
                    <span className="bg-[#c20c82] text-white text-sm font-semibold rounded px-3 py-1 shadow">
                        SPACE
                    </span>{' '}
                    to feel included? <span className="inline-block w-[40%] border-b border-gray-400 align-middle"></span>
                </p>
            </div>

            {/* VOICE */}
            <div>
                <p className="font-semibold mb-4">
                    How was{' '}
                    <span className="bg-[#c20c82] text-white text-sm font-semibold rounded px-3 py-1 shadow">
                        VOICE
                    </span>{' '}
                    used to speak up?
                </p>
                <table className="w-full border border-gray-300 shadow-sm rounded overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left p-3 border border-gray-300">Family Member</th>
                            <th className="text-left p-3 border border-gray-300">Thought</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-50">
                                <td className="p-3 border border-gray-300">{row.col1}</td>
                                <td className="p-3 border border-gray-300">{row.col2 || '_________'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="mt-3 text-sm text-blue-600">
                    Add more rows as per the discussion.
                </p>
            </div>

            {/* AUDIENCE */}
            <div>
                <p className="font-semibold">
                    Who was the{' '}
                    <span className="bg-[#c20c82] text-white text-sm font-semibold rounded px-3 py-1 shadow">
                        AUDIENCE
                    </span>{' '}
                    to listen and act on it? <span className="inline-block w-[65%] border-b border-gray-400 align-middle"></span>
                </p>
            </div>

            {/* INFLUENCE */}
            <div>
                <p className="font-semibold">
                    How did ideas transform into{' '}
                    <span className="bg-[#c20c82] text-white text-sm font-semibold rounded px-3 py-1 shadow">
                        INFLUENCE
                    </span>? <span className="inline-block w-[65%] border-b border-gray-400 align-middle"></span>
                </p>
            </div>
        </div>
    );
}
