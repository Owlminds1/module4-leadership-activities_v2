'use client'

import { useState, useRef } from 'react'

const initialPrizes = [
    "You suggest an idea in class but no one listens.",
    "Your sibling is glued to the TV and hasn’t done their assigned housework.",
    "Your parents are busy, and dinner isn’t ready yet.",
    "Your sibling keeps interrupting your call with a friend."
]

const questions = [
    "What would you say?",
    "What would you do?",
    "What is likely to happen after your action?"
]

export default function Home() {
    const [isSpinning, setIsSpinning] = useState(false)
    const [rotation, setRotation] = useState(0)
    const [result, setResult] = useState(null)
    const [prizes, setPrizes] = useState(initialPrizes)
    const wheelRef = useRef(null)

    const [showQuestions, setShowQuestions] = useState(false)

    const totalSectors = prizes.length
    const degreesPerSector = 360 / totalSectors

    const colors = [
        '#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF',
        'purple', 'gray', 'orange', 'cyan',
        'red', '#A29BFE', '#00B894', '#E84393'
    ]

    const backgroundStyle = colors
        .map((color, i) => {
            const start = (i * 100) / totalSectors
            const end = ((i + 1) * 100) / totalSectors
            return `${color} ${start}% ${end}%`
        })
        .join(', ')

    const spinWheel = () => {
        if (isSpinning || !wheelRef.current) return

        setShowQuestions(false)

        const selected = Math.floor(Math.random() * totalSectors)
        const extraSpins = 5 * 360
        const newRotation = extraSpins + selected * degreesPerSector + degreesPerSector / 2
        const totalRotation = rotation + newRotation

        wheelRef.current.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)'
        wheelRef.current.style.transform = `rotate(${totalRotation}deg)`

        setIsSpinning(true)
        setResult(null)
        setRotation(totalRotation)

        setTimeout(() => {
            setIsSpinning(false)
            const selectedPrize = prizes[selected]
            setResult(selectedPrize)

            const updatedPrizes = prizes.filter((_, index) => index !== selected)
            setPrizes(updatedPrizes)
            setShowQuestions(true)
        }, 4000)
    }

    const showBtnText = () => {
        if (prizes.length === 0) return ''
        if (isSpinning) return 'Spinning...'
        if (prizes.length === 1) return 'Click me to play the last spin'
        return 'Spin'
    }

    

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-blue-100 to-purple-100 p-4">
            <div className='w-1/2'>
                <h1 className="text-2xl font-semibold mb-4"><i>Spin the Wheel!</i></h1>

                <div className="relative w-[400px] h-[400px] mb-6">
                    <div
                        ref={wheelRef}
                        className="absolute inset-0 rounded-full border-[10px] border-white shadow-xl"
                        style={{
                            background: `conic-gradient(${backgroundStyle})`,
                        }}
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-black mt-8" />
                </div>

                {prizes.length > 0 && (
                    <button
                        onClick={spinWheel}
                        className={`px-12 py-3 text-white text-lg font-semibold rounded-full shadow-md transition
                         ${isSpinning ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'}`}
                        disabled={isSpinning}
                    >
                        {showBtnText()}
                    </button>
                )}

                {result && (
                    <p className="mt-6 text-black text-xl font-semibold w-[500px]">
                        Scenario {initialPrizes.length - prizes.length}: {result}
                    </p>
                )}
            </div>

            <div className='w-1/2 text-left'>

                <div className="mt-4 space-y-2">
                    {showQuestions &&
                        questions.map((q, i) => (
                            <p key={i} className="p-3 font-semibold text-2xl">
                                Q{i+1}.{q}
                            </p>
                        ))}
                </div>
            </div>
        </div>
    )
}
