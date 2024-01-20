import { User } from "../models/User.js";

// REGISTER
export const register = async (req, res) => {
    try {
        console.log("first")
        const newUser = await User.create({
            fullName: req.body.fullName,
        });

        return res.status(201).json(newUser);

    } catch (err) {
        console(err)
    }
}