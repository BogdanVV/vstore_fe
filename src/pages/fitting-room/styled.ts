import styled from 'styled-components';

interface IMobileMenuProps {
  isOpen: boolean;
}

export const PageWrapper = styled.div`
  pointer-events: none;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-position-x: 39%;
  background-position-y: 87%;
  background-size: auto 917px;
  background-repeat: no-repeat;
  overflow: hidden;
  box-sizing: border-box;
  
  @media (orientation: landscape) {
    background-position-x: 33%;
    background-position-y: 65%;
    background-size: auto 670px;

    @media (min-width: 813px) {
      background-position-x: 37%;
      background-position-y: 65%;
      background-size: 2199px auto;
    }
    @media (min-width: 1195px) {
      background-position-x: 51%;
      background-position-y: 56%;
      background-size: 2020px auto;
    }
    @media (min-width: 1281px) {
      background-position-x: 45%;
      background-position-y: 50%;
      background-size: 3059px auto;
    }
    @media (min-width: 1729px) {
      background-position-x: 52%;
      background-position-y: 56%;
      background-size: 3059px auto;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      background-position-x: 42%;
      background-position-y: 91%;
      background-size: auto 1421px;
    }
    @media (min-width: 769px) {
      background-position-x: 43%;
      background-position-y: 48%;
      background-size: auto 1430px;
    }
    @media (min-width: 835px) {
      background-position-x: 51%;
      background-position-y: 48%;
      background-size: auto 1779px;
    }
  }
`;
export const ExitFitRoomButtonContainer = styled.div`
  position: absolute;
  top: 23px;
  right: 10px;

  @media (orientation: landscape) {
    top: 23px;
    right: 9px;
    @media (min-width: 813px) {
      top: 79px;
      right: 32px;
    }
    @media (min-width: 1195px) {
      display: none;
    }
  }
  
  @media (orientation: portrait) {
    @media (max-width: 576px) {
      display: none;
    }
    @media (min-width: 769px) {
      display: block;
      top: 79px;
      right: 32px;
    }
    @media (min-width: 835px) {
      display: none;
    }
  }
`;

export const MobileListContainer = styled.div<IMobileMenuProps>`
  padding: 0 10px 0 12px;
  position: absolute;
  height: ${({ isOpen }) => isOpen ? '100vh' : 0};
  transition: height .5s ease-in-out;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, .44);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  z-index: 10;
  overflow: auto;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      padding: 0 45px 0 15px;
    }
  }
`;
export const MobileHeaderContainer = styled.div`
  margin-bottom: 9px;
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      margin-bottom: 29px;
      padding: 0;
    }
  }
`;
export const MobHeaderButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;
export const MobileMenuIcon = styled.img`
  width: 40px;
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 50px;
    }
  }
`;
export const MobListTitle = styled.div`
  padding-bottom: 12px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  border-bottom: 1px solid #828282;
  margin-bottom: 29px;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 18px;
      line-height: 35px;
      padding-bottom: 15px;
      margin-bottom: 22px;
    }
  }
`;
export const MobClothesItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 168px);
  grid-row-gap: 14px;
  justify-content: space-between;
  margin-bottom: 29px;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      grid-template-columns: repeat(auto-fill, 200px);
      justify-content: space-evenly;
      grid-row-gap: 39px;
    }
  }
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      grid-template-columns: repeat(auto-fill, 220px);
    }
  }
`;
export const EmptyClothesListMessage = styled.div`
  margin-top: 8px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: center;
