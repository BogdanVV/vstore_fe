import styled from 'styled-components';

export const OptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  
  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      gap: 20px;
    }
  }
`;
export const Checkbox = styled.div`
  min-width: 14px;
  min-height: 14px;
  border: 1px solid #646464;
  border-radius: 2px;
  position: relative;
  margin-top: 5.5px;
  
  @media (orientation: landscape) {
    min-width: 20px;
    min-height: 20px;
    margin-top: 3.5px;
  }
`;
export const CheckMark = styled.div`
  background-color: ${({ isChecked }: { isChecked: boolean }) => isChecked ? '#646464' : 'transparent' };
  border-radius: 2px;
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
`;
export const OptionTitle = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  line-height: 27px;
  letter-spacing: 0.02em;
  white-space: break-spaces;

  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
