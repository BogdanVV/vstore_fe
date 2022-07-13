import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import Chat from '../../components/Chat/Chat';
import switchSceneEventHandler from "../../events/SwitchScene";
import GenderSelectionModal from "./components/GenderSelectionModal";

import { ControlButton, ControlButtonsContainer } from './styled';
import { contentWindow } from "../../App";
import { IDialogShowEventPayload } from "../../events/interfaces/dialogShow.interface";
import { EventEnum } from "../../events/enums/event.enum";
import { IClothesSelectCategoryPayload } from "../../events/interfaces/clothesSelectCategory.interface";
import { RoutesEnum } from "../../enums/routes.enum";
import { changeIsLoading, changeScene, selectCategory } from "../../store/slices/mainPageSlice";
import { ScenesEnum } from "../../events/enums/scenes.enum";

const MainPage = () => {
    const dispatch = useDispatch();
    const [isChatVisible, setIsChatVisible] = useState(false);

    const navigate = useNavigate();

    const onGoToFittingRoomHandler = () => {
        dispatch(changeScene({ scene: ScenesEnum.FITTING }));
        dispatch(changeIsLoading({ isLoading: true }));
        navigate(RoutesEnum.FITTING_ROOM);

        const switchSceneEvent = switchSceneEventHandler(ScenesEnum.FITTING);

        contentWindow?.dispatchEvent(switchSceneEvent);
    };

    const onBuyNowHandler = () => {
        console.log('onBuyNowHandler');
    };

    const toggleChatVisibility = () => {};

    useEffect(() => {
        const dialogShowEventHandler = (e: CustomEventInit<IDialogShowEventPayload>) => {
            const { show } = e.detail as IDialogShowEventPayload;

            setIsChatVisible(show);
        };

        const clothesCategorySelectEventHandler = (e: CustomEventInit<IClothesSelectCategoryPayload>) => {
            const { type, show } = e.detail as IClothesSelectCategoryPayload;

            dispatch(selectCategory({ category: show ? type : '', }));
        }

        contentWindow?.addEventListener(EventEnum.SHOW_DIALOG_EVENT_RESPONSE, dialogShowEventHandler);
        contentWindow?.addEventListener(EventEnum.CLOTHES_CATEGORY_SELECT_RESPONSE, clothesCategorySelectEventHandler);

        return () => {
            contentWindow?.removeEventListener(EventEnum.SHOW_DIALOG_EVENT_RESPONSE, dialogShowEventHandler);
            contentWindow?.removeEventListener(EventEnum.CLOTHES_CATEGORY_SELECT_RESPONSE, clothesCategorySelectEventHandler);
        };
    }, []); // eslint-disable-line

    return <>
        <Chat
            isVisible={isChatVisible}
            visibilityHandler={toggleChatVisibility}
        />
        <ControlButtonsContainer>
            <ControlButton onClick={onGoToFittingRoomHandler}>
                GO TO FITTING ROOM
            </ControlButton>
            <ControlButton onClick={onBuyNowHandler}>
                BUY NOW
            </ControlButton>
        </ControlButtonsContainer>
        <GenderSelectionModal />
    </>
};

export default MainPage;
