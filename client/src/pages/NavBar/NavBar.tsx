import React, { useState } from 'react';
import { Box, FormControl, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Close, DarkMode,Notifications, Help, LightMode, Menu, Message, Search } from "@mui/icons-material";
import { setLogout, setMode } from 'state/authSlice';
import { useNavigate } from 'react-router-dom';
import FlexBetween from 'components/FlexBetween';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from 'state/hook';
import { Theme, styled } from '@mui/material/styles';


const index = () => {
  const [isMobileToggled, setIsMobileToggled] = useState(false);
  const user = useAppSelector((state)=> state.auth.user);
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const isNonMobilScreen = useMediaQuery("(min-width: 1000px)");

  const theme: { palette: { neutral: { light: any; dark: any; }; background: { default: any; alt: any; }; primary: { light: any; }; }; } = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;
  
  return (
    <FlexBetween padding="1rem 6%" sx={{backgroundColor: alt}}>
        <FlexBetween gap="1.75rem">
          <Typography
              fontWeight="bold"
              fontSize="clamp(1rem, 2rem, 2.35rem)"
              color= "primary"
              onClick={()=>navigate("/home")}
              sx={{
                "&:hover": {
                  color: primaryLight,
                  cursor: "pointer"
                }
              }} 
          >
            Sociopedia
          </Typography>
        </FlexBetween>
    </FlexBetween>
  )
}

export default index