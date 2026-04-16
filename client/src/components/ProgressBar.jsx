const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 my-4">
      <div
        className="bg-pink-500 h-3 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ProgressBar