'use client'

import { useState, useEffect } from 'react';

export default function QnA() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);

    const objects = [
        {
            text: "Name 3 tasks you wanted to do this week but haven’t done yet.",
        },
        {
            text: "Think of something your parents have reminded you to do more than once — what’s stopping you?",
        },
        {
            text: "Pick a boring task (like folding clothes) and say how to make it more fun.",
        },
        {
            text: "What’s one thing you've wanted to learn but haven’t started? And why?",
        },
        {
            text: "List 3 things that distract you when you're supposed to be doing something important.",
        },
        {
            text: "Think of a time you took action quickly — how did it feel afterward?",
        },
        {
            text: "Name something small you can do after class that you’ve been avoiding.",
        }
    ]

    const [quizCompleted, setQuizCompleted] = useState(false)

    useEffect(() => {
        if (timeLeft === 0) {
            alert('Moving to next challenge!');
            nextQuestion();
        }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);


    const nextQuestion = () => {
        if (currentObjIndex < objects.length - 1) {
            setCurrentObjIndex(prev => prev + 1);
            setTimeLeft(30);
        } else {
            setQuizCompleted(true)
            // alert(`Quiz complete! Your final score is ${score}/${objects.length}`);
        }
    };

    return (
        <div className="qnaMaincon p-4 space-y-4">
            {quizCompleted ? (
                <h1 className="text-[30px] font-semibold text-center">
                    Great job! Activity completed!
                </h1>
            ) : (
                <div>
                    <p className="text-right text-[30px] mt-4 mb-4 text-red-500 font-bold">Time left: {timeLeft}s</p>
                    <p className="text-lg font-semibold text-center mb-4 bg-gray-100 p-4 rounded-lg text-[23px]">
                        Question {currentObjIndex + 1}: {objects[currentObjIndex].text}
                    </p>
                </div>
            )}
        </div>
    );
}
