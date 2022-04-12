import styled from 'styled-components';

interface IAvailableColorProps {
  isSelected: boolean;
  isOutlined: boolean;
  color: string;
}

export const ClothingItemContainer = styled.div`
  width: 168px;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      width: 180px;
    }
    @media (min-width: 1195px) {
      width: 147px;
    }
    @media (min-width: 1281px) {
      width: 180px;
    }
    @media (min-width: 1729px) {
      width: 220px;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 220px;
    }
    @media (min-width: 835px) {
      width: 180px;
    }
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
  top: 13px;
  right: 8px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isDark }: { isDark: boolean }) => (
    isDark ? '#434343' : 'rgba(255, 255, 255, 0.7)'
  )};

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      width: 27px;
      height: 27px;
    }
    @media (min-width: 1195px) {
      width: 22px;
      height: 22px;
    }
    @media (min-width: 1281px) {
      width: 27px;
      height: 27px;
    }
    @media (min-width: 1729px) {
      width: 32px;
      height: 32px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 32px;
      height: 32px;
    }
    @media (min-width: 835px) {
      width: 27px;
      height: 27px;
    }
  }
`;
export const BasketIcon = styled.img`
  height: 12px;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      height: 13px;
    }
    @media (min-width: 1195px) {
      height: 10px;
    }
    @media (min-width: 1281px) {
      height: 13px;
    }
    @media (min-width: 1729px) {
      height: 15px;
    }
  }
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      height: 15px;
    }
    @media (min-width: 835px) {
      height: 13px;
    }
  }
`;
export const ClothingImage = styled.img`
  height: 163px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      height: 175px;
    }
    @media (min-width: 1195px) {
      height: 139px;
    }
    @media (min-width: 1281px) {
      height: 175px;
    }
    @media (min-width: 1729px) {
      height: 211px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      height: 209px;
    }
    @media (min-width: 835px) {
      height: 175px;
    }
  }
`;
export const ClothingInfoContainer = styled.div`
   padding: 8px 10px;
   background-color: #FFF;
   margin-bottom: 3px;
  
  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      padding: 10px;
    }
    @media (min-width: 1729px) {
      padding: 13px 10px;
    }
  }
`;
export const ClothingTitle = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0.02em;
  margin-bottom: 8px;

  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0;
    }
    @media (min-width: 1195px) {
      font-size: 11px;
      line-height: 13px;
    }
    @media (min-width: 1281px) {
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
    }
    @media (min-width: 1729px) {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.02em;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 835px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
export const SizeOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
  gap: 5px;
`;
export const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border: 1px solid #8A8A8A;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
  padding: 4px 0;
  flex: 1;
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      padding: 2px 0;
    }
  }
`;
export const SizeText = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0;
    }
    @media (min-width: 1195px) {
      font-size: 10px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1281px) {
      font-size: 14px;
      font-weight: 300;
      line-height: 23px;
      letter-spacing: 0;
    }
    @media (min-width: 1729px) {
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
  }
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 835px) {
      font-size: 14px;
      font-weight: 300;
      line-height: 23px;
    }
  }
`;
export const ClothingSizeChosenValue = styled.div`
  margin-left: 3px;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0;
    }
    @media (min-width: 1195px) {
      font-size: 10px;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1281px) {
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0;
    }
    @media (min-width: 1729px) {
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
  }
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 16px;
      line-height: 27px;
    }
    @media (min-width: 835px) {
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0;
    }
  }
`;
export const SizesChooseList = styled.div`
  position: absolute;
  border: ${({ isListVisible }: { isListVisible: boolean }) => isListVisible ? '1px solid #8A8A8A' : 'none'};
  width: 100%;
  left: -1px;
  top: 100%;
  z-index: 10;
  background-color: #FFF;
  height: ${({ isListVisible }: { isListVisible: boolean }) => isListVisible ? '140px' : 0};
  transition: height .2s ease-out;
  overflow: auto;
`;
export const SizeOptionContainer = styled.div`
  display: flex;
  padding: 8px 10px;
  margin-bottom: 2px;
  cursor: pointer;
  align-items: center;
`;
export const SizeOptionRadio = styled.div`
  min-width: 16px;
  min-height: 16px;
  border: 1px solid #8A8A8A;
  border-radius: 50%;
  margin-right: 9px;
  position: relative;
  
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      width: 12px;
      height: 12px;
    }
    @media (min-width: 1281px) {
      width: 14px;
      height: 14px;
    }
    @media (min-width: 1729px) {
      width: 16px;
      height: 16px;
    }
  }
  @media (orientation: portrait) {
    @media (min-width: 769px) {
      width: 14px;
      height: 14px;
    }
  }
  
  ::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    background-color: ${({ isSelected }: { isSelected: boolean }) => isSelected ? '#717171' : '#FFF'};
  }
`;
export const SizeOptionValue = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.02em;
  
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      font-size: 10px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1281px) {
      font-size: 14px;
      line-height: 19px;
    }
    @media (min-width: 1729px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
export const ArrowIcon = styled.img`
  display: inline;
  width: 8px;
  
  @media (orientation: landscape) {
    @media (min-width: 1729px) {
      width: 10px;
    }
  }

  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 10px;
    }
    @media (min-width: 835px), (min-width: 1281px) {
      width: 8px;
    }
    @media (min-width: 1195px) {
      width: 7px;
    }
  }
`;
export const SelectColorContainer = styled.div`
  padding: 0 7px;
`;
export const SelectColorContainerTitle = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0.02em;
  
  @media (orientation: landscape) {
    @media (min-width: 813px) {
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0;
    }
    @media (min-width: 1195px) {
      font-size: 10px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
    @media (min-width: 1281px) {
      font-size: 14px;
      font-weight: 300;
      line-height: 23px;
      letter-spacing: 0;
    }
    @media (min-width: 1729px) {
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0.02em;
    }
  }
  
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      font-size: 16px;
      line-height: 27px;
    }
    @media (min-width: 835px) {
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0;
    }
  }
`;
export const AvailableColorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 14px);
  grid-gap: 13px;
  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      grid-template-columns: repeat(auto-fill, 11px);
    }
    @media (min-width: 1281px) {
      grid-gap: 11px;
      grid-template-columns: repeat(auto-fill, 13px);
    }
    @media (min-width: 1729px) {
      grid-gap: 14px;
      grid-template-columns: repeat(auto-fill, 16px);
    }
  }
`;
export const AvailableColor = styled.div<IAvailableColorProps>`
  cursor: pointer;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  background-color: ${({ color }) => color};
  outline: ${({ isSelected }) => (
    isSelected ? '3px solid #8A8A8A' : '1px solid #717171'
  )};

  @media (orientation: landscape) {
    @media (min-width: 1195px) {
      width: 11px;
      height: 11px;
    }
    @media (min-width: 1281px) {
      width: 13px;
      height: 13px;
    }
    @media (min-width: 1729px) {
      width: 16px;
      height: 16px;
    }
  }
  @media (orientation: portrait) {
    @media (min-width: 576px) {
      width: 16px;
      height: 16px;
    }
    @media (min-width: 835px) {
      width: 14px;
      height: 14px;
    }
  }
`;
