import Post from "../model/Post.js";
import User from "../model/User.js";

export const createPost = async(req, res) => {
    try {
        const { picturePath, userId, description } = req.params;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            picturePath: user.picturePath,
            description,
            picturePath,
            likes: [],
            comment: []
        })
        await newPost.save();
        const post = await Post.find();
        res.status(201).json(post)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const likePost = async(req, res) => {

}

export const getUserPost = async(req, res) => {

}

export const getFeedPost = async(req, res) => {

}