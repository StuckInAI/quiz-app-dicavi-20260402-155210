interface Props {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: Props) {
  const percentage = (current / total) * 100
  return (
    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6">
      <div
        className="bg-indigo-500 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
