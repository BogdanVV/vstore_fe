import styled from 'styled-components';

export const PageLayout = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position-x: 42%;
  background-position-y: 10%;
  background-size: auto 100vh;

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      background-position-x: 39%;
    }
    @media (min-width: 769px) {
      background-position-x: 43%;
    }
    @media (min-width: 835px) {
      background-size: auto 1914px;
      background-position-y: 69%;
      background-position-x: 40%;
    }
  }

  @media (orientation: landscape) {
    background-position-y: top;
    background-position-x: left;
    background-size: auto 543px;
    
    @media (min-width: 813px) {
      background-size: auto 100vh;
      background-position-x: 6%;
    }
    @media (min-width: 1195px) {
      background-size: auto 1284px;
      background-position-x: 25%;
      background-position-y: 23%;
    }
    @media (min-width: 1281px) {
      background-size: auto 1284px;
      background-position-x: 0;
      background-position-y: top;
    }
  }
`;
export const ControlButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 19px;
  top: 7%;
  right: 10px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      gap: 21px;
    }
    @media (min-width: 1281px) {
      top: 4%;
      right: 1%;
      gap: 24px;
    }
  }
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      top: 4%;
      right: 16px;
    }
    @media (min-width: 769px) {
      top: 4%;
      right: 16px;
      gap: 21px;
    }
    @media (min-width: 835px) {
      top: 3%;
      right: 16px;
      gap: 24px;
    }
  }

`;
export const ControlButton = styled.button`
  border: none;
  width: 221px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 2px;
  color: #242424;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      width: 250px;
      height: 50px;
      font-size: 16px;
      line-height: 24px;
    }
    @media (min-width: 1281px) {
      width: 280px;
      height: 56px;
      font-size: 18px;
      line-height: 27px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 250px;
      height: 50px;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }
    @media (min-width: 769px) {
      width: 250px;
      height: 50px;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 835px) {
      width: 280px;
      height: 56px;
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
  }
`;
export const EnterFitRoomButtonContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 7%;

  @media (orientation: landscape) {
    left: 32%;
    top: 33%;
    @media (min-width: 813px) {
      left: 35%;
      top: 26%;
    }
    @media (min-width: 1281px) {
      top: 30%;
      left: 28%;
    }
    @media (min-width: 1729px) {
      top: 31%;
      left: 36%;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      left: 12%;
      top: 28%;
    }
    @media (min-width: 769px) {
      left: 3%;
      top: 29%;
    }
    @media (min-width: 835px) {
      left: 7%;
      top: 24%;
    }
  }
`;
export const InfoButtonContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
  position: absolute;
  top: 42.6%;
  right: 4.5%;
  
  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      top: 35%;
      right: 6%;
    }
    @media (min-width: 1729px) {
      right: 3px;
      top: 42%;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      right: 3%;
      top: 34%;
    }
    @media (min-width: 835px) {
      right: 1.6%;
      top: 28%;
    }
    @media (min-width: 769px) {
      right: 3.4%;
      top: 32%;
    }
  }
`;
