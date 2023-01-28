import { useState, useMemo } from 'react';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
// import ProfilePage from './pages/ProfilePage';
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from './theme';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={isAuth ? <HomePage /> : <Navigate to="/" />} />
        {/* <Route path='/profile/:userId' element={<ProfilePage />} /> */}
      </Routes>
    </ThemeProvider>
    
  )
}

export default App;
