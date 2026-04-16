import express from "express"
import SOS from "../models/SOS.js"
import GuestSOS from "../models/GuestSOS.js"
import RandomSOS from "../models/RandomSOS.js"
import Complaint from "../models/Complaint.js"

const router = express.Router()

function distance(lat1, lon1, lat2, lon2){

const R = 6371

const dLat = (lat2-lat1) * Math.PI/180
const dLon = (lon2-lon1) * Math.PI/180

const a =
Math.sin(dLat/2)**2 +
Math.cos(lat1*Math.PI/180) *
Math.cos(lat2*Math.PI/180) *
Math.sin(dLon/2)**2

return R * 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a))

}

// HEATMAP API
router.get("/heatmap", async (req,res)=>{

try{

const sosData = await SOS.find()
const guestSOS = await GuestSOS.find()
const randomSOS = await RandomSOS.find()
const complaints = await Complaint.find()

let points = []

// REGISTERED SOS
sosData.forEach(s=>{

if(s.latitude && s.longitude){

points.push({
lat:s.latitude,
lng:s.longitude,
weight:2
})

}

})

// GUEST SOS
guestSOS.forEach(s=>{

if(s.latitude && s.longitude){

points.push({
lat:s.latitude,
lng:s.longitude,
weight:2
})

}

})

// RANDOM SOS
randomSOS.forEach(r=>{

points.push({
lat:r.latitude,
lng:r.longitude,
weight:r.severity
})

})

// COMPLAINTS
complaints.forEach(c=>{

if(c.latitude && c.longitude){

points.push({
lat:c.latitude,
lng:c.longitude,
weight:1
})

}

})

// CLUSTER INCIDENTS
let clusters = []

const radius = 0.2 // 200 meters

points.forEach(p=>{

let found = false

for(let cluster of clusters){

let d = distance(
cluster.lat,
cluster.lng,
p.lat,
p.lng
)

if(d < radius){

cluster.count += p.weight
found = true
break

}

}

if(!found){

clusters.push({
lat:p.lat,
lng:p.lng,
count:p.weight
})

}

})

// CONVERT TO HEATMAP DATA
const data = clusters.map(c=>{

let score = Math.min(1, c.count / 5)

return{

lat:c.lat,
lng:c.lng,
score:score,
count:c.count

}

})

res.json(data)

}catch(err){

console.log(err)
res.status(500).json({error:err.message})

}

})

export default router