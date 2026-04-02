interface Props {
  timeLeft: number
  total: number
}

export default function Timer({ timeLeft, total }: Props) {
  const percentage = (timeLeft / total) * 100
  const color =
    percentage > 50 ? 'text-green-600' : percentage > 25 ? 'text-yellow-500' : 'text-red-500'

  return (
    <div className={`flex items-center gap-1 font-bold text-sm ${color}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {timeLeft}s
    </div>
  )
}
