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
    const [image, setImage] = useState(null)
    const [isImage, setIsImage] = useState(false)
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const { _id } = useSelector((state)=> state.user);
    const { token } = useSelector((state)=> state.token);
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
    const medium = palette.neutral.medium
    const mediumMain = palette.neutral.mediumMain

    const handlePost= async() => {
      const formData = new FormData()
      formData.append("userId", _id);
      formData.append("description", post);
      if(image){
        formData.append("picture", image);
        formData.append("picturePath", image.name);
      }
      const res = await fetch (`http://localhost:5000/post`, {
        method: "POST",
        body: formData,
        headers: { Authorization: `Bearer${token}`}
      })
      const post = res.json()
      /* Dispatching the action `setPost` with the payload `{ post }` */
      dispatch(setPost({ post }))
      setImage(null)
      setPost("")
    }

  return (
    <div>PostWidget</div>
  )
}

export default PostWidget