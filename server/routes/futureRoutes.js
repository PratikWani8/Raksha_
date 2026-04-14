import express from "express"
import axios from "axios"

const router = express.Router()

router.get("/future-hotspots", async (req,res)=>{

try{

const ai = await axios.get(
"http://localhost:8000/future-hotspots"
)

res.json(ai.data)

}catch(err){

res.status(500).json({error:"AI prediction failed"})

}

})

export default router