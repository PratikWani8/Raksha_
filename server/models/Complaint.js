import mongoose from "mongoose"

const complaintSchema = new mongoose.Schema({

complaintId:Number,
username:String,
incident_type:String,
description:String,
location:String,
evidence:String,
status:{
  type:String,
  default:"Pending"
}

},{timestamps:true})

export default mongoose.model("Complaint",complaintSchema)