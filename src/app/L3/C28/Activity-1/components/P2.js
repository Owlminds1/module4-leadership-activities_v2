'use client'

import C1 from "../assets/c1.jpeg";
import C2 from "../assets/c2.jpeg";
import Image from "next/image";
import { useState } from 'react'
import jsPDF from 'jspdf'

export default function RightColumn() {
  const moreQuestions = [
    "What makes you a good leader?",
    "How would you make sure everyone on the team feels included?",
    "What would you do if two teammates were arguing?",
    "What do you enjoy most about sports?",
    "How do you handle losing a game?",
    "What fun activities would you plan for the Sports Club?",
    "How would you help the team get better at working together?",
    "Why is being a good listener important as a team captain?",
  ]

  const [amaraText, setAmaraText] = useState('')
  const [jaydenText, setJaydenText] = useState('')
  const [captainName, setCaptainName] = useState('')
  const [questions, setQuestions] = useState('')
  const [showMoreQuestions, setShowMoreQuestions] = useState(false)
  const [currentScreen, setCurrentScreen] = useState(1)

  const handleGeneratePDF = () => {
    const doc = new jsPDF()
    const leftMargin = 20
    const topMargin = 20
    const lineHeight = 10
    let cursorY = topMargin

    doc.setFontSize(16)
    doc.text('Sports Club Summary', leftMargin, cursorY)
    cursorY += lineHeight + 2

    doc.setFontSize(14)
    doc.text('Amara\'s Summary:', leftMargin, cursorY)
    cursorY += lineHeight
    const wrappedAmara = doc.splitTextToSize(amaraText || '-', 170)
    doc.text(wrappedAmara, leftMargin, cursorY)
    cursorY += wrappedAmara.length * lineHeight

    doc.text('Jayden\'s Summary:', leftMargin, cursorY + 4)
    cursorY += lineHeight + 4
    const wrappedJayden = doc.splitTextToSize(jaydenText || '-', 170)
    doc.text(wrappedJayden, leftMargin, cursorY)
    cursorY += wrappedJayden.length * lineHeight

    doc.text('Chosen Sports Captain:', leftMargin, cursorY + 4)
    cursorY += lineHeight + 4
    doc.setFont('helvetica', 'bold')
    doc.text(captainName || '-', leftMargin, cursorY)

    doc.save('sports-club-summary.pdf')
  }

  const loadMoreQuestions = () => {
    setShowMoreQuestions(true)
  }

  const nextScreen = () => {
    setCurrentScreen(2)
  }

  const prevScreen = () => {
    setCurrentScreen(1)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {currentScreen === 1 ? (
          <>
            {/* Screen 1 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Who Should Be the Sports Captain?</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              You get to choose the team captain for your school’s brand-new Sports Club! Two students—Amara and Jayden—are excited about the role. Both want to lead. You interview by asking thoughtful questions to decide who would make the best team captain.
              </p>
            </div>

            {/* Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Amara */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-600">Amara</h3>
                <div className="flex gap-4 text-left">
                  <Image src={C1} alt="Amara" className="rounded-xl w-28 h-28 object-cover" />
                  <ul className="text-gray-700 text-[16px] list-disc pl-4">
                    <li><strong>Strengths:</strong> Organised, calm under pressure, good at managing schedules and resolving conflicts.
                    </li>
                    <li><strong>Weakness:</strong> Not very sporty but makes everyone feel included and encouraged.</li>
                    <li><strong>Wants:</strong> To make the club fun and fair for everyone, even if they’re not athletic</li>
                  </ul>
                </div>
              </div>

              {/* Jayden */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Jayden</h3>
                <div className="flex gap-4 text-left">
                  <Image src={C2} alt="Jayden" className="rounded-xl w-28 h-28 object-cover" />
                  <ul className="text-gray-700 text-[16px] list-disc pl-4">
                    <li><strong>Strengths:</strong> Passionate about sports, high energy, always leading games.</li>
                    <li><strong>Weakness:</strong> Gets too competitive, doesn’t always listen to quieter voices.</li>
                    <li><strong>Wants:</strong> To focus on training and winning inter-school matches.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ask Questions */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex">

              <div className="w-1/2">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Ask Questions</h4>
                <textarea
                  value={questions}
                  onChange={(e) => setQuestions(e.target.value)}
                  className="w-full p-4 border rounded-xl min-h-[100px] focus:ring-2 focus:ring-indigo-500"
                  placeholder="What would you like to ask Amara and Jayden?"
                />
              </div>

              <div className="mt-4 w-1/2 text-left ml-4">
                <button
                  disabled={!questions}
                  onClick={loadMoreQuestions}
                  className={`mt-4 mb-4 cursor-pointer w-full py-2 rounded-xl text-lg font-semibold transition-all duration-300 ${!questions
                    ? "bg-indigo-300 text-white cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                >
                  {showMoreQuestions ? "More Questions Loaded" : "Suggest More Questions"}
                </button>

                {questions && showMoreQuestions && (
                  <div>
                    <ul className="list-disc pl-6 text-gray-800 space-y-1">
                      {moreQuestions.map((question, index) => (
                        <li key={index}>
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={nextScreen}
              className="w-full cursor-pointer bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition"
            >
              Start The Interview
            </button>
          </>
        ) : (
          <>
            {/* Screen 2 */}
            {/* <button
              onClick={prevScreen}
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
            >
              ← Back to Profiles
            </button> */}

            {/* Ask Questions (carried over from screen 1) */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex">
              <div className="w-1/2">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Your Questions</h4>
                <textarea
                  value={questions}
                  onChange={(e) => setQuestions(e.target.value)}
                  className="w-full p-4 border rounded-xl min-h-[100px] focus:ring-2 focus:ring-indigo-500"
                  placeholder="What would you like to ask Amara and Jayden?"
                />
              </div>

              <div className="mt-4 w-/12 text-left ml-4">
                {showMoreQuestions && (
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2 ml-2 font-semibold">Suggested Questions:</h5>
                    <ul className="list-disc pl-6 text-gray-800 space-y-1">
                      {moreQuestions.map((question, index)=>(
                        <li key={index}>{question}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Summaries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-2xl shadow">
                <h4 className="text-lg font-medium mb-2 text-purple-700">Summary: Amara</h4>
                <textarea
                  className="w-full p-4 border rounded-xl min-h-[100px] focus:ring-2 focus:ring-purple-400"
                  placeholder="Write a summary about Amara's leadership potential..."
                  value={amaraText}
                  onChange={(e) => setAmaraText(e.target.value)}
                />
              </div>
              <div className="bg-white p-4 rounded-2xl shadow">
                <h4 className="text-lg font-medium mb-2 text-blue-700">Summary: Jayden</h4>
                <textarea
                  className="w-full p-4 border rounded-xl min-h-[100px] focus:ring-2 focus:ring-blue-400"
                  placeholder="Write a summary about Jayden's leadership potential..."
                  value={jaydenText}
                  onChange={(e) => setJaydenText(e.target.value)}
                />
              </div>
            </div>

            {/* Final Choice */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Choose Your Captain</h4>
              <input
                type="text"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-green-500"
                placeholder="Type the name of your chosen captain..."
                value={captainName}
                onChange={(e) => setCaptainName(e.target.value)}
              />
            </div>

            {/* PDF Button */}
            <button
              onClick={handleGeneratePDF}
              className="cursor-pointer w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  )
}