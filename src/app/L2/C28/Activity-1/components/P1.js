'use client'

import './style.css'


import Image from 'next/image'
import PI1 from '../assets/pi1.jpeg';

export default function P1() {
    
    const seen = "At school, Liam noticed a mess near the recycling bins: food in the recycling bin, wrappers in the compost, and paper scattered everywhere! Liam wanted to sort, but he wasn’t sure how to start";
    
    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{seen}</h1>
            <Image alt="currentObj" className='currentObj' src={PI1} />
        </div>
    );
}
