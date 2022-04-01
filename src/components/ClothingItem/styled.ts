import styled from 'styled-components';
import { smallRes } from '../../utils/breakpoints';

export const ClothingItemContainer = styled.div`
  width: 220px;
  margin-bottom: 32px;

  @media(max-width: ${smallRes}) {
    width: 167px;
  }
`;
export const ClothingImageContainer = styled.div`
  background-color: rgba(117, 117, 117, 0.66);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const BasketIndicator = styled.div`
  position: absolute;
  top: 17px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isDark }: { isDark: boolean }) => isDark ? '#434343' : 'rgba(255, 255, 255, 0.7)'};
`;
export const ClothingImage = styled.img`
  
`;
export const ClothingInfoContainer = styled.div`
  padding: 7px 13px 13px 13px;
  background-color: #FFF;
  margin-bottom: 3px;
`;
export const ClothingTitle = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.02em;
  margin-bottom: 3px;
  
  @media(max-width: ${smallRes}) {
    font-size: 14px;
    line-height: 15px;
  }
`;
export const SizeOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
  flex-wrap: wrap;
`;
export const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #8A8A8A;
  justify-content: space-between;
  padding: 0 10px;
  margin-right: 10px;
  flex: 1;
  cursor: pointer;
  position: relative;
  height: 40px;
  
  @media (max-width: ${smallRes}) {
    padding: 0 7px;
  }
`;
export const SizeText = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 0.02em;
  
  @media(max-width: ${smallRes}) {
    font-size: 14px;
    line-height: 21px;
  }
`;
export const ClothingChosenValue = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  
  @media (max-width: ${smallRes}) {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0;
  }
`;
export const SizesChooseList = styled.div`
  position: absolute;
  border: ${({ isListVisible }: { isListVisible: boolean }) => isListVisible ? '1px solid #8A8A8A' : 'none'};
  width: 100%;
  left: -1px;
  top: 40px;
  z-index: 10;
  background-color: #FFF;
  height: ${({ isListVisible }: { isListVisible: boolean }) => isListVisible ? '140px' : 0};
  transition: height .2s ease-out;
  overflow: auto;
  
  ::-webkit-scrollbar {
    width: 13px;
  }
  ::-webkit-scrollbar-track {
    width: 8px;
    background-color: #F2F2F2;
    border-radius: 80px;
    margin-top: 1px;
    margin-bottom: 6px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }
  ::-webkit-scrollbar-thumb {
    width: 8px;
    background-color: #8A8A8A;
    border-radius: 80px;
    background-clip: padding-box;
    border: 4px solid rgba(0, 0, 0, 0);
  }
`;
export const SizeOptionContainer = styled.div`
  display: flex;
  padding: 8px 10px;
  margin-bottom: 2px;
  cursor: pointer;
  align-items: center;
`;
export const SizeOptionRadio = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #8A8A8A;
  border-radius: 50%;
  margin-right: 12px;
  position: relative;
  
  ::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 3px;
    right: 3px;
    bottom: 3px;
    left: 3px;
    background-color: ${({ isSelected }: { isSelected: boolean }) => isSelected ? '#717171' : '#FFF'};
  }
`;
export const SizeOptionValue = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
`;
export const ArrowIcon = styled.img`
  display: inline;
  
  @media (max-width: ${smallRes}) {
    height: 4.5px;
  }
`;
export const SelectColorContainer = styled.div`
  padding: 0 10px;
`;
export const SelectColorContainerTitle = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 0.02em;
  
  @media (max-width: ${smallRes}) {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0;
  }
`;
export const AvailableColorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 16px);
  grid-gap: 14px;
`;
interface IAvailableColorProps {
  isSelected: boolean;
  isOutlined: boolean;
  color: string;
}
export const AvailableColor = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: relative;
  background-color: ${({ color }: IAvailableColorProps) => color};
  outline: 1px solid #8A8A8A;
  :hover {
  }
  outline: ${({ isSelected, isOutlined }: IAvailableColorProps) => {
    if ((isOutlined && isSelected) || (!isOutlined && isSelected)) {
      return '2px solid #717171';
    } else if (isOutlined && !isSelected) {
      return '1px solid #8A8A8A';
    } else {
      return 'none';
    }
    //isSelected ? '2px solid #717171' : 'none'
  }};
  
  @media (max-width: ${smallRes}) {
    width: 14px;
    height: 14px;
  }
`;
