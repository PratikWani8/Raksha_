import express from "express"
import axios from "axios"

const router = express.Router()

router.get("/address", async (req,res)=>{

const {lat,lng} = req.query

try{

const response = await axios.get(
"https://nominatim.openstreetmap.org/reverse",
{
params:{
lat:lat,
lon:lng,
format:"json"
},
headers:{
"User-Agent":"raksha-app"
}
}
)

const address = response.data.address

const place =
`${address.suburb || ""} ${address.city || address.town || ""}`.trim()

res.json({
place: place || response.data.display_name
})

}catch(err){

console.log("Address error:",err)

res.json({
place:`${lat}, ${lng}`
})

}

})

export default router