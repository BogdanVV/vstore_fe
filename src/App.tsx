import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import FittingRoomPage from "./pages/fitting-room/FittingRoomPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/fitting-room" element={<FittingRoomPage />} />
      <Route
        path="*"
        element={<div style={{ fontSize: 40 }}>404</div>}
      />
    </Routes>
  );
}

export default App;