`;
export const ContentContainer = styled.div<{ isFiltersBar: boolean }>`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 0 1fr;
  grid-template-columns: 0 1fr 0;
  
  @media (orientation: portrait) {
    @media (min-width: 769px) {
      grid-template-rows: 54px 1fr;
    }
    @media (min-width: 835px) {
      grid-template-rows: 80px 1fr;
      grid-template-columns: 0 29fr 21fr;
    }
  }
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      grid-template-rows: 54px 1fr;
      grid-template-columns: 0 1fr 0;
    }
    @media (min-width: 1195px) {
      grid-template-rows: 54px 1fr;
      grid-template-columns: ${({ isFiltersBar }) => (
        isFiltersBar ? `17fr 40fr 43fr` : `0fr 57fr 0`
      )};
    }
    @media (min-width: 1281px) {
      grid-template-rows: 80px 1fr;
      grid-template-columns: ${({ isFiltersBar }) => (
  isFiltersBar ? '18.5fr 41.5fr 40fr' : '0fr 60fr 0'
)};
    }
    @media (min-width: 1729px) {
      grid-template-rows: 80px 1fr;
      grid-template-columns: ${({ isFiltersBar }) => (
  isFiltersBar ? '17fr 40fr 43fr' : '0fr 57fr 0'
)};
    }
  }
`;
export const HeaderContainer = styled.div`
  pointer-events: auto;
  overflow: hidden;
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  padding: 0 34px 0 40px;

  @media (orientation: landscape) {
    @media (max-width: 1195px) {
      display: none;
    } 
    @media (min-width: 1281px) {
      padding: 0 32px 0 60px;
    }
  }

  @media (orientation: portrait) {
    @media (max-width: 1195px) {
      display: none;
    }
    @media (min-width: 835px) {
      padding: 0 30px 0 60px;
    }
  }
`;
export const HeaderTitle = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;

  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      font-size: 24px;
      line-height: 27px;
    }
  }
  @media (orientation: portrait) {
    @media (min-width: 835px) {
      font-size: 24px;
      line-height: 27px;
    }
  }
`;
export const BasketIconContainer = styled.div`
  border-radius: 50%;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  cursor: pointer;

  :hover {
    background-color: #e0e0e0;
  }
`;
export const BasketIcon = styled.img`
  width: 16px;
  @media (orientation: portrait) and (min-width: 835px),
  (orientation: landscape) and (min-width: 1281px) {
    width: 25px;
  }
  
`;
export const LeftContentContainer = styled.div`
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.77);
  backdrop-filter: blur(25px);
  & * {
    backdrop-filter: none;
  }

  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      overflow: auto;
    }
  }
`;
export const FiltersContainer = styled.div`
  pointer-events: auto;
  margin: 2.8% 2.9% 2.8% 18%;
  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      margin: 5.3% 3.1% 5.3% 18.4%;
    }
  }
`;

export const MiddleContentContainer = styled.div`
  display: grid;
  grid-template-rows: 59fr 23fr 18fr;
  overflow: hidden;
  
  @media (orientation: landscape) {
    grid-template-rows: 1fr;
    grid-template-columns: 31.4fr 40.3fr 28.3fr;
    @media (min-width: 813px) {
      grid-template-rows: 2fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1195px) {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 0;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      grid-template-columns: 1fr;
      grid-template-rows: 59fr 18fr 23fr;
    }
    @media (min-width: 835px) {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr;
    }
  }
`;
export const NewLookContainer = styled.div<{ isFiltersBar: boolean }>`
  padding: 9vh 0 0 10px;
  pointer-events: auto;
  width: 220px;

  @media (orientation: landscape) {
    padding-top: 7vh;
    @media (max-width: 1195px) {
      display: none;
    }
    @media (min-width: 1281px) {
      grid-column-start: 1;
      grid-column-end: 2;
      width: ${({ isFiltersBar }) => isFiltersBar ? '290px' : '320px'};
      padding: ${({ isFiltersBar }) => (
  isFiltersBar ? '61px 0 0 30px' : '61px 0 0 60px'
)};
    }
  }
  
  @media (orientation: portrait) {
    @media (max-width: 1195px) {
      display: none;
    }
    @media (min-width: 835px) {
      padding: 13vh 0 0 38px;
      width: 298px;
    }
  }
`;
export const NewLookContainerTitle = styled.div`
  color: #FFF;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  margin-bottom: 10px;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 24px;
      line-height: 27px;
      letter-spacing: 0.02em;
      margin-bottom: 16px;
    }
    @media (min-width: 1195px) {
      font-size: 17px;
      margin-bottom: 7px;
    }
    @media (min-width: 1281px) {
      font-size: 24px;
      margin-bottom: 16px;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 23px;
      font-weight: 700;
      line-height: 27px;
      margin-bottom: 20px;
    }
    @media (min-width: 769px) {
      font-size: 24px;
      line-height: 27px;
      letter-spacing: 0.02em;
      margin-bottom: 16px;
    }
    @media (min-width: 835px) {
      margin-bottom: 16px;
      font-size: 24px;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
  }
`;
export const NewLookItemsContainer = styled.div`
  max-height: 120px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      margin-bottom: 26px;
      max-height: 130px;
    }
    @media (min-width: 1195px) {
      margin-bottom: 14px;
    }
    @media (min-width: 1281px) {
      margin-bottom: 26px;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      margin-bottom: 22px;
    }
    @media (min-width: 769px) {
      margin-bottom: 26px;
    }
  }
`;
export const NewLookItem = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  gap: 3px;
  background-color: rgba(255, 255, 255, 0.66);
  width: 210px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      width: 260px;
    }
    @media (min-width: 1195px) {
      width: 174px;
    }
    @media (min-width: 1281px) {
      width: 260px;
      gap: 5px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 331px;
    }
    @media (min-width: 769px) {
      width: 260px;
    }
  }
