import mongoose from "mongoose"

const webinarSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, maxlength: 255 },
    description: { type: String },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    duration: { type: Number, default: 0 },
    webinarStatus: {
      type: String,
      enum: ["SCHEDULED", "WAITING_ROOM", "LIVE", "ENDED", "CANCELLED"],
      default: "SCHEDULED",
    },
    presenterId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tags: { type: [String], default: [] },
    ctaLabel: { type: String, maxlength: 50 },
    ctaType: { type: String, enum: ["BUY_NOW", "BOOK_A_CALL"], required: true },
    ctaUrl: { type: String },
    couponCode: { type: String, maxlength: 50 },
    couponEnabled: { type: Boolean, default: false },
    couponExpiry: { type: Date },
    lockChat: { type: Boolean, default: false },
    stripeProductId: { type: String },
    aiAgentId: { type: mongoose.Schema.Types.ObjectId, ref: "AI" },
    priceId: { type: String },
    recordingUrl: { type: String },
    thumbnail: { type: String },
    attendeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Attendee" },
    deletedAt: { type: Date },
  },
  { timestamps: true }
)

export default mongoose.model("Webinar", webinarSchema)
