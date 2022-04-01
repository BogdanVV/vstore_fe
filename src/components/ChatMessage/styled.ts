import styled from 'styled-components';
import { smallRes } from '../../utils/breakpoints';

export const ChatMessageContainer = styled.div`
  padding: 8px 19px;
  background-color: #FFF;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.02em;
  margin-bottom: 19px;
  border-radius: 15px;
  align-self: ${({ fromCustomer }: { fromCustomer: boolean }) => fromCustomer ? 'flex-end' : 'flex-start'};
  position: relative;
  max-width: 80%;
  
  @media(max-width: ${smallRes}) {
    font-size: 14px;
    line-height: 21px;
  }
`;
export const DialogueTail = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right:10px solid #FFF;
  transform: ${({ fromCustomer }: { fromCustomer: boolean }) => fromCustomer ? 'rotate(97deg)' : 'rotate(85deg)'};
  left: ${({ fromCustomer }: { fromCustomer: boolean }) => !fromCustomer && '-5px'};
  right: ${({ fromCustomer }: { fromCustomer: boolean }) => fromCustomer && '-5px'};
  bottom: 2px;
`;
