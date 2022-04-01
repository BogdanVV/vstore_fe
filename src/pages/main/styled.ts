import styled from 'styled-components';
import backgroundImage from '../../assets/images/main-page-background.png'
import backgroundImage1 from '../../assets/images/main-page-background.jpg'
import { smallRes } from '../../utils/breakpoints';

export const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  @media (max-width: ${smallRes}) {
    overflow: hidden;
    background-position: 62% center;
  }

  @media (orientation: landscape) and (max-height: ${smallRes}) {
    background-position-x: left;
    background-position-y: 0;
    background-size: 100%;
  }
`;
export const ButtonsContainer = styled.div`
  position: absolute;
  right: 19px;
  top: 49px;

  @media (max-width: ${smallRes}) {
    right: 10px;
    top: 60px;
  }
  @media (orientation: landscape) and (max-height: ${smallRes}) {
    right: 10px;
    top: 30px;
  }
`;
export const NavigationButton = styled.button`
  width: 280px;
  border: none;
  padding: 15px 0;
  margin: ${({ margin }: { margin?: string }) => margin ?? 0};
  display: flex;
  justify-content: center;
  background-color: #FFF;
  border-radius: 2px;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.02em;
  cursor: pointer;

  @media (max-width: ${smallRes}), (orientation: landscape) and (max-height: ${smallRes}) {
    width: 221px;
    padding: 12px 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
  }
`;
