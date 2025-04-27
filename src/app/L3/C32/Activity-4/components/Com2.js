'use client'

import './style.css'

import Image from 'next/image'

export default function Slider(props) {


    return (
        <div className='slidesMainContainer'>

            <div>
                <h1
                    style={{ fontWeight: '600' }}
                    className="heading">{props.currentObj.heading}</h1>
                <h1 className="subHeading">{props.currentObj.subHeading}</h1>
                <Image alt="currentObj" className='currentObj' src={props.currentObj.img} />
            </div>



        </div>
    );
}
