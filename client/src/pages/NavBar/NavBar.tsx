import React, { useState } from 'react';
import { Box, FormControl, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Close, DarkMode,Notifications, Help, LightMode, Menu, Message, Search } from "@mui/icons-material";
import { setLogout, setMode } from 'state/authSlice';
import { useNavigate } from 'react-router-dom';
import FlexBetween from 'components/FlexBetween';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from 'state/hook';
// import { useTheme, Theme } from '@emotion/react';
import { Theme } from '@mui/material/styles';;

export interface Pallete {
  neutral: string,
}

const index = () => {
  const [isMobileToggled, setIsMobileToggled] = useState(false);
  const selector = useAppSelector((state)=> state.auth.user);
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const isNonMobilScreen = useMediaQuery("(min-width: 1000px)");

  const theme: Theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
    <div>index</div>
  )
}

export default index