`;
export const NewLookImage = styled.img`
  height: 42px;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      height: 61px;
    }
    @media (min-width: 1195px) {
      height: 42px;
    }
    @media (min-width: 1281px) {
      height: 61px;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      height: 67px;
    }
    @media (min-width: 769px) {
      width: 61px;
    }
  }
`;
export const NewLookItemInfoContainer = styled.div`
  padding: 3px 3px 6px;
  flex: 1;
`;
export const NewLookTitlePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NewLookItemTitle = styled.div`
  white-space: break-spaces;
  word-break: break-word;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1195px) {
      font-size: 11px;
      line-height: 16px;
    }
    @media (min-width: 1281px) {
      font-size: 16px;
      line-height: 27px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 22px;
      line-height: 27px;
    }
    @media (min-width: 769px) {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.02em;
    }
  }
`;
export const NewLookItemPrice = styled.div`
  white-space: nowrap;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0.02em;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 16px;
      line-height: 21px;
    }
    @media (min-width: 1195px) {
      font-size: 11px;
      line-height: 16px;
    }
    @media (min-width: 1281px) {
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 22px;
      line-height: 27px;
    }
    @media (min-width: 769px) {
      font-size: 16px;
      line-height: 21px;
    }
  }
`;
export const NewLookItemSizeContainer = styled.div`
  display: flex;
  gap: 5px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1195px) {
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
    }
    @media (min-width: 1281px) {
      font-size: 16px;
      font-weight: 300;
      line-height: 27px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 22px;
      font-weight: 400;
      line-height: 27px;
    }
    @media (min-width: 769px) {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.02em;
    }
  }
`;
export const NewLookItemSizeValue = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1195px) {
      font-size: 11px;
      line-height: 16px;
    }
    @media (min-width: 1281px) {
      font-size: 16px;
      line-height: 27px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 21px;
      line-height: 27px;
    }
    @media (min-width: 769px) {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.02em;
    }
  }
`;
export const NewLookItemColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1195px) {
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
    }
    @media (min-width: 1281px) {
      font-size: 16px;
      font-weight: 300;
      line-height: 27px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 22px;
      font-weight: 400;
      line-height: 27px;
    }
    @media (min-width: 769px) {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.02em;
    }
  }
