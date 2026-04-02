'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { questions } from '@/data/questions'
import { Suspense } from 'react'

function ResultContent() {
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') || '0')
  const total = parseInt(searchParams.get('total') || '10')
  const answersRaw = searchParams.get('answers')
  const answers: (number | null)[] = answersRaw ? JSON.parse(answersRaw) : []

  const percentage = Math.round((score / total) * 100)

  const getEmoji = () => {
    if (percentage >= 90) return '🏆'
    if (percentage >= 70) return '🎉'
    if (percentage >= 50) return '👍'
    return '💪'
  }

  const getMessage = () => {
    if (percentage >= 90) return 'Outstanding!'
    if (percentage >= 70) return 'Great Job!'
    if (percentage >= 50) return 'Good Effort!'
    return 'Keep Practicing!'
  }

  const getScoreColor = () => {
    if (percentage >= 70) return 'text-green-600'
    if (percentage >= 50) return 'text-yellow-600'
    return 'text-red-500'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">{getEmoji()}</div>
          <h1 className="text-3xl font-extrabold text-indigo-700 mb-1">{getMessage()}</h1>
          <p className="text-gray-500 text-lg">Here's how you did:</p>
          <div className={`text-6xl font-black mt-4 ${getScoreColor()}`}>
            {score}<span className="text-3xl text-gray-400">/{total}</span>
          </div>
          <p className="text-gray-400 mt-1">{percentage}% Correct</p>
        </div>

        <div className="space-y-3 mb-8 max-h-64 overflow-y-auto pr-1">
          {questions.map((q, i) => {
            const userAnswer = answers[i]
            const isCorrect = userAnswer === q.correctAnswer
            const isSkipped = userAnswer === null
            return (
              <div
                key={q.id}
                className={`rounded-xl p-3 border ${
                  isSkipped
                    ? 'border-gray-200 bg-gray-50'
                    : isCorrect
                    ? 'border-green-200 bg-green-50'
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg mt-0.5">
                    {isSkipped ? '⏭️' : isCorrect ? '✅' : '❌'}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700 text-sm">{q.question}</p>
                    {!isCorrect && !isSkipped && (
                      <p className="text-xs text-green-700 mt-1">
                        Correct: <span className="font-medium">{q.options[q.correctAnswer]}</span>
                      </p>
                    )}
                    {isSkipped && (
                      <p className="text-xs text-gray-500 mt-1">
                        Skipped — Correct: <span className="font-medium">{q.options[q.correctAnswer]}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex gap-3">
          <Link
            href="/quiz"
            className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-md"
          >
            🔄 Retry Quiz
          </Link>
          <Link
            href="/"
            className="flex-1 text-center bg-white hover:bg-indigo-50 text-indigo-600 font-bold py-3 px-6 rounded-xl border-2 border-indigo-200 transition-all duration-200"
          >
            🏠 Home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading results...</div>}>
      <ResultContent />
    </Suspense>
  )
}
