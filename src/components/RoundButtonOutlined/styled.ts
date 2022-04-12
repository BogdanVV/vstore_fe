import styled from 'styled-components';
import { IRoundButtonProps } from './types';

export const OuterWrapper = styled.button<Partial<IRoundButtonProps>>`
  border: none;
  cursor: pointer;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, .66);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 70px;
      height: 70px;
    }
    @media (min-width: 835px) {
      width: 104px;
      height: 104px;
    }
  }
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      width: 70px;
      height: 70px;
    }
    @media (min-width: 1281px) {
      width: 104px;
      height: 104px;
    }
  }
`;
export const StyledButton = styled.div<Partial<IRoundButtonProps>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background-color: ${({ isSemiTransparent }) => (
    isSemiTransparent ? 'transparent' : '#FFF'
  )};
  border-radius: 50%;
  position: relative;

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 44px;
      height: 44px;
    }
    @media (min-width: 835px) {
      width: 66px;
      height: 66px;
    }
  }
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      width: 44px;
      height: 44px;
    }
    @media (min-width: 1281px) {
      width: 66px;
      height: 66px;
    }
  }
`;
export const ButtonIcon = styled.img`
  height: 17px;

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      height: 17px;
    }
    @media (min-width: 769px) {
      height: 16px;
    }
    @media (min-width: 835px) {
      height: 24px;
    }
  }
  
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      height: 17px;
    }
    @media (min-width: 1281px) {
      height: 24px;
    }
  }
`;
