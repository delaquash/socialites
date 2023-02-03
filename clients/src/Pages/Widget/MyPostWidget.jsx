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
    
  return (
    <div>
        MyPostWidget
    </div>
  )
}

export default MyPostWidget