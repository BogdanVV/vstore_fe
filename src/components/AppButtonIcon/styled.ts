import styled from 'styled-components';
import { IAppButtonProps } from './types';

export const StyledButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  overflow: visible;
  width: ${({ width } : Partial<IAppButtonProps>) => `${width}px`};
  position: relative;
  margin: ${({ margin }: Partial<IAppButtonProps>) => margin};
  border: none;
  cursor: pointer;
  
  @media(max-width: 600px) {
    background-color: green;
  }
  
  @media(max-width: 400px) {
    background-color: red;
  }
`
export const ButtonIconContainer = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  position: relative;
  right: -20px;
  border: 4px solid rgba(255, 5, 0, .1);
`;
export const ButtonTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.02em;
  padding: 15px 0 15px 35px;
  background-color: #FFF;
  flex: 1;
  text-align: left;
`;
