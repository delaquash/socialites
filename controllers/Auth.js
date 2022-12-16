import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User";

// register user route
export const register = async(req, res) => {
    try {
        const { firstName, lastName, email, password, picturePath, friends, location, occupation } = req.body;
        const salt = await jwt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = newUser({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 1000),
            impression: Math.floor(Math.random() * 1000)
        })
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}