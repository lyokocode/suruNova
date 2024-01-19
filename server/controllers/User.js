import { User } from "../models/User.js";

// GET ALL USERS
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}