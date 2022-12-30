import { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NavBar from './pages/NavBar/NavBar';
import ProfilePage from './pages/ProfilePage';
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from 'theme';
import { useAppSelector, useAppDispatch } from './state/hook';
import './App.css';


function App() {
  const mode = useSelector((state:any) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const auth = useAppSelector((state)=> state.auth)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile/:userId' element={<ProfilePage />} />
      </Routes>
    </ThemeProvider>
    
  )
}

export default App
