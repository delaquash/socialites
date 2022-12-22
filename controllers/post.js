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
        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const likePost = async(req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId)
        } else {
            post.likes.set(userId, true)
        }
        const updatedPost = await Post.findByIdAndUpdate(id, { likes: post.likes }, { new: true });
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getUserPost = async(req, res) => {
    try {
        const { userId } = req.params
        const userPost = Post.find({ userId })
        res.status(201).json(userPost);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// read post
export const getFeedPost = async(req, res) => {
    try {
        const post = await Post.find()
        res.status(201).json(post)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}