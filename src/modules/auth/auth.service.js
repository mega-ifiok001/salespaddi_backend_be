import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../users/user.model.js"

export const registerUser = async (name, email, password) => {
  const exists = await User.findOne({ email })
  if (exists) throw new Error("User already exists")

  const hashed = await bcrypt.hash(password, 12)

  const user = await User.create({
    name,
    email,
    password: hashed,
  })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
  return { user, token }
}

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) throw new Error("Invalid credentials")

  const match = await bcrypt.compare(password, user.password)
  if (!match) throw new Error("Invalid credentials")

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
  return { user, token }
}
