import mongoose from "mongoose"

const attendeeSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, maxlength: 100 },
    callStatus: { type: String, enum: ["PENDING", "InProgress", "COMPLETED"], default: "PENDING" },
  },
  { timestamps: true }
)

export default mongoose.model("Attendee", attendeeSchema)
