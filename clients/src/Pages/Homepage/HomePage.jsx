import { useSelector } from 'react-redux';
import Navbar from '../NavBar/Navbar.jsx';
import { Box, useMediaQuery } from '@mui/material';
import UserWidget from '../Widget/UserWidget.jsx';
import PostWidget from '../Widget/PostWidget.jsx';
import PostsWidget from '../Widget/PostsWidget.jsx';
import AdvertWidget from '../Widget/AdvertWidget.jsx';
import FriendListWidget from '../Widget/FriendListWidget.jsx';

const Homepage = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")
  const { _id, picturePath }= useSelector((state)=> state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreen ? "flex":"block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath}/>
        </Box>
        <Box 
          flexBasis={isNonMobileScreen ? "42%" : undefined}
          mt={isNonMobileScreen ? undefined : "2rem"}  
        >
          <PostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreen && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
          )}
      </Box>
    </Box> 
  )
}

export default Homepage;