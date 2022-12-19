import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";

// register user route
// "firstName":"Olaide",
// "lastName":"Emmanuel",
// "email":"olaide1191@gmail.com",
// "pasword": "emmaolaide54",
// "picturePath": "https://avatars.githubusercontent.com/u/30915176?v=4",
// "friend":["tolu", "tobi", "bola"],
// "occupation": "developer",
// "viewedProfile":3,
// "impression":4
export const register = async(req, res) => {
    try {
        const { firstName, lastName, email, password, picturePath, friends, location, occupation } = req.body;
        const salt = await bcrypt.genSalt()
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

// LOGIN //
export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        /* Finding the user by email. */
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ message: "User does not exist" });

        // ensuring that password matches before logging in
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials..." });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        // delete password so it doesnt get sent back to front-end
        delete user.password
        res.status(200).json({ token, user })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}