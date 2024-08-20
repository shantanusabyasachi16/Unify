import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from './Auth/Auth';
import Chat from './pages/Chat';
import Profile from './pages/Profile';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;