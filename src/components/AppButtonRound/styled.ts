import styled from "styled-components";
import { IAppButtonRoundProps } from './types';
import { smallRes } from '../../utils/breakpoints';

export const ButtonOuterWrapper = styled.button`
  position: ${({ isPositionAbsolute }: Partial<IAppButtonRoundProps>) => (
    isPositionAbsolute ? 'absolute' : 'static'
  )};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  top: ${({ top }) => top};
  width: ${({ isOutlined }) => isOutlined ? '104px' : 'auto'};
  height: ${({ isOutlined }) => isOutlined ? '104px' : 'auto'};
  border-radius: 50%;
  background-color: ${({ isOutlined }) => (
    isOutlined ? 'rgba(255, 255, 255, .5)' : 'transparent'
  )};
  display: ${({ isOutlined }) => isOutlined ? 'flex' : 'block'};
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  margin: ${({ margin }) => margin};
  
  @media (max-width: ${smallRes}), (orientation: landscape) and (max-height: ${smallRes}) {
    width: ${({ isOutlined }) => isOutlined ? '60px' : 'auto'};
    height: ${({ isOutlined }) => isOutlined ? '60px' : 'auto'};
  }
`;
export const ButtonInnerWrapper = styled.div`
  background-color: ${({ isOutlined }: Partial<IAppButtonRoundProps>) => (
    isOutlined ? '#FFF' : 'rgba(255, 255, 255, .77)'
  )};
  width: 66px;
  height: 66px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${smallRes}), (orientation: landscape) and (max-height: ${smallRes}) {
    width: 44px;
    height: 44px;
  }
`;
export const Icon = styled.img`
  height: 24px;
  
  @media (max-width: ${smallRes}), (orientation: landscape) and (max-height: ${smallRes}) {
    height: 14px;
  }
`;
