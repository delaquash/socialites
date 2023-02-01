import { 
    AttachFileOutlined,
    DeleteOutline,
    EditOffOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined
 } from "@mui/icons-material";
import { 
    Box,
    Button,
    Divider,
    IconButton,
    InputBase,
    Typography,
    useMediaQuery,
    useTheme
 } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import Dropzone from "react-dropzone";
import WidgetWrapper from "../../Components/WidgetWrapper";
import UserImage from "../../Components/UserImage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/authSlice";

const PostWidget = ({ picturePath }) => {
    const [post, setPost] = useState("")
    const [image, setImage] = useState(false)
    const [isImage, setIsImage] = useState(null)
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const { _id } = useSelector((state)=> state.user);
    const { token } = useSelector((state)=> state.token);
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
    const medium = palette.neutral.medium
    const mediumMain = palette.neutral.mediumMain

  return (
    <div>PostWidget</div>
  )
}

export default PostWidget