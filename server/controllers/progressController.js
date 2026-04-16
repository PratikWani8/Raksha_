import CourseProgress from "../models/CourseProgress.js"

export const updateProgress = async (req, res) => {
  const { userId, videoId } = req.body

  let progress = await CourseProgress.findOne({ userId })

  if (!progress) {
    progress = new CourseProgress({ userId, completedVideos: [] })
  }

  if (!progress.completedVideos.includes(videoId)) {
    progress.completedVideos.push(videoId)
  }

  await progress.save()
  res.json(progress)
}

export const getProgress = async (req, res) => {
  const { userId } = req.params
  const progress = await CourseProgress.findOne({ userId })
  res.json(progress)
}