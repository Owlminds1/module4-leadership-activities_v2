'use client'

import './style.css'


import Image from 'next/image'
import PI1 from '../assets/pi1.jpeg';

export default function P1() {

    const seen = "Imagine riding your bike to school each day — feeling the wind on your face, racing your friends, but also having to dodge cars and worry about safety. That’s what’s happening to some students in another town. They love biking, but there are no bike lanes, and the roads are really busy. Some students feel unsafe, and even their parents are worried. These students want to make a change — they want to start a campaign for a safer bike route. But they’re not sure how to start.";

    return (
        <div className='slidesMainContainer'>
            <h1 className="heading">
            Imagine riding your bike to school—racing friends and feeling free. But for students in another town, it's risky. Without bike lanes, busy roads make biking unsafe, and parents are worried too. These students want to start a campaign for safer routes—but they need help getting started.
            </h1>
            <Image alt="currentObj" className='currentObj' src={PI1} />
        </div>
    );
}
