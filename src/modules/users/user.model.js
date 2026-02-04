import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    stripeConnectId: { type: String },
    lastLoginAt: { type: Date },
    subscription: { type: Boolean, default: false },
    stripeCustomerId: { type: String },
    deletedAt: { type: Date },
  },
  { timestamps: true }
)

export default mongoose.model("User", userSchema)
