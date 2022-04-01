import styled from 'styled-components';
import { smallRes } from '../../utils/breakpoints';

export const NewItemContainer = styled.div`
  background-color: rgba(255, 255, 255, .66);
  border-radius: 2px;
  display: flex;
  padding: 6px 8px;
  align-items: center;
`;
export const ItemPicture = styled.img`
  height: 67px;
  margin-right: 5px;
  
  @media (max-width: ${smallRes}) {
    height: 42.3px;
    margin-right: 3px;
  }
`;
export const ItemInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ItemPrice = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.02em;
  
  @media (max-width: ${smallRes}) {
    font-size: 14px;
    line-height: 19px;
  }
`;
export const ItemTitle = styled.div`
  max-width: 120px;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.02em;
  
  @media (max-width: ${smallRes}) {
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0;
    max-width: 96px;
  }
`;
export const ItemSize = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 0.02em;
  
  @media (max-width: ${smallRes}) {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
  }
`;
export const ItemSizeValue = styled.div`
  display: inline-block;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.02em;
  
  @media (max-width: ${smallRes}) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0;
  }
`;
export const ItemColor = styled.div`
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 0.02em;
  display: flex;
  
  @media (max-width: ${smallRes}) {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
  }
`;
export const ItemColorValue = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #717171;
  background-color: ${({ color }: { color: string }) => color};
  margin-left: 15px;
  
  @media (max-width: ${smallRes}) {
    margin-left: 5px;
    width: 14px;
    height: 14px;
  }
`;
