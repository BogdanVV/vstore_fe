import styled from "styled-components";

import { IGenderItemWrapperProps } from "./types";

export const GenderItemsWrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
  gap: 70px;
`;

export const GenderItemWrapperLabel = styled.div`
  font-size: 24px;
  line-height: 27px;
  color: #FFFFFF;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
`;

export const GenderItemWrapper = styled.div<IGenderItemWrapperProps>`
  transition : 0.3s all;
  cursor: pointer;
  background-image: ${props => `url(${props.backgroundImage})`};
  opacity: ${props => props.isActive ? 1 : 0.7};
  
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      padding: 22px;
      width: 240px;
      height: 500px;
      background-position: center;
      background-size: 100%;
    }
    @media (min-width: 1281px) {
      padding: 32px;
      width: 340px;
      height: 700px;
    }
  }
`;

export const GenderSelectionModalContent = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GenderSelectionModalWrapper = styled.div`
  width: 100%;
  padding: 29px;
  display: flex;
  flex-direction: column;
`;

export const GenderSelectionModalHeader = styled.div`
  width: 100%;
  font-size: 40px;
  color: #FFFFFF;
  padding-left: 30px;
  font-family: Roboto, sans-serif;
  
  @media (max-width: 1280px) {
    display: none;
  } 
`;