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
            lastName, 
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
                        
                    </FlexBetween>
                    <ManageAccountsOutlined />
                    </FlexBetween>
                    <Divider />
                    {/* Second Row */}
                    <Box p="1rem 0">
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <LocationOnOutlined fontSize="large" sx={{ color: main }}/>
                            <Typography color={medium}>{location}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <LocationOnOutlined fontSize="large" sx={{ color: main }}/>
                            <Typography color={medium}>{occupation}</Typography>
                        </Box>
                    </Box>
                    <Divider/>
                    {/* Third Row */}
                        <Box p="1rem 0">
                            <FlexBetween mb="0.5rem">
                                <Typography color={medium}>Who has viewed your profile?</Typography>
                                <Typography color={main} fontWeight="500">{viewedProfile}</Typography>
                            </FlexBetween>
                            <FlexBetween>
                                <Typography color={medium}>Impressions of your post</Typography>
                                <Typography color={main} fontWeight="500">{impressions}</Typography>
                            </FlexBetween>
                        </Box>
                    <Divider />
                        {/* Fourth Row */}
                        <Box p="1rem 0">
                            <Typography  fontSize="1rem" color={main} mb="1rem" fontWeight="500">Social Profiles</Typography>
                            <FlexBetween gap="1rem" mb="0.5rem">
                                <FlexBetween gap="1rem">
                                    <img src="../../assets/twitter.png" alt="Twitter" />
                                    <Box>
                                        <Typography color={main} fontWeight="500">Twitter</Typography>
                                        <Typography color={medium}>Social Networks</Typography>
                                    </Box>
                                </FlexBetween>
                                <EditOutlined sx={{ color: main }} />
                            </FlexBetween>

                            <FlexBetween gap="1rem">
                                <FlexBetween gap="1rem">
                                    <img src="../../assets/linkedin.png" alt="linkedin" />
                                    <Box>
                                        <Typography color={main} fontWeight="500">LinkedIN</Typography>
                                        <Typography color={medium}> Network Platform</Typography>
                                    </Box>
                                </FlexBetween>
                                <EditOutlined sx={{ color: main }} />
                            </FlexBetween>
                        </Box>
                
            </WidgetWrapper>
        )
}

export default UserWidget;