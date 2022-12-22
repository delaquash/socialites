import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NavBar from './pages/NavBar';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/profile/:userId' element={<ProfilePage />} />
    </Routes>
  )
}

export default App
