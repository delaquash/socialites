import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import UserImage from "../../Components/UserImage";
import { setFriends } from "../../state/authSlice";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";

const Friend = ({ friendId, name, userpicturePath,subtitle }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state)=> state.user);
    const token = useSelector((state)=> state.token);
    const friends = useSelector((state)=> state.user.friends);
    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const  primaryDark = palette.primary.dark;
    const main = palette.primary.main;

    const isFriend = friends.find((friend)=>friend._id === friendId)
    const patchFriend = async() => {
        const res = await fetch(`http://localhost:5000/${_id}/${friendId}`,{
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        const data = res.json()
        dispatch(setFriends({friends: data}))
    }
  return (
    <FlexBetween>
        <FlexBetween gap="1rem">
            <UserImage size="55px" image={userpicturePath}/>
            <Box
                onClick={()=>{navigate(`/profile/${friendId}`);
                navigate(0)
            }}
            >
                <Typography
                    color={main}
                    variant="h5"
                    fontWeight="500"
                    sx={{
                        "&:hover": {
                            cursor: "pointer",
                            color: palette.primary.light
                        }
                    }}
                >
                    {name}
                </Typography>
                <Typography color="medium" fontSize="0.75rem">{subtitle}</Typography>
            </Box>
        </FlexBetween>
        <IconButton
            onClick={()=>patchFriend()}
            sx={{ backgroundColor: primaryLight, p:"0.6rem" }}
        >
            {isFriend ? (
                <PersonRemoveOutlined sx={{color: primaryDark}} />
            ): ( <PersonAddOutlined sx={{ color: primaryDark }}/> )}
        </IconButton>
    </FlexBetween>
  )
}

export default Friend