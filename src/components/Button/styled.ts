import styled from "styled-components";

import { IButtonProps } from "./types";

export const StyledButton = styled.div<IButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
`;