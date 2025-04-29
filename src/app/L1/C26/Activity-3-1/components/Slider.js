"use client";

export default function Slider() {
    const tableData = [
      {
        section: "BEGINNING",
        prompts: [
          {
            question: "Who is the main actor?",
            examples: ["a brave pirate", "a curious astronaut", "a lost puppy"]
          },
          {
            question: "Where are they?",
            examples: ["on an island", "in space", "in a jungle"]
          },
          {
            question: "What is happening?",
            examples: ["exploring", "looking for something", "playing"]
          }
        ]
      },
      {
        section: "MIDDLE",
        prompts: [
          {
            question: "What is the big problem?",
            examples: ["a storm", "a locked treasure chest", "a spaceship running out of fuel"]
          },
          {
            question: "How does the actor feel?",
            examples: ["excited", "scared", "determined"]
          },
          {
            question: "Who helps?",
            examples: ["a friend", "an animal", "a magical creature"]
          }
        ]
      },
      {
        section: "END",
        prompts: [
          {
            question: "How is the problem solved?",
            examples: ["finding a hidden key", "fixing the spaceship", "making a new friend"]
          },
          {
            question: "What lesson is learnt?",
            examples: ["teamwork is important", "never give up", "kindness helps"]
          },
          {
            question: "How does the story end?",
            examples: ["a celebration", "returning home", "setting off on a new adventure"]
          }
        ]
      }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 flex justify-center items-center">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
          <h1 className="text-3xl font-bold text-center text-gray-700 py-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white">Storytelling Flow</h1>
          <div className="overflow-hidden">
            <table className="table-auto w-full text-sm text-gray-600">
              <thead>
                <tr className="bg-indigo-100 text-left">
                  <th className="text-[21px] border px-4 py-4 w-1/6 text-gray-800">Section</th>
                  <th className="text-[21px] border px-4 py-4 text-gray-800">Prompt</th>
                  <th className="text-[21px] border px-4 py-4 text-gray-800">Examples</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((sectionData) =>
                  sectionData.prompts.map((prompt, idx) => (
                    <tr key={prompt.question} className="hover:bg-gray-100 transition-all">
                      {idx === 0 && (
                        <td rowSpan={sectionData.prompts.length} className="text-[18px] border px-4 py-4 font-semibold bg-indigo-200 text-gray-800">
                          {sectionData.section}
                        </td>
                      )}
                      <td className="border px-3 text-[19px] py-4">{prompt.question}</td>
                      <td className="border px-3 text-[19px] py-4">
                        <p className="space-x-2">
                          {prompt.examples.join(", ")}
                        </p>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  