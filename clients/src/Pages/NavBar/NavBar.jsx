import { useState } from 'react';
import { Box, FormControl, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Close, DarkMode,Notifications, Help, LightMode, Menu, Message, Search } from "@mui/icons-material";
import { setLogout, setMode } from '../../state/authSlice';
import { useNavigate } from 'react-router-dom';
import FlexBetween from '../../components/FlexBetween';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../state/hook';

const NavBar = () => {
    const [isMobileToggled, setIsMobileToggled] = useState(false);
  return (
    <div>NavBar</div>
  )
}

export default NavBar