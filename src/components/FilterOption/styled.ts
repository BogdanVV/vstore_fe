import styled from 'styled-components';

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;
export const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1.5px solid #646464;
  border-radius: 2px;
  position: relative;
`;
export const CheckMark = styled.div`
  display: ${({ isChecked }: { isChecked: boolean }) => isChecked ? 'block' : 'none'};
  background-color: #646464;
  border-radius: 2px;
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
`;
  export const OptionTitle = styled.div`

`;
