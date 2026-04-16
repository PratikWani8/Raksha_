import { motion } from "framer-motion"

const VideoCard = ({ video, onClick, completed }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-4 rounded-xl cursor-pointer ${
        completed ? "bg-green-200" : "bg-white"
      } shadow-md`}
      onClick={() => onClick(video)}
    >
      <h3 className="font-semibold">{video.title}</h3>
    </motion.div>
  )
}

export default VideoCard