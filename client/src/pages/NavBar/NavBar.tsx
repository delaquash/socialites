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
  const user = useAppSelector((state)=> state.auth.user);
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const isNonMobilScreen = useMediaQuery("(min-width: 1000px)");

  const theme: { palette: {
    mode: string; neutral: { light: string; dark: string; }; background: { default: string; alt: string; }; primary: { light: string; }; 
}; } = useTheme();
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
          {isNonMobilScreen &&(
            <FlexBetween 
                sx={{backgroundColor: neutralLight}} 
                borderRadius="9px" 
                gap="3rem" 
                padding="0.1rem 1.5rem">
                  <InputBase placeholder='Search......'/>
                  <IconButton>
                    <Search />
                  </IconButton>
            </FlexBetween>
            )}
        </FlexBetween>

        {/* Desktop Nav */}
      {isNonMobilScreen ? (
      <FlexBetween gap="2rem">
      <IconButton onClick={()=>dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ fontSize: "25px"}} />
            ): (
            <LightMode sx={{ color: dark, fontSize: "25px" }} />
                )}
              </IconButton>
                <Message sx={{ fontSize: "25px" }} />
                  <Notifications sx={{ fontSize: "25px" }} />
                    <Help sx={{ fontSize: "25px" }} />
                      <FormControl 
                          variant='standard'  
                          value={fullName}
                      >
                      <Select
                          value={fullName}
                          sx={{
                            backgroundColor: neutralLight,
                            width: "150px",
                            borderRadius: "0.25rem",
                            p: "0.25rem 1rem",
                            "& .MuiSvgIcon-root": {
                              pr: "0.25rem",
                              width: "3rem"
                            },
                            "& .MuiSelect-select:focus": {
                              backgroundColor: neutralLight
                            }
                          }}
                          input= {<InputBase />}>
                            <MenuItem value={fullName}>
                              <Typography>
                                {fullName}
                              </Typography>
                            </MenuItem>
                            <MenuItem onClick={()=> dispatch(setLogout())} />
                          </Select>
                        </FormControl>
                        </FlexBetween>
                        ) : (
                          <IconButton
                            onClick={()=>setIsMobileToggled(!setIsMobileToggled)}
                          >
                            <Menu />
                          </IconButton>
    )}
       {/* MOBILE NAV */}
  {!isNonMobilScreen && isMobileToggled && (
    <Box
        // component={box}
        sx={{
          position:"fixed",
          right:"0",
          bottom:"0",
          height:"100%",
          zIndex:"10",
          maxWidth:"500px",
          minWidth:"300px",
          backgroundColor:{background}
        }}
       
    >
      {/* Close Icon */}
      <Box display="flex" justifyContent="flex-end" p="1rem">
          <IconButton
              onClick={() => setIsMobileToggled(!isMobileToggled)}
          >
            <Close />
          </IconButton>
      </Box>
      {/* MENU ITEMS */}
<FlexBetween gap="3rem" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
<IconButton onClick={()=>dispatch(setMode())} sx={{fontSize: "25px"}}>
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ fontSize: "25px"}} />
            ): (
            <LightMode sx={{ color: dark, fontSize: "25px" }} />
                )}
              </IconButton>
                <Message sx={{ fontSize: "25px" }} />
                  <Notifications sx={{ fontSize: "25px" }} />
                    <Help sx={{ fontSize: "25px" }} />
                      <FormControl variant='standard'  value={fullName}>
                      <Select
                          value={fullName}
                          sx={{
                            backgroundColor: neutralLight,
                            width: "150px",
                            borderRadius: "0.25rem",
                            p: "0.25rem 1rem",
                            "& .MuiSvgIcon-root": {
                              pr: "0.25rem",
                              width: "3rem"
                            },
                            "& .MuiSelect-select:focus": {
                              backgroundColor: neutralLight
                            }
                          }}
                          input= {<InputBase />}>
                            <MenuItem value={fullName}>
                              <Typography>
                                {fullName}
                              </Typography>
                            </MenuItem>
                            <MenuItem onClick={()=> dispatch(setLogout())} />
                          </Select>
                        </FormControl>
      </FlexBetween>
    </Box>
  )}
    </FlexBetween>
  )
}

export default NavBar;