import mongoose from "mongoose"

const progressSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  completedVideos: [Number],
})

export default mongoose.model("CourseProgress", progressSchema)