`;
export const NewLookItemColor = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #717171;
  background-color: ${({ color }) => color};
  
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      width: 12px;
      height: 12px;
    }
    @media (min-width: 1281px) {
      width: 16px;
      height: 16px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 22px;
      height: 22px;
    }
    @media (min-width: 769px) {
      width: 16px;
      height: 16px;
    }
  }
`;
export const NewLookTotalCost = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #FFF;
  color: #FFF;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.02em;
  margin-bottom: 10px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 18px;
      line-height: 27px;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
    @media (min-width: 1195px) {
      font-size: 12px;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: 0.02em;
      padding-bottom: 4px;
      margin-bottom: 6px;
    }
    @media (min-width: 1281px) {
      font-size: 18px;
      font-weight: 400;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 20px;
      font-weight: 500;
      line-height: 27px;
      padding-bottom: 15px;
      margin-bottom: 19px;
    }
    @media (min-width: 769px) {
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0.02em;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  }
`;
export const NewLookTotalCostValue = styled.div`
  margin-bottom: 10px;
  color: #FFF;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.02em;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 16px;
    }
    @media (min-width: 1195px) {
      font-size: 12px;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: 0.02em;
      margin-bottom: 6px;
    }
    @media (min-width: 1281px) {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 16px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 20px;
      font-weight: 500;
      line-height: 27px;
      margin-bottom: 19px;
    }
    @media (min-width: 769px) {
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;
      margin-bottom: 16px;
    }
  }
`;
export const BuyNowButton = styled.button<{ responsiveFontSize?: string, width?: string }>`
  border: none;
  cursor: pointer;
  border-radius: 2px;
  padding: 6px 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 11px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0.02em;
  background-color: #FFF;
  width: ${props => props.width};
  
  :hover {
    background-color: #e0e0e0;
  }

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      padding: 8px 16px;
      font-size: ${props => props.responsiveFontSize || '16px'};
      line-height: 27px;
    }
    @media (min-width: 1195px) {
      padding: 1px 8px;
      font-size: 11px;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1195px) {
      padding: 8px 16px;
      font-size: 16px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: ${props => props.responsiveFontSize || '16px'};
      font-weight: 600;
      line-height: 27px;
      padding: 10px 19px;
    }
    @media (min-width: 769px) {
      padding: 8px 16px;
      font-size: ${props => props.responsiveFontSize || '16px'};
      line-height: 27px;
      letter-spacing: 0.02em;
    }
  }
`;
export const ControlButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (orientation: landscape) {
    justify-content: flex-end;
    padding-bottom: 10vh;
    @media (min-width: 813px) {
      padding: 0 0 73px 32px;
      align-items: flex-start;
      justify-content: flex-end;
    }
    @media (min-width: 1195px) {
      padding: 26px 24px 138px 0;
      align-items: flex-end;
      justify-content: space-between;
    }
    @media (min-width: 1281px) {
      padding: 2.1vh 30px 4vh 0;
      align-items: flex-end;
      justify-content: space-between;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 835px) {
      align-items: flex-end;
      padding: 38px 30px 382px 0;
    }
    @media (max-width: 576px) {
      display: none;
    }
  }
`;
export const ExitButtonContainer = styled.div`
  pointer-events: auto;
  display: none;
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      display: block;
    }
  }
  @media (orientation: portrait) {
    @media (min-width: 835px) {
      display: block;
    }
  }
`;
export const ZoomControlButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-left: 19px;
  
  @media (orientation: portrait) {
    @media (min-width: 769px) {
      padding-left: 32px;
    }
    @media (min-width: 835px) {
      gap: 24px;
    }
  }
`;
export const ClothesListButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  padding-right: 23px;
  overflow: hidden;
  
  @media (orientation: landscape) {
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 9px;
    padding-bottom: 9.4vh;
    @media (min-width: 813px) {
      padding: 0 32px 116px 0;
    }
  }

  @media (orientation: portrait) {
    @media (max-width: 576px) {
      display: none;
    }
    @media (min-width: 576px) {
      gap: 32px;
      display: flex;
    }
    @media (min-width: 769px) {
      gap: 32px;
      padding-right: 32px;
    }
    @media (min-width: 835px) {
      display: none;
    }
  }
`;
export const SelectClothesListButton = styled.button`
  cursor: pointer;
  border: none;
  width: 221px;
  height: 44px;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  
  :hover {
    background-color: #e0e0e0;
  }

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      width: 240px;
      height: 48px;
      font-size: 18px;
      line-height: 21px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 349px;
      height: 69px;
      font-size: 22px;
      line-height: 21px;
    }
    @media (min-width: 769px) {
      width: 240px;
      height: 48px;
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

export const RightContentContainer = styled.div`
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(25px);
  
  & * {
    backdrop-filter: none;
  }
  
  @media (orientation: portrait) and (min-width: 835px),
  (orientation: landscape) and (min-width: 1195px) {
    @media (min-width: 835px) {
      overflow: auto;
    }
  }
