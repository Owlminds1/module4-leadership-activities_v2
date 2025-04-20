'use client'

import './style.css'


import Image from 'next/image'
import PI1 from '../assets/pi1.jpeg';

export default function P1() {
    
    const seen = "At school, Liam saw a BIG mess near the school bins. Food was in the recycling, wrappers were in the compost, and paper was everywhere! Liam wants to clean it up, but he is not sure how he can do it. ";
    
    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{seen}</h1>
            <Image alt="currentObj" className='currentObj' src={PI1} />
        </div>
    );
}
