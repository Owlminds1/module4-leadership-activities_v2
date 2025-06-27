'use client'

import { useState } from 'react'
import { jsPDF } from 'jspdf'
import './style.css'

export default function P3() {
  const seenHeading = "Plan The Campaign"

  const questions = [
    "Campaign Title",                               // Step 0
    "What problem does your campaign solve?",       // Step 1
    "What change do you want to see?",
    "How will people act with you?",
    "Where will your campaign occur?",
    "Who can help run your campaign?",
    "Create a Campaign Slogan",                    // Step 2
    "Create a Campaign Poster with Google Gemini"  // Step 3
  ]

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(Array(questions.length).fill(''))

  const handleChange = (index, value) => {
    const updatedAnswers = [...answers]
    updatedAnswers[index] = value
    setAnswers(updatedAnswers)
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(18)
    doc.text('The Campaign', 10, 15)
    doc.setFontSize(12)

    let y = 30

    questions.forEach((question, index) => {
      const splitQuestion = doc.splitTextToSize(`${index + 1}. ${question}`, 180)
      doc.text(splitQuestion, 10, y)
      y += splitQuestion.length * 7

      const splitAnswer = doc.splitTextToSize(`Ans: ${answers[index] || '-'}`, 180)
      doc.text(splitAnswer, 10, y)
      y += splitAnswer.length * 7 + 5

      if (y > 270) {
        doc.addPage()
        y = 20
      }
    })

    doc.save('The Campaign.pdf')
  }

  const renderStep = () => {
    if (step === 0) {
      return (
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <p className="text-lg font-semibold text-gray-800 mb-3">1. {questions[0]}</p>
          <textarea
            value={answers[0]}
            onChange={(e) => handleChange(0, e.target.value)}
            placeholder="Type your campaign title..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>
      )
    }

    if (step === 1) {
      return (
        <>
          <div className="mb-6 text-left">
            <h2 className="text-2xl font-bold text-purple-700">Build the Campaign</h2>
            <p className="text-gray-700 mt-2">
              Let's plan the campaign. I’ll ask some questions to help us get ready!
            </p>
            <div className="mt-4 text-blue-800 text-xl font-semibold">
              Campaign Title: {answers[0] || <span className="italic text-gray-500">[not provided yet]</span>}
            </div>
          </div>

          <div className="space-y-8">
            {questions.slice(1, 6).map((question, i) => (
              <div key={i + 1} className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  {i + 2}. {question}
                </p>
                <textarea
                  value={answers[i + 1]}
                  onChange={(e) => handleChange(i + 1, e.target.value)}
                  placeholder="Type your answer here..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>
            ))}
          </div>
        </>
      )
    }

    if (step === 2) {
      return (
        <>
          <div className="mb-4 text-blue-800 text-xl font-semibold">
            Campaign Title: {answers[0] || <span className="italic text-gray-500">[not provided yet]</span>}
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
            <p className="text-lg font-semibold text-gray-800 mb-3">{questions[6]}</p>
            <textarea
              value={answers[6]}
              onChange={(e) => handleChange(6, e.target.value)}
              placeholder="Create a catchy slogan..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>
        </>
      )
    }

    if (step === 3) {
      return (
        <>
          <div className="mb-4 text-blue-800 text-xl font-semibold">
            Campaign Title: {answers[0] || <span className="italic text-gray-500">[not provided yet]</span>}
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
            <p className="text-lg font-semibold text-gray-800">{questions[7]}</p>
          </div>
        </>
      )
    }
  }

  return (
    <div className="slidesMainContainer p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-blue-700">{seenHeading}</h1>

      {renderStep()}

      <div className="flex justify-between items-center mt-10">
        {step > 0 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition-all"
          >
            Back
          </button>
        ) : <div></div>}

        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Next
          </button>
        ) : (
          <button
            onClick={generatePDF}
            className="bg-green-600 text-white px-8 py-3 text-lg rounded-lg shadow hover:bg-green-700 transition-all hover:scale-105"
          >
            Generate PDF
          </button>
        )}
      </div>
    </div>
  )
}
