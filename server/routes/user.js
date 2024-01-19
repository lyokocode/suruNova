import express from "express";
import { getAllUsers } from "../controllers/User.js"

const router = express.Router()

// GET ALL USERS
router.get("/", getAllUsers)

export default router