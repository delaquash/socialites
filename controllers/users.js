import User from "../model/User";

export const getUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

export const getUserFriends = async(req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id);

        /* Using the `Promise.all` method to return an array of promises. */
        // making multiple calls to friends
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        /* Destructuring the object and returning a new object with the same properties. */
        const formatedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath }
            }
        )
        res.status(200).json(formatedFriends)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}


export const addRemovefriend = async(req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);

        } else {
            user.friends.push(friendId);
            friend.friends.push(id)
        }
        await user.save();
        await friend.save()

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        /* Destructuring the object and returning a new object with the same properties. */
        const formatedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath }
            }
        )
        res.status(200).json(formatedFriends)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}