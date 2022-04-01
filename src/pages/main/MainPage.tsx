import React, { useEffect, useState } from 'react';
import AppButtonRound from '../../components/AppButtonRound/AppButtonRound';
import { ButtonsContainer, NavigationButton, PageLayout } from './styled';
import infoIcon from '../../assets/icons/info.svg';
import enterArrow from '../../assets/icons/enterArrow.svg';
import Chat from '../../components/Chat/Chat';
import { useNavigate } from 'react-router-dom';
import { desktopResValue, smallResValue, tabletResValue, wideDesktopResValue } from '../../utils/breakpoints';

const MainPage = () => {
  const navigate = useNavigate();

  const [isChatVisible, setIsChatVisible] = useState(false);
  const [clientWidth, setClientWidth] = useState(window?.innerWidth);
  const [clientHeight, setClientHeight] = useState(window?.innerHeight);

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
    setIsChatVisible(prev => !prev);
  };

  // ===============================================

  const getFitRoomNavigationButtonCoords = () => {
    if (
      window.screen.orientation.angle === 90
      && window.screen.orientation.type === 'landscape-primary'
    ) {
      if (window.innerHeight) {
        return { top: '34%', left: '32%' };
      }
    }

    if (clientWidth <= smallResValue) {
      return { top: '25%', left: '7%' };
    } else if (clientWidth >= tabletResValue && clientWidth < desktopResValue) {
      return { top: '20%', left: '30%' };
    } else if (clientWidth >= desktopResValue && clientWidth < wideDesktopResValue) {
      return { top: '20%', left: '30%' };
    } else {
      // clientWidth >= wideDesktopRes
      return { top: '20%', left: '30%' };
    }
  };

  const getInfoButtonCoords = () => {
    if (
      window.screen.orientation.angle === 90
      && window.screen.orientation.type === 'landscape-primary'
    ) {
      if (clientHeight < smallResValue) {
        return { top: '44%', right: '14px' };
      }
    }

    return { right: '22px', top: '300px' }
  };

  const handleResize = () => {
    setClientWidth(window?.innerWidth);
    setClientHeight(window?.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  return (
    <PageLayout>

      <Chat
        isVisible={isChatVisible}
        visibilityHandler={toggleChatVisibility}
      />

      {!isChatVisible && (
        <AppButtonRound
          isPositionAbsolute={true}
          icon={infoIcon}
          {...getInfoButtonCoords()}
          onClick={toggleChatVisibility}
        />
      )}
      <AppButtonRound
        isPositionAbsolute={true}
        {...getFitRoomNavigationButtonCoords()}
        icon={enterArrow}
        onClick={onEnterArrowHandler}
      />

      <ButtonsContainer>
        <NavigationButton
          onClick={onGoToFittingRoomHandler}
          margin="0 0 22px 0"
        >
          GO TO FITTING ROOM
        </NavigationButton>
        <NavigationButton
          onClick={onBuyNowHandler}
        >
          BUY NOW
        </NavigationButton>
      </ButtonsContainer>
    </PageLayout>
  );
};

export default MainPage;
