import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import MainPage from "./pages/main/MainPage";
import FittingRoomPage from "./pages/fitting-room/FittingRoomPage";
import Loader from "./components/Loader/Loader";

import { IRootState } from "./store/types";
import { changeIsLoading } from "./store/slices/mainPageSlice";
import { EventEnum } from "./events/enums/event.enum";
import { PageLayout } from "./pages/main/styled";

export const iFrame = document.getElementById("app") as HTMLIFrameElement;
export const contentWindow = iFrame.contentWindow;

const App = () => {
    const dispatch = useDispatch();
    
    const { isLoading } = useSelector((state: IRootState) => state.mainPage);
    
    useEffect(() => {
        const loadingEndEventHandler = () => {
            dispatch(changeIsLoading({ isLoading: false }));
        };

        contentWindow?.addEventListener(EventEnum.LOADING_END_RESPONSE, loadingEndEventHandler);
        contentWindow?.addEventListener(EventEnum.SWITCH_SCENE_RESPONSE, loadingEndEventHandler);

        return () => {
            contentWindow?.removeEventListener(EventEnum.LOADING_END_RESPONSE, loadingEndEventHandler);
            contentWindow?.removeEventListener(EventEnum.SWITCH_SCENE_RESPONSE, loadingEndEventHandler);
        };
    }, []) // eslint-disable-line

    return <>
        {
            isLoading ? <PageLayout>
                <Loader/>
            </PageLayout> : <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/fitting-room" element={<FittingRoomPage/>}/>
                <Route
                    path="*"
                    element={<div style={{ fontSize: 40 }}>404</div>}
                />
            </Routes>
        }
    </>
}

export default App;
