import { 
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined, 
    ShareOutlined
 } from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import Friend from "./Friend";
import WidgetWrapper from "../../Components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setPost } from "../../state/authSlice";


const MyPostWidget = ({ 
    postId, 
    postUserId, 
    name, 
    description, 
    location, 
    picturePath, 
    userPicturePath, 
    likes, 
    comment 
}) => {
    const [isComment, setIsComment] = useState(false)
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const token = useSelector((state)=> state.token)
    const loggedInUserId = useSelector((state)=> state.user._id)
    const isLiked = Boolean(likes[loggedInUserId])
    const likedCount = Object.keys(likes).length
    const main = palette.neutral.main;
    const primary= palette.primary.main;

    const patchLike = async() =>{
        const patchRes = await fetch(`http://localhost:5000/post/${postId}/like`, {
            method: "PATCH",
            headers: { 
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: loggedInUserId })
        })
        const patchData = await patchRes.json();
        dispatch(setPost({ post: patchData }));
    }

  return (
    <WidgetWrapper m="2rem 0">
        <Friend 
            friendId={postUserId}
            name={name}
            subtitle={location}
            userPicturePath={userPicturePath}
        />
        <Typography color={main} sx={{ mt: "1rem"}}>
            {description}
        </Typography>
        {picturePath && (
            <img
                width="100%"
                height="auto"
                alt="post"
                style={{ marginTop: "0.75rem", borderRadius: "0.75rem" }}
                src={`http://localhost:5000/assets/${picturePath}`}
            />
        )}
        <FlexBetween mt="0.25rem">
            <FlexBetween gap="1rem">
                <FlexBetween gap="0.3rem">
                    <IconButton onClick={patchLike}>
                        {isLiked ? (
                            <FavoriteOutlined sx={{ color: primary }} />
                        ): <FavoriteBorderOutlined />}
                    </IconButton>
                    <Typography>{likedCount}</Typography>
                </FlexBetween>
                <FlexBetween gap="0.3rem">
                    <IconButton onClick={()=>setIsComment(!isComment)}>
                        <ChatBubbleOutlineOutlined />
                    </IconButton>
                    <Typography>{comments.length}</Typography>
                </FlexBetween>
            </FlexBetween>
            <IconButton>
                <ShareOutlined />
            </IconButton>
        </FlexBetween>
        {isComments && (
            <Box mt="0.5rem">
                {comment.map((comment, i)=>(
                    <Box key={`${name}-${i}`}>
                        <Divider />
                        <Typography sx={{color: main, m:"0.5rem 0", pl:"1rem"}}>
                            {comment}
                        </Typography>
                    </Box>
                ))}
                <Divider />
            </Box>
        )}
    </WidgetWrapper>
  )
}

export default MyPostWidget