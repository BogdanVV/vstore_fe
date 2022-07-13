import styled from "styled-components";

import { IModalWrapperProps } from "./types";

export const ModalWrapper = styled.div<IModalWrapperProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-color: ${props => props.backgroundColor || 'white'};
  backdrop-filter: blur(13px);
`;
