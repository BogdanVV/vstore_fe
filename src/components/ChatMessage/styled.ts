import styled from 'styled-components';

export const ChatMessageContainer = styled.div`
  padding: 8px 19px;
  background-color: #FFF;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
  margin-top: 17px;
  margin-bottom: 17px;
  border-radius: 15px;
  align-self: ${({ fromCustomer }: { fromCustomer: boolean }) => fromCustomer ? 'flex-end' : 'flex-start'};
  position: relative;
  max-width: 80%;
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 18px;
      line-height: 27px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 22px;
    }
    @media (min-width: 835px) {
      font-size: 18px;
      line-height: 27px;
    }
  }
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 16px;
      line-height: 22px;
    }
    @media (min-width: 1195px) {
      font-size: 18px;
      line-height: 27px;
    }
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
