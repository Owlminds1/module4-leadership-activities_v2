'use client'

import './style.css'


export default function P4() {
    
    const seenHeading = "Become a Home Harmony Hero!";
    const seen = "This week’s goal: Help with mealtimes at home—like setting the table, clearing it, or helping with napkins";
    
    return (
        <div className='slidesMainContainer'>
            <h1 className="text-[32px] font-semibold">{seenHeading}</h1>
            <h1 className="text-[25px] w-[800px] mt-4">{seen}</h1>
        </div>
    );
}
