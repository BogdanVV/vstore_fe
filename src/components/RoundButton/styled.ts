import styled from 'styled-components';
import { IRoundButtonProps } from './types';

export const StyledButton = styled.button<Partial<IRoundButtonProps>>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${({ isSemiTransparent }) => (
    isSemiTransparent ? 'rgba(255, 255, 255, 0.66)' : '$FFF'
  )};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      width: 56px;
      height: 56px;
    }
    @media (min-width: 1195px) {
      width: 37px;
      height: 37px;
    }
    @media (min-width: 1281px) {
      width: 56px;
      height: 56px;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 70px;
      height: 70px;
    }
    @media (min-width: 769px) {
      width: 56px;
      height: 56px;
    }
  }
`;
export const StyledIcon = styled.img`
  width: 17px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      width: 19px;
    }
    @media (min-width: 1195px) {
      width: 15px;
    }
    @media (min-width: 1281px) {
      width: 22px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 29px;
    }
    @media (min-width: 769px) {
      width: 22px;
    }
  }
`;
