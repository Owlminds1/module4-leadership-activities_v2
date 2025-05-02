'use client'

import { useState } from 'react';
import './style.css'


export default function P4(props) {
    const [goal, setGoal] = useState('');
    const seenHeading = "Set your very own!";
    const handleSubmit = () => {
        props.getGoal(goal)
    }

    const updateGoal = (e) => {
        const val = e.target.value
        setGoal(val)
    }

    return (
        <div className='slidesMainContainer'>
            <h1 className="text-[24px] mb-6 font-semibold">{seenHeading}</h1>
            <div className='flex items-center justify-center'>
                <div>
                    <i>Either come up with your own mission statement, or select one from the list below:</i>
                    <ul className='mt-4 text-[22px] list-disc list-inside text-left mr-10'>
                        <li>Sort home/school rubbish properly</li>
                        <li>Turn off lights/devices when not in use</li>
                        <li>Carry a reusable bottle</li>
                        <li>Collect scrap paper for reuse</li>
                        <li>Use less plastic at lunch</li>
                        <li>Water a plant daily</li>
                    </ul>
                </div>
                <div className='w-[30%]'>
                    <input
                        onChange={(e) => updateGoal(e)}
                        placeholder='Set your very own!'
                        className='w-[100%] border-1 border-gray-300 p-2 rounded'
                        type='text' />
                </div>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
