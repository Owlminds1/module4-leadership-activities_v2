'use client'

import './style.css'


import Image from 'next/image'
import PI1 from '../assets/pi1.jpeg';

export default function P1() {
    
    const seen = "One sunny afternoon, Ava was playing in her room when she heard her mum calling from the dining room.” Ava, could you come here for a moment, please?’ Ava ran over and saw her mum cleaning the dining table. Mum looked a little puzzled. ‘I found some strange things on the dining table,’ she said. ‘Some of them belong here, but some definitely don’t! Can you help me find what doesn’t belong?’";
    
    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{seen}</h1>
            <Image alt="currentObj" className='currentObj' src={PI1} />
        </div>
    );
}
