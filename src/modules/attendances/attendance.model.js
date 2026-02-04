import mongoose from "mongoose"

const attendanceSchema = new mongoose.Schema(
  {
    webinarId: { type: mongoose.Schema.Types.ObjectId, ref: "Webinar", required: true },
    attendeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Attendee", required: true },
    joinedAt: { type: Date, default: Date.now },
    leftAt: { type: Date },
    attendedType: {
      type: String,
      enum: ["REGISTERED","ATTENDED","ADDED_TO_CART","FOLLOW_UP","BREAKOUT_ROOM","CONVERTED"],
      required: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Attendee" },
  },
  { timestamps: true }
)

attendanceSchema.index({ attendeeId: 1, webinarId: 1 }, { unique: true })

export default mongoose.model("Attendance", attendanceSchema)
