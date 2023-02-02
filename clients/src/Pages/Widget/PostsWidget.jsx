import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/authSlice";
import PostWidget from "./PostWidget";

const PostsWidget = ({userId, isProfile= false}) => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.posts);
    console.log(posts);
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

    const getUserPosts = async() => {
      const response = await fetch (`http://localhost:5000/post/${userId}/posts`, {
        method: "GET",
        headers: { Authorization : `Bearer ${token}`}
      })
      const userResponse = await response.json()
      dispatch(setPosts({ posts: userResponse }))
    }

    useEffect(()=> {
      if(isProfile){
        getUserPosts()
      } else {
        getPosts()
      }
    }, [])

  return (
    <>
      {posts.map(({_id,
           firstName, 
           lastName, 
           userId,
           description,
           location,
           picturePath,
           userPicturePath,
           likes,
           comment
           })=> (
            <PostWidget 
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comment={comment}
            />
           ))}
    </>
  )
}

export default PostsWidget