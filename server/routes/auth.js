import express from "express";
import { login, register, logout } from "../controllers/Auth.js"
import { verifyToken } from "../utils/verifyToken";

const router = express.Router()

// REGISTER
router.post("/register", register);

// LOGIN
router.post("/login", login);

// LOGOUT
router.post("/logout", logout)

// CHECK AUTHANTICATED
router.get("/check", verifyToken, (req, res, next) => {
    res.send("you are loged in")
})


export default router