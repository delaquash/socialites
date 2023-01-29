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
        return (
            <div>
                
            </div>
        )
}

export default UserWidget