import styled from "styled-components";

export const ChatContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${({ isVisible }) => (
    isVisible ? 'calc(65% + 24px)' : 0
  )};
  display: flex;
  overflow: hidden;
  transition: height .5s ease-in-out, width .5s ease-in-out;

  @media (orientation: landscape) {
    top: unset;
    left: unset;
    height: ${({ isVisible }) => (
      isVisible ? 'calc(100% - 20px)' : 0
    )};
    width: ${({ isVisible }) => (
      isVisible ? 'calc(100% - 8px)' : 0
    )};
    box-sizing: border-box;
    
    @media (min-width: 813px) {
      top: unset;
      left: unset;
      height: ${({ isVisible }) => (
        isVisible ? '584px' : 0
      )};
      width: ${({ isVisible }) => (
        isVisible ? '400px' : 0
      )};
      box-sizing: border-box;
    }
    @media (min-width: 1195px) {
      right: 0;
      left: unset;
      height: ${({ isVisible }) => (
        isVisible ? '571px' : 0
      )};
      width: ${({ isVisible }) => (
        isVisible ? '480px' : 0
      )};
    }
    @media (min-width: 1281px) {
      right: 0;
      left: unset;
      height: ${({ isVisible }) => isVisible ? '628px' : 0};
      width: ${({ isVisible }) => isVisible ? '480px' : 0};
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      right: 0;
      left: unset;
      height: ${({ isVisible }) => (
        isVisible ? '628px' : 0
      )};
      width: ${({ isVisible }) => (
        isVisible ? '480px' : 0
      )};
    }
    @media (min-width: 769px) {
      right: 0;
      left: unset;
      height: ${({ isVisible }) => isVisible ? '584px' : 0};
      width: ${({ isVisible }) => isVisible ? '400px' : 0};
    }
    @media (min-width: 835px) {
      right: 0;
      left: unset;
      height: ${({ isVisible }) => (
              isVisible ? '628px' : 0
      )};
      width: ${({ isVisible }) => (
              isVisible ? '480px' : 0
      )};
    }
  }
`;
export const ChatWrapper = styled.div`
  flex: 1;
  position: relative;
  padding-top: 24px;
  display: grid;
  grid-template-rows: 69px 1fr;
  grid-template-columns: 1fr;
  
  @media (orientation: landscape) {
    padding-top: 0;
    padding-left: 24px;
    @media (min-width: 813px) {
      padding-left: 0;
      padding-top: 24px;
      grid-template-rows: 73px 1fr;
    }
    @media (min-width: 1195px) {
      padding-top: 28px;
      grid-template-rows: 78px 1fr;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      padding-top: 28px;
      grid-template-rows: 78px 1fr;
    }
    @media (min-width: 769px) {
      padding-top: 24px;
      grid-template-rows: 73px 1fr;
    }
    @media (min-width: 835px) {
      padding-top: 28px;
      grid-template-rows: 78px 1fr;
    }
   }
`;
export const ChatHideButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  
  @media (orientation: landscape) {
    left: 0;
    top: 50px;
    @media (min-width: 813px) {
      left: unset;
      top: unset;
      right: 31px;
      width: 48px;
      height: 48px;
    }
    @media (min-width: 1195px) {
      left: unset;
      top: unset;
      right: 36px;
      width: 56px;
      height: 56px;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      right: 36px;
      width: 56px;
      height: 56px;
    }
    @media (min-width: 769px) {
      right: 30px;
      width: 48px;
      height: 48px;
    }
    @media (min-width: 835px) {
      right: 36px;
      width: 56px;
      height: 56px;
    }
  }
`;
export const ChatHideButtonIcon = styled.img`
  width: 14.5px;
  
  @media (orientation: landscape) {
    transform: rotate(-90deg);
    @media (min-width: 813px) {
      transform: none;
      width: 15px;
    }
    @media (min-width: 1195px) {
      transform: none;
      width: 17px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 17px;
    }
    @media (min-width: 769px) {
      width: 15px;
    }
    @media (min-width: 835px) {
      width: 17px;
    }
  }
`;
export const ChatHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 27px;
  background-color: #333;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      gap: 20px;
      padding: 0 35px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    @media (min-width: 769px) {
      gap: 17px;
      padding: 0 29px;
    }
    @media (min-width: 835px) {
      gap: 20px;
      padding: 0 35px;
    }
  }
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      gap: 17px;
      padding: 0 29px;
    }
    @media (min-width: 1195px) {
      gap: 20px;
      padding: 0 35px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
`;
export const ConsultantAvatar = styled.img`
  height: 48px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      height: 50px;
    }
    @media (min-width: 1195px) {
      height: 56px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      height: 56px;
    }
    @media (min-width: 769px) {
      height: 50px;
    }
    @media (min-width: 835px) {
      height: 54px;
    }
  }
