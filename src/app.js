import express from "express"
import cors from "cors"
import passport from "passport"
import "./config/passport.js"
import authRoutes from "./modules/auth/auth.routes.js"

const app = express()
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json())
app.use(passport.initialize())

app.use("/auth", authRoutes)

export default app
