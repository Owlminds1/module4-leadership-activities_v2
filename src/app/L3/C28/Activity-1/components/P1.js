'use client'

import './style.css'


import Image from 'next/image'
import P1I1 from '../assets/p1i1.jpeg';

export default function P1() {
    
    const seen = "Look at this image closely, can you tell what’s wrong with it?";
    
    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">{seen}</h1>
            <Image alt="currentObj" className='currentObj' src={P1I1} />
        </div>
    );
}
