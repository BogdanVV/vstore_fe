import styled from 'styled-components';
import backgroundImage1 from '../../assets/images/fitting-room-background.jpg';
import { smallRes } from '../../utils/breakpoints';

interface IFiltersVisibilityProps {
  isFiltersBarVisible: boolean;
}

export const PageLayout = styled.div`
  background-image: url(${backgroundImage1});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 1fr;
  overflow: hidden;
  
  @media(max-width: ${smallRes}) {
    display: block;
    background-position-x: 39%;
    background-position-y: 81%;
    background-size: 1765px;
  }
`;
export const TopBar = styled.div`
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 60px;

  @media(max-width: ${smallRes}) {
    display: none;
  }
`;
export const TopBarTitle = styled.div`
  color: #000;
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  line-height: 27px;
  letter-spacing: 0.02em;
`;
export const Basket = styled.img`
  cursor: pointer;
  padding: 15px;
`;
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ isFiltersBarVisible }: IFiltersVisibilityProps) => (
    isFiltersBarVisible ? '17fr 40fr 43fr' : '0fr 57fr 43fr'
  )};
  grid-template-rows: 1fr;
  overflow: auto;

  @media(max-width: ${smallRes}) {
    grid-template-columns: 0fr 1fr 0fr;
  }

`;
export const LeftContainer = styled.div`
  background-color: rgba(255, 255, 255, .77);
  padding: ${({ isFiltersBarVisible }: IFiltersVisibilityProps) => (
    isFiltersBarVisible
      ? '17px 10px 17px 59px'
      : 'unset'
  )};
  overflow: auto;
  flex: 17;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;
export const MiddleContainer = styled.div`
  flex: 40;
  display: flex;
  justify-content: space-between;
  overflow: auto;
`;
export const RightContainer = styled.div`
  flex: 43;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(25px);
  padding: 34px 39px 34px 60px;
  
  & > * {
    backdrop-filter: blur(0);
  }
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  
  @media (max-width: ${smallRes}) {
    display: none;
  }
`;
export const ControlButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 38px 40px 220px 0;
  
  @media(max-width: ${smallRes}) {
    display: none;
  }
`;
export const ZoomButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const NewLookContainer = styled.div`
  padding: 30px 20px 20px 30px;
  
  @media (max-width: ${smallRes}) {
    padding: 60px 0 13px 20px;
  }
`;
export const NewLookWrapper = styled.div`
  @media (max-width: ${smallRes}) {
    position: relative;
    z-index: 1;
  }
`;
export const NewLookContainerTitle = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #FFF;
  margin-bottom: 16px;
  
  @media (max-width: ${smallRes}) {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0;
    margin-bottom: 11px;
  }
`;
export const NewLookItemsContainer = styled.div`
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  max-height: 300px;
  
  @media (max-width: ${smallRes}) {
    gap: 10px;
    max-height: 90px;
    margin-bottom: 13px;
  }
`;
export const TotalCostSection = styled.div`

`;
export const TotalCostDivider = styled.div`
  border-bottom: 1.4px solid #FFF;
  margin-bottom: 16px;
  
  @media (max-width: ${smallRes}) {
    margin-bottom: 11px;
    border-bottom: 1px solid #FFF;
  }
`;
export const TotalCostSectionInfo = styled.div`
  color: #FFF;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.02em;
  padding-bottom: 16px;
  
  @media (max-width: ${smallRes}) {
    font-size: 12px;
    padding-bottom: 11px;
  }
`;

// MOBILE
export const MobileControlButtonsContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
export const MobileZoomButtonsContainer = styled.div`
  @media (max-width: ${smallRes}) {
    position: absolute;
    left: 20px;
    bottom: 28%;
  }
`;
export const MobileSelectClothesButtonsContainer = styled.div`
  @media (max-width: ${smallRes}) {
    position: absolute;
    bottom: 4.5%;
    right: 23px;
  }
`;
export const MobileSelectClothesButton = styled.button`
  @media (max-width: ${smallRes}) {
    border: none;
    width: 221px;
    background-color: #FFF;
    padding: 11px 0;
    color: #333;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    display: flex;
    justify-content: center;
    margin: ${({ margin }: { margin?: string }) => margin};
  }
`;
