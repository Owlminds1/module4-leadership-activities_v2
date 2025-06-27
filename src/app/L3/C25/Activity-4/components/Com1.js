import './styleCom1.css';

export default function Com1() {

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 com1">
            <div className="flex w-[70%] justify-between gap-4">
                <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg text-left">
                    <h1 className='text-center heading'>Supportive Leader</h1>
                    <ol className='list-decimal p-6 subHeading'>
                        <li><b>Encourages team members</b> : Lifts others up with positive words and actions.</li>
                        <li className="mt-2"><b>Listen to others' ideas</b> : Values everyone's input and considers different perspectives.</li>
                        <li className="mt-2"><b>Solves conflicts peacefully</b> : Find fair solutions instead of arguing or blaming.</li>
                        <li className="mt-2"><b>Motivates others to do their best</b> : Inspires confidence and pushes the team toward success.</li>
                    </ol>
                </div>
                <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg text-left">
                    <h1 className='text-center heading'>Bossy Leader</h1>
                    <ol className='list-decimal p-6 subHeading'>
                        <li><b>Gives orders without listening</b> : Expects others to follow without discussing first.</li>
                        <li className='mt-2'><b>Focuses only on results, not teamwork</b> : Prioritises winning over working together.</li>
                        <li className='mt-2'><b>Plays the blame game</b> : Shifts faults onto teammates to avoid responsibility for their own actions.</li>
                        <li className='mt-2'><b>Undervalues others' opinions</b> : Makes decisions alone instead of incorporating feedback.</li>
                    </ol>

                </div>
            </div>
        </div>
    );
}