`;
export const ClothesListWrapper = styled.div`
  margin: 7.2% 8.7% 7% 7.7%;
  
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      margin: 3% 4.6% 3% 7.2%;
    }
    @media (min-width: 1281px) {
      margin: 4.6% 5.3% 4.6% 3%;
    }
  }
`;
export const ClothesListTitle = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      font-size: 12px;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1281px) {
      font-size: 16px;
      letter-spacing: 0;
    }
  }
`;
export const ViewAllClothesButton = styled.div<{ isAllClothesListExpanded: boolean }>`
  color: ${({ isAllClothesListExpanded }) => (
    isAllClothesListExpanded ? '#FFF' : '#333'
  )};
  cursor: pointer;

  padding: 8px 16px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  border: ${({ isAllClothesListExpanded }) => (
    isAllClothesListExpanded ? '2px solid #FFF' : '2px solid #333'
  )};
  border-radius: 2px;
  
  :hover {
    color: ${({ isAllClothesListExpanded }) => (
      isAllClothesListExpanded ? '#333' : '#FFF'
    )};
    border: ${({ isAllClothesListExpanded }) => (
      isAllClothesListExpanded ? '2px solid #333' : '2px solid #FFF'
    )};
  }
  
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      padding: 0 12px;
      font-size: 12px;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1729px) {
      padding: 8px 16px;
      font-size: 16px;
    }
  }
`;
export const ClothesListTitleContainer = styled.div`
  pointer-events: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #828282;
  margin-bottom: 17px;
  
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      padding-bottom: 6px;
      margin-bottom: 12px;
    }
    @media (min-width: 1281px) {
      padding-bottom: 14px;
      margin-bottom: 17px;
    }
  }
`;
export const ClothesItemsContainer = styled.div`
  pointer-events: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  justify-content: space-between;
  grid-row-gap: 35px;
  padding: 2px;
  
  @media (orientation: landscape) { 
    @media (min-width: 1195px) {
      grid-template-columns: repeat(auto-fill, 147px);
    }
    @media (min-width: 1281px) {
      grid-template-columns: repeat(auto-fill, 180px);
    }
    @media (min-width: 1729px) {
      grid-template-columns: repeat(auto-fill, 220px);
    }
  }
`;

export const MobileZoomButtonsContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;
  right: 10px;
  bottom: 150px;
`;

export const MobileCategoryClothesList = styled.div<{ $blurScroll: boolean }>`
  position: absolute;
  z-index: 2;
  width: 110px;
  height: 100vh;
  display: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12.1px);
  padding-top: 14px;
  padding-bottom: 50px;
  overflow-y: scroll;

  ::after {
    content: '';
    display: ${({ $blurScroll }) => (
        $blurScroll ? 'flex' : 'none'
    )};
    width: 100%;
    position: sticky;
    z-index: 999;
    height: 60px;
    bottom: -1px;
    background: linear-gradient(0deg, #989898 0%, rgba(196, 196, 196, 0) 82.29%);
    backdrop-filter: blur(4px);
  }
  
  @media (max-width: 1195px) {
    display: block !important;
  }

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const MobileCategoryClothesListTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #333333;
  font-weight: 500;
  padding-bottom: 14px;
  text-transform: uppercase;
`

export const MobileCheckoutButtonWrapper = styled.div` 
  position: absolute;
  right: 8px;
  bottom: 33px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  
  @media (min-width: 1195px) {
    display: none;
  }
`

export const MobileCheckoutButton = styled.div`
  padding: 6px 15px;
  display: flex;
  justify-content: space-between;
  width: 220px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.66);
`

export const CheckoutTotalCost = styled.div`
  text-transform: uppercase;
  color: #333333;
  font-size: 12px;
  line-height: 18px;
  font-weight: 600;
`

export const CheckoutPriceCost = styled.div`
  text-transform: uppercase;
  color: #333333;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
`

export const SelectClothesButtonsWrapper = styled.div`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
