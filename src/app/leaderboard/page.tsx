'use client'

import Link from 'next/link'

const mockLeaderboard = [
  { rank: 1, name: 'Alice Johnson', score: 10, time: '2m 15s', badge: '🥇' },
  { rank: 2, name: 'Bob Smith', score: 9, time: '2m 45s', badge: '🥈' },
  { rank: 3, name: 'Carol White', score: 9, time: '3m 10s', badge: '🥉' },
  { rank: 4, name: 'David Lee', score: 8, time: '2m 30s', badge: '🏅' },
  { rank: 5, name: 'Eva Martinez', score: 8, time: '3m 00s', badge: '🏅' },
  { rank: 6, name: 'Frank Brown', score: 7, time: '2m 55s', badge: '🏅' },
  { rank: 7, name: 'Grace Kim', score: 7, time: '3m 20s', badge: '🏅' },
  { rank: 8, name: 'Henry Davis', score: 6, time: '3m 05s', badge: '' },
  { rank: 9, name: 'Isla Wilson', score: 5, time: '3m 40s', badge: '' },
  { rank: 10, name: 'Jack Taylor', score: 4, time: '4m 00s', badge: '' },
]

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-indigo-700">🏆 Leaderboard</h1>
          <p className="text-gray-400 mt-1">Top performers of all time</p>
        </div>

        <div className="space-y-3">
          {mockLeaderboard.map((entry) => (
            <div
              key={entry.rank}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 ${
                entry.rank === 1
                  ? 'bg-yellow-50 border border-yellow-200'
                  : entry.rank === 2
                  ? 'bg-gray-50 border border-gray-200'
                  : entry.rank === 3
                  ? 'bg-orange-50 border border-orange-200'
                  : 'bg-white border border-gray-100'
              }`}
            >
              <span className="w-8 text-center font-bold text-lg text-gray-500">
                {entry.badge || `#${entry.rank}`}
              </span>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{entry.name}</p>
                <p className="text-xs text-gray-400">Time: {entry.time}</p>
              </div>
              <span className="font-bold text-indigo-600 text-lg">{entry.score}/10</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href="/quiz"
            className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-md"
          >
            🚀 Play Now
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
