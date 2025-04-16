'use client'

import './style.css'


export default function Slider() {

    return (
        <div className='slidesMainContainer p-10'>
            <div className='text-left text-[23px]'>
                <p className='mb-3'>Your Name ____________</p>
                <p className='mb-3'>Date ____________</p>

                <br />
            </div>

            <h1 className='text-left text-[25px] font-semibold mb-4'>Format can be followed</h1>
            <ul className="text-left font-semibold text-[20px] list-disc list-inside text-gray-800">
                <li className="mb-8">
                    What did I do to show initiative?
                    <ul className="list-inside pl-6 text-gray-600 ml-4">
                        <li>
                            <i>- Write or draw what helpful thing you did.</i>
                        </li>
                    </ul>
                </li>

                <li className="mb-8">
                    Where did I do it?
                    <ul className="list-inside pl-6 text-gray-600 ml-4">
                        <li>
                            <i>- Example: At home, school, the park, grandma’s house, etc.</i>
                        </li>
                    </ul>
                </li>

                <li className="mb-8">
                    Who did I help?
                    <ul className="list-inside pl-6 text-gray-600 ml-4">
                        <li>
                            <i>- Example: Mum, a friend, a classmate, a neighbour, a teacher, even the environment!</i>
                        </li>
                    </ul>
                </li>

                <li className="mb-8">
                    Why did I decide to help?
                    <ul className="list-inside pl-6 text-gray-600 ml-4">
                        <li>
                            <i>- Example: I noticed something needed to be done, or someone looked like they needed help.</i>
                        </li>
                    </ul>
                </li>

                <li className="mb-8">
                    How did the person (or people) feel after I helped?
                    <ul className="list-inside pl-6 text-gray-600 ml-4">
                        <li>
                            <i>- Example: Happy, surprised, thankful, proud.</i>
                        </li>
                    </ul>
                </li>

                <li className="mb-8">
                    How did I feel after helping without being asked?
                    <ul className="list-inside pl-6 text-gray-600 ml-4">
                        <li>
                            <i>- Example: Proud, happy, excited, confident.</i>
                        </li>
                    </ul>
                </li>

            </ul>


        </div>
    );
}
