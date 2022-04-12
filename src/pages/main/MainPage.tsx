import React, { createRef, RefObject, useEffect, useState } from 'react';
import infoIcon from '../../assets/icons/info.svg';
import enterArrow from '../../assets/icons/enterArrow.svg';
import Chat from '../../components/Chat/Chat';
import { useNavigate } from 'react-router-dom';
import {
  ControlButton,
  ControlButtonsContainer,
  EnterFitRoomButtonContainer,
  InfoButtonContainer,
  PageLayout
} from './styled';
import backgroundImage from '../../assets/images/main-page-background.jpg';
import RoundButtonOutlined from '../../components/RoundButtonOutlined/RoundButtonOutlined';
import Loader from '../../components/Loader/Loader';

const MainPage = () => {
  const [isBackgroundImageLoaded, setIsBackgroundImageLoaded] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const navigate = useNavigate();

  const pageLayoutRef: RefObject<HTMLDivElement> = createRef();

  const onGoToFittingRoomHandler = () => {
    navigate('fitting-room');
  };

  const onBuyNowHandler = () => {
    console.log('onBuyNowHandler');
  };

  const onEnterArrowHandler = () => {
    navigate('fitting-room');
  };

  const toggleChatVisibility = () => {
    setIsChatVisible(prev => {
      console.log('prev', prev)
      console.log('!prev', !prev)
      return !prev
    });
  };

  useEffect(() => {
    // loader handler
    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.onload = (e) => {
      if (pageLayoutRef.current) {
        pageLayoutRef.current.style.backgroundImage = `url(${backgroundImage})`;
      }
      setIsBackgroundImageLoaded(true);
    }
  }, []);

  return (
    <PageLayout ref={pageLayoutRef}>
      {!isBackgroundImageLoaded
        ? <Loader />
        : (
          <>
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
            <EnterFitRoomButtonContainer>
              <RoundButtonOutlined
                icon={enterArrow}
                onClick={onEnterArrowHandler}
              />
            </EnterFitRoomButtonContainer>
            <InfoButtonContainer isVisible={!isChatVisible}>
              <RoundButtonOutlined
                icon={infoIcon}
                onClick={toggleChatVisibility}
              />
            </InfoButtonContainer>
          </>
        )}
    </PageLayout>
  );
};

export default MainPage;
