import styled from "styled-components";
import { IAppButtonProps } from './types';
import { smallRes } from '../../utils/breakpoints';

export const StyledButton = styled.button`
  width: ${({ width }: Partial<IAppButtonProps>) => `${width}px`};
  border: none;
  padding: ${({ padding }) => padding ?? '8px 0'};
  margin: ${({ margin }) => margin ?? 0};
  display: flex;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#FFF'};
  border: ${({ borderColor }) => borderColor ? `2px solid ${borderColor}` : 'none'};
  border-radius: ${({ borderColor }) => borderColor ? '2px' : 'none'};
  color: ${({ textColor }) => textColor ? textColor : '#333'};
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.02em;
  cursor: pointer;
  
  @media (max-width: ${smallRes}) {
    width: 79px;
    letter-spacing: 0;
    padding: 4px 0;
    font-size: 11px;
    line-height: 19px;
  }
`;
