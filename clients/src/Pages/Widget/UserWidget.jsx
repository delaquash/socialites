import { 
    EditOutlined, 
    LocationOnOutlined, 
    ManageAccountsOutlined, 
    WorkOutlineOutlined
} from "@mui/icons-material";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import UserImage from "../../Components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../Components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null)
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state)=> state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        const getUserResponse = await axios(`http://localhost:5000/users/${userId}`, {
            method: "GET",
            headers: {Autorization: `Bearer ${token}`},

        })
        const data = await getUserResponse.json()
        setUser(data)
    }

    useEffect(()=> {
        getUser()
    }, [])

    if(!user){
        return null
    }

    const { firstName, 
            lastNmae, 
            location, 
            occupation, 
            viewedProfile, 
            impressions, 
            friends 
        } = user;

        return (
            <WidgetWrapper>
                <FlexBetween
                    gap="0.5rem"
                    pb="1.1rem"
                    onClick={()=> navigate(`/profile/${userId}`)}
                >
                    <FlexBetween gap="1rem">
                        <UserImage image={picturePath}/>
                        <Box>
                            <Typography
                                variant="h4"
                                fontWeight="500"
                                color={dark}
                                sx={{
                                    "&:hover": {
                                        color: palette.primary.light,
                                        cursor: "pointer"
                                    }
                                }}
                            >
                                {firstName} {lastName}
                            </Typography>
                            <Typography color={medium}>{friends.length} friends</Typography>
                        </Box>
                        <ManageAccountsOutlined />
                    </FlexBetween>

                </FlexBetween>
            </WidgetWrapper>
        )
}

export default UserWidget