'use client'

import C1 from "../assets/c1.jpeg";
import C2 from "../assets/c2.jpeg";

import Image from "next/image";
import { useState } from 'react'
import jsPDF from 'jspdf'

export default function RightColumn() {
  const [amaraText, setAmaraText] = useState('')
  const [jaydenText, setJaydenText] = useState('')
  const [captainName, setCaptainName] = useState('')
  const [questions, setQuestions] = useState('')
  const [showMoreQuestions, setShowMoreQuestions] = useState(false)

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

  const handleQuestions = (e) => {
    const val = e.target.value
    setQuestions(val)
  }

  const loadMoreQuestions = () => {
    setShowMoreQuestions(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-6">
          <div>
            <h2 className="text-[21px] font-bold text-gray-800 mb-2">Today, you’re in charge of choosing the team captain for a brand-new Sports Club at school.</h2>
            <p className="text-gray-700 text-[20px]">Two students—Amara and Jayden—want the role. You’ll interview them, ask questions, and decide who you think is the best fit for everyone in the club.</p>
          </div>

          {/* Amara Section */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-[21px] font-semibold text-purple-600 mb-2">Amara</h3>
            <div className="flex gap-4 items-start">
              <Image src={C1} alt="Amara" className="rounded-full w-50 h-30 object-cover" />
              <ul className="text-gray-700 text-[18px] list-disc pl-4 text-left">
                <li><strong>Strengths:</strong> Organised, calm under pressure, good at managing schedules and resolving conflicts.</li>
                <li><strong>Weakness:</strong> Not very sporty but makes everyone feel included and encouraged.</li>
                <li><strong>Wants:</strong> to make the club fun and fair for everyone—even if they’re not athletic.</li>
              </ul>
            </div>
          </div>

          {/* Jayden Section */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-[21px] font-semibold text-blue-600 mb-2">Jayden</h3>
            <div className="flex gap-4 items-start">
              <Image src={C2} alt="Jayden" className="rounded-full w-50 h-40 object-cover" />
              <ul className="text-gray-700 text-[18px] list-disc pl-4 text-left">
                <li><strong>Strengths:</strong> Passionate about sports, high energy, always leading games.</li>
                <li><strong>Weakness:</strong> Gets too competitive, doesn’t always listen to quieter voices.</li>
                <li><strong>Wants:</strong> to focus on training and winning inter-school matches.</li>
              </ul>
            </div>
          </div>
        </div>



        <div className="md:col-span-2 space-y-6">
          {/* First row: Textarea and Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>Questionnaire input box : </p>
              <textarea
                onChange={(e) => { handleQuestions(e) }}
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[200px]"
                placeholder="Note your questions here..."
              />
            </div>
            {questions != "" && showMoreQuestions &&
              <div>
                <h1><i>More questions</i></h1>
                <ul className="space-y-2 list-disc pl-6 text-gray-800 font-medium text-left text-[18px]">
                  <li>Why do you want to be the leader of the Sports Club?</li>
                  <li>How would you make sure everyone feels included in the club?</li>
                  <li>What would a typical club day look like with you in charge?</li>
                  <li>What would you do if two team members had an argument?</li>
                  <li>How do you handle losing a game or a tough challenge?</li>
                </ul>
              </div>
            }
          </div>

          {/* Button: Get more questions */}
          <button
            disabled={questions === ""}
            onClick={loadMoreQuestions}
            className={`w-full py-2 rounded-xl text-[18px] font-semibold transition-all duration-300
    ${questions === ""
                ? "bg-indigo-300 text-white cursor-not-allowed opacity-60"
                : "bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98]"}`}>
            Get more questions
          </button>

          {/* Amara and Jayden Summary Textareas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-[100px]"
              placeholder="Summary about Amara..."
              value={amaraText}
              onChange={(e) => setAmaraText(e.target.value)}
            />
            <textarea
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[100px]"
              placeholder="Summary about Jayden..."
              value={jaydenText}
              onChange={(e) => setJaydenText(e.target.value)}
            />
          </div>

          {/* Input: New Sports Captain */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">New Sports Captain is:</h3>
            <input
              type="text"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Type the chosen captain's name here..."
              value={captainName}
              onChange={(e) => setCaptainName(e.target.value)}
            />
          </div>

          {/* Button: Generate PDF */}
          <button
            onClick={handleGeneratePDF}
            className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
          >
            Generate PDF
          </button>
        </div>

      </div>
    </div>
  );
}
