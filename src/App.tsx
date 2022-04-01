import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import FittingRoomPage from "./pages/fitting-room/FittingRoomPage";
import TestPage from './pages/test-page/TestPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/fitting-room" element={<FittingRoomPage/>}/>
            <Route path="/test" element={<TestPage />}/>
            <Route path="*" element={<div>404 page not found</div>}/>
        </Routes>
    );
}

export default App;
