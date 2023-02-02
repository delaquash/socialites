import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/authSlice";
import PostWidget from "./PostWidget";


const PostsWidget = ({userId, isProfile= false}) => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.posts);
    const token = useSelector((state)=> state.token);

    const getPosts = async() => {
        const res = await fetch("http://localhost:5000/post", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`}
        })
        const data = await res.json()
        /* Dispatching the action setPosts to the reducer. */
        dispatch(setPosts({ posts: data }))
    }

  return (
    <div>PostsWidget</div>
  )
}

export default PostsWidget