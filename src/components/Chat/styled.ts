import styled from "styled-components";
import { smallRes } from '../../utils/breakpoints';

export const ChatContainer = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  transition: height .5s ease-out;
  height: ${({ isVisible }: { isVisible: boolean }) => isVisible ? '645px' : 0};
  width: 480px;
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;

  @media (max-width: ${smallRes}) {
    right: 0;
    left: 0;
    bottom: 0;
    width: unset;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: ${({ isVisible }: { isVisible: boolean }) => isVisible ? '565px' : 0};
  }

  @media (orientation: landscape) and (max-height: ${smallRes}) {
    left: 4%;
    width: ${({ isVisible }: { isVisible: boolean }) => isVisible ? '96%' : 0};
    height: ${({ isVisible }: { isVisible: boolean }) => isVisible ? '95%' : 0};
    bottom: 0;
    transition: width .5s ease-in-out;
  }
`;
export const ChatWrapper = styled.div`
  padding-top: 30px;
  background-color: transparent;
  position: relative;

  @media (orientation: landscape) and (max-height: ${smallRes}) {
    padding-top: 0;
    padding-left: 24px;
  }
`;
export const HideButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 35px;
  top: 0;
  z-index: 11;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${smallRes}), (orientation: landscape) and (max-height: ${smallRes}) {
    right: 10px;
    width: 48px;
    height: 48px;
  }

  @media (orientation: landscape) and (max-height: ${smallRes}) {
    left: 0;
    top: 50px;
  }
`;
export const ArrowDownIcon = styled.img`
  @media (orientation: landscape) and (max-height: ${smallRes}) {
    transform: rotate(270deg);
  }
`;
export const ChatHeader = styled.div`
  display: flex;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  align-items: center;
  padding: 12px 35px;
  background-color: #333;
  gap: 20px;
`;
export const ConsultantAvatarContainer = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ConsultantAvatar = styled.img`
  width: 46px;
  height: 46px;
`;
export const ConsultantInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ConsultantName = styled.div`
  font-size: 24px;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #FFF;

  @media (max-width: ${smallRes}), (orientation: landscape) and (max-height: ${smallRes}) {
    font-size: 19px;
    line-height: 21px;
  }
`;
export const ConsultantPost = styled(ConsultantName)`
  font-size: 16px;

  @media (max-width: ${smallRes}) {
    font-size: 12.5px;
  }
`;
export const ChatContentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.66);
  backdrop-filter: blur(25px);
  height: 521px;
  padding: 0 25px 15px 25px;

  @media (max-width: ${smallRes}), (orientation: landscape) and (max-height: ${smallRes}) {
    padding: 0 8px 37px;
  }
`;
export const MessagesContainer = styled.div`
  margin: 0 0 15px;
  padding: 15px 37px 0;
  height: 292px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;

  @media (max-width: ${smallRes}) {
    padding-left: 29px;
    padding-right: 29px;
    height: 200px;
  }
  
  @media (orientation: landscape) and (max-height: ${smallRes}) {
    height: 115px;
    padding-left: 59px;
    padding-right: 59px;
  }
`;
export const DefaultQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (orientation: landscape) and (max-height: ${smallRes}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const DefaultQuestion = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #717171;
  padding: 15px 0;
  justify-content: center;
  border-radius: 100px;
  color: #FFF;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-align: center;

  @media (max-width: ${smallRes}), (orientation: landscape) and (max-height: ${smallRes}) {
    line-height: 23px;
  }
  
  @media (orientation: landscape) and (max-height: ${smallRes}) {
    min-width: 360px;
  }
`;
