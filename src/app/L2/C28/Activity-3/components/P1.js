'use client'

import './style.css'


import Image from 'next/image'
import PI1 from '../assets/pi1.jpeg';

export default function P1() {
    
    const seen = "A group of students from the town of Cleanridge noticed that plastic bottles and wrappers were being thrown all over their local park. The litter was piling up and harming the environment. So, they decided to start a campaign to raise awareness and reduce waste. But they need help to kick it off.";
    
    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{seen}</h1>
            <Image alt="currentObj" className='currentObj' src={PI1} />
        </div>
    );
}
