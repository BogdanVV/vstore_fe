import styled from 'styled-components';
import { smallRes } from '../../utils/breakpoints';

export const ClothesListWrapper = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  backdrop-filter: blur(0);
`;
export const SpoilerTitle = styled.div`
  color: #333;
  font-family: Montserrat,sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.02em;
  padding-bottom: 15px;
  border-bottom: 1.4px solid #828282;
  margin-bottom: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media(max-width: ${smallRes}) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
  }
`;
export const ClothingItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  height: ${({ isOpen }: { isOpen: boolean }) => isOpen ? 'auto' : 0};
  transition: height 2s ease-out;
  justify-content: space-around;
  
  @media(max-width: ${smallRes}) {
    grid-template-columns: repeat(auto-fill, 160px);
  }
`;
export const NoClothesMessage = styled.div`
  padding: 30px 0 54px;
  
  @media (max-width: ${smallRes}) {
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.02em;
    padding: 18px 0 0 0;
  }
`;
