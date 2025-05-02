'use client'

import './style.css'


import Image from 'next/image'
import PI1 from '../assets/pi1.jpeg';

export default function P1() {
    
    const seen = "Let me tell you about a group of students from the town of Cleanridge. They noticed that plastic bottles and wrappers were being thrown all over their local park. The litter was piling up and harming the environment. So, they decided to start a campaign to raise awareness and reduce waste—but they need help to get it off the ground.";
    
    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{seen}</h1>
            <Image alt="currentObj" className='currentObj' src={PI1} />
        </div>
    );
}
