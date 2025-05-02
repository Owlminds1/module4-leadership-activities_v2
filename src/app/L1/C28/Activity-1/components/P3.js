'use client'

import './style.css'


export default function P4() {
    
    const seenHeading = "Become a Home Harmony Hero!";
    const seen = "Help with mealtimes at home: like setting the table, clearing it, or helping with napkins.";
    
    return (
        <div className='slidesMainContainer'>
            <h1 className="text-[32px] font-semibold">{seenHeading}</h1>
            <h1 className="text-[25px] mt-4">This week’s goal:</h1>
            <h1 className="text-[22px] mt-4">{seen}</h1>
        </div>
    );
}
