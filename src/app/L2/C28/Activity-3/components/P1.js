'use client'

import './style.css'


import Image from 'next/image'
import PI1 from '../assets/pi1.jpeg';

export default function P1() {
    
    const seen = "Let me tell you about a group of students in another town. They noticed that people were throwing plastic bottles and wrappers all over the local park. The litter was building up, and it was hurting the environment. They decided to start a campaign to raise awareness and reduce waste, but they need help to get started. ";
    
    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{seen}</h1>
            <Image alt="currentObj" className='currentObj' src={PI1} />
        </div>
    );
}
