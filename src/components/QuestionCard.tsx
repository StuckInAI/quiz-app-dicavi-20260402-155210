'use client'

import { Question } from '@/data/questions'

interface Props {
  question: Question
  selectedAnswer: number | null
  onSelect: (index: number) => void
  showFeedback: boolean
}

export default function QuestionCard({ question, selectedAnswer, onSelect, showFeedback }: Props) {
  const getOptionStyle = (index: number) => {
    const base =
      'w-full text-left px-5 py-3 rounded-xl border-2 font-medium transition-all duration-200 text-sm '

    if (!showFeedback) {
      if (selectedAnswer === index) {
        return base + 'border-indigo-500 bg-indigo-50 text-indigo-700'
      }
      return base + 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700'
    }

    if (index === question.correctAnswer) {
      return base + 'border-green-500 bg-green-50 text-green-700'
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return base + 'border-red-400 bg-red-50 text-red-600'
    }
    return base + 'border-gray-200 text-gray-400'
  }

  return (
    <div className="mt-6">
      <p className="text-xl font-bold text-gray-800 mb-5 leading-snug">{question.question}</p>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && onSelect(index)}
            className={getOptionStyle(index)}
            disabled={showFeedback}
          >
            <span className="mr-3 font-bold text-indigo-400">{String.fromCharCode(65 + index)}.</span>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
