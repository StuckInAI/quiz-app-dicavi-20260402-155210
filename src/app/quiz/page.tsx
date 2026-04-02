'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { questions } from '@/data/questions'
import ProgressBar from '@/components/ProgressBar'
import QuestionCard from '@/components/QuestionCard'
import Timer from '@/components/Timer'

const TIME_PER_QUESTION = 30

export default function QuizPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const [showFeedback, setShowFeedback] = useState(false)

  const currentQuestion = questions[currentIndex]

  const handleNext = useCallback(
    (chosenAnswer: number | null = selectedAnswer) => {
      const isCorrect = chosenAnswer === currentQuestion.correctAnswer
      const newScore = isCorrect ? score + 1 : score
      const newAnswers = [...answers]
      newAnswers[currentIndex] = chosenAnswer

      setShowFeedback(true)

      setTimeout(() => {
        if (currentIndex + 1 < questions.length) {
          setCurrentIndex(currentIndex + 1)
          setSelectedAnswer(null)
          setTimeLeft(TIME_PER_QUESTION)
          setShowFeedback(false)
          setScore(newScore)
          setAnswers(newAnswers)
        } else {
          const params = new URLSearchParams({
            score: newScore.toString(),
            total: questions.length.toString(),
            answers: JSON.stringify(newAnswers),
          })
          router.push(`/result?${params.toString()}`)
        }
      }, 1000)
    },
    [currentIndex, selectedAnswer, score, answers, currentQuestion, router]
  )

  useEffect(() => {
    if (showFeedback) return
    if (timeLeft === 0) {
      handleNext(null)
      return
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft, showFeedback, handleNext])

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl w-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
            Question {currentIndex + 1} / {questions.length}
          </span>
          <Timer timeLeft={timeLeft} total={TIME_PER_QUESTION} />
        </div>

        <ProgressBar current={currentIndex + 1} total={questions.length} />

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelect={setSelectedAnswer}
          showFeedback={showFeedback}
        />

        <button
          onClick={() => handleNext()}
          disabled={selectedAnswer === null || showFeedback}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-lg shadow-md"
        >
          {currentIndex + 1 === questions.length ? 'Finish Quiz' : 'Next Question →'}
        </button>
      </div>
    </main>
  )
}
