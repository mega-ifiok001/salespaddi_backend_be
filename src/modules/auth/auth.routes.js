import { Router } from "express"
import { register, login } from "./auth.controller.js"
import { protect } from "../../middlewares/auth.middleware.js"

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/me", protect, (req, res) => {
  res.json({ message: "Access granted", user: req.user })
})

export default router
