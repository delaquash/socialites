import { 
    AttachFileOutlined,
    DeleteOutline,
    EditOutlined,
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
    const  token  = useSelector((state)=> state.token);
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
      const post =await res.json()
      /* Dispatching the action `setPost` with the payload `{ post }` */
      dispatch(setPost({ post }))
      setImage(null)
      setPost("")
    }

  return (
    <WidgetWrapper>
      <FlexBetween>
        <UserImage image={picturePath} />
        <InputBase 
            placeholder="What is on your mind..."
            onChange={(e)=> setPost(e.target.value)}
            value={post}
            sx={{
              width: "100%",
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1rem 2rem"
            }}
        />
      </FlexBetween>
      {isImage && (
        <Box
            border={`1px solid ${medium}`}
            borderRadius="5px"
            mt="1rem"
            p="1rem"
        >
          <Dropzone
                  acceptedFiles=".jpg,.jpeg,.png"
                  multiple={false}
                  onDrop={(acceptedFiles) =>
                    setImage( acceptedFiles[0])
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <FlexBetween>
                       <Box
                      {...getRootProps()}
                      border={`2px dashed ${palette.primary.main}`}
                      p="1rem"
                      width="100%"
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                      <input {...getInputProps()} />
                      {!image ? (
                        <p>Add Image Here</p>
                      ) : (
                        <FlexBetween>
                          <Typography>{image.name}</Typography>
                          <EditOutlined />
                        </FlexBetween>
                      )}
                    </Box>
                    {image && (
                      <IconButton
                          onClick={()=>setImage(null)}
                          sx={{ width: "15%" }}
                      >
                        <DeleteOutline />
                      </IconButton>
                    )}
                    </FlexBetween>
                  )}
                </Dropzone>
        </Box>
        
      )}
      <Divider sx={{ margin: "1.25rem 0" }} />
      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={()=> setIsImage(!isImage)}>
            <ImageOutlined sx={{ color: mediumMain }}/>
            <Typography
                color={mediumMain}
                sx={{ "&:hover" : {cursor: "pointer", color: medium }}}
            >
              Image
            </Typography>
        </FlexBetween>
        {isNonMobileScreen ? (
          <>
            <FlexBetween gap="0.25rem">
              <GifBoxOutlined sx={{ color: mediumMain }}/>
              <Typography color={mediumMain}>Clif</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem">
              <AttachFileOutlined sx={{ color: mediumMain }}/>
              <Typography color={mediumMain}>Attachment</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem">
              <MicOutlined sx={{ color: mediumMain }}/>
              <Typography color={mediumMain}>Audio</Typography>            
            </FlexBetween>
          </>
        ): (
          <FlexBetween gap="0.25rem">
            <MoreHorizOutlined sx={{ color: mediumMain }}/>
          </FlexBetween>
        )}
        <Button
          disabled={!post}
          onClick={handlePost}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem" 
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  )
}

export default PostWidget;