`;
export const ConsultantInfoContainer = styled.div`
  
`;
export const ConsultantName = styled.div`
  color: #FFF;
  font-family: Montserrat, sans-serif;
  font-size: 19px;
  line-height: 21px;
  letter-spacing: 0.02em;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 20px;
      line-height: 22px;
    }
    @media (min-width: 1195px) {
      font-size: 24px;
      line-height: 27px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 24px;
      line-height: 27px;
    }
    @media (min-width: 769px) {
      font-size: 20px;
      line-height: 23px;
    }
    @media (min-width: 835px) {
      font-size: 24px;
      line-height: 27px;
    }
  }
`;
export const ConsultantPost = styled.div`
  color: #FFF;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0.02em;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 16px;
      line-height: 22px;
    }
    @media (min-width: 1195px) {
      font-size: 16px;
      line-height: 27px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 16px;
      line-height: 27px;
    }
    @media (min-width: 769px) {
      font-size: 16px;
      line-height: 23px;
    }
    @media (min-width: 835px) {
      font-size: 16px;
      line-height: 27px;
    }
  }
`;
export const ChatContentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.66);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
export const ChatMessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 29px;
  max-height: 53%;
  overflow: auto;
  
  @media (orientation: landscape) {
    padding: 0 59px;
    max-height: 57%;
    @media (min-width: 813px) {
      padding: 0 31px;
    }
    @media (min-width: 1195px) {
      padding: 0 37px;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      padding: 0 37px;
    }
    @media (min-width: 769px) {
      padding: 0 31px;
    }
    @media (min-width: 769px) {
      padding: 0 37px;
    }
  }
`;
export const ChatDefaultQuestionsContainer = styled.div`
  padding: 0 8px 33px;
  max-height: 47%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  
  @media (orientation: landscape) {
    padding-bottom: 17px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    max-height: 43%;
    @media (min-width: 813px) {
      flex-direction: column;
      padding-left: 8px;
      padding-right: 8px;
    }
    @media (min-width: 1195px) {
      padding-left: 25px;
      padding-right: 25px;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      padding-left: 25px;
      padding-right: 25px;
    }
    @media (min-width: 769px) {
      padding-left: 9px;
      padding-right: 9px;
    }
    @media (min-width: 835px) {
      padding-left: 25px;
      padding-right: 25px;
    }
  }
`;
export const DefaultQuestion = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #717171;
  color: #FFF;
  border-radius: 100px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0;
  padding: 12px 8px;
  
  @media (orientation: landscape) {
    width: auto;
    min-width: 360px;
    flex-wrap: wrap;
    @media (min-width: 813px) {
      font-size: 16px;
      line-height: 24px;
      padding: 13px 0;
    }
    @media (min-width: 1195px) {
      font-size: 16px;
      line-height: 27px;
      padding: 15px 0;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 16px;
      line-height: 27px;
      padding: 15px 0;
    }
    @media (min-width: 769px) {
      font-size: 16px;
      line-height: 24px;
      padding: 12px 0;
    }
    @media (min-width: 835px) {
      font-size: 16px;
      line-height: 27px;
      padding: 15px 0;
    }
  }
`;
