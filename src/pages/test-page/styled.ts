import styled from 'styled-components';
import backgroundImage from '../../assets/images/fitting-room-background.png';

export const PageLayout = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 1fr;
`;
// export const TopBar = styled.div`
//   border: 3px solid yellow;
// `;

export const TopBar = styled.div`
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 60px;
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
  border: 3px solid green;
  display: grid;
  grid-template-columns: 17fr 40fr 43fr;
  grid-template-rows: 1fr;
  //display: flex;
  //justify-content: space-between;
  overflow: auto;
`;
export const LeftContainer = styled.div`
  background-color: rgba(255, 255, 255, .77);
  //backdrop-filter: blur(25px);
  padding: 17px 10px 17px 59px;
  border: 3px solid blue;
  flex: 17;
  overflow: auto;
`;
export const MiddleContainer = styled.div`
  flex: 40;
  border: 3px solid black;
  display: flex;
  justify-content: space-between;
  overflow: auto;
`;
export const RightContainer = styled.div`
  flex: 43;
  border: 3px solid orange;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(25px);
`;

export const NewLookContainer = styled.div`
  border: 3px solid green;
  padding: 30px 0 20px 61px;
  overflow: auto;
`;
export const NewLookContainerTitle = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #FFF;
  margin-bottom: 16px;
`;
export const NewLookItemsContainer = styled.div`
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TotalCostSection = styled.div`

`;
export const TotalCostDivider = styled.div`
  border-bottom: 1.4px solid #FFF;
  margin-bottom: 16px;
`;
export const TotalCostSectionInfo = styled.div`
  color: #FFF;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.02em;
  padding-bottom: 16px;
`;

