import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/quiz-icon.svg"
            alt="Quiz Icon"
            width={80}
            height={80}
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-3">Quiz App</h1>
        <p className="text-gray-500 mb-8 text-lg">
          Test your knowledge with our fun and interactive quiz! Answer questions across various topics and see how well you score.
        </p>
        <div className="space-y-4">
          <Link
            href="/quiz"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-lg"
          >
            🚀 Start Quiz
          </Link>
          <Link
            href="/leaderboard"
            className="block w-full bg-white hover:bg-indigo-50 text-indigo-600 font-bold py-3 px-6 rounded-xl border-2 border-indigo-200 transition-all duration-200 text-lg"
          >
            🏆 Leaderboard
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">10 Questions &bull; Multiple Choice &bull; Timed</p>
      </div>
    </main>
  )
}
