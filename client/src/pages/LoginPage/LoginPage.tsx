import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"


const LoginPage = () => {
  
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px");
  const screenSize = isNonMobileScreen ? "50%" : "93%"
  const theme: { palette: {
    mode: string; neutral: { light: string; dark: string; }; background: { default: string; alt: string; }; primary: { light: string; }; 
}; } = useTheme();
  return (
    <Box>
        <Box
            component="span"
            sx={{
              width: "100%",
              backgroundColor:"theme.pallete.background.alt",
              p:"1rem 6%",
              textAlign:"center"
            }}
        >
          <Typography fontWeight="bold" color="primary" fontSize="32">
              Sociopedia
          </Typography>
        </Box>
        <Box
            component="span"
            sx={{
              width: screenSize,
              p:"2rem",
              m:"2rem auto",
              borderRadius: "1.5rem",
              backgroundColor: "theme.pallete.background.alt"
            }}
        />
            <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem"}}>
              Welcome to Socipedia. The Socials of all Socials
          </Typography>
        </Box>
  );
};

export default LoginPage;