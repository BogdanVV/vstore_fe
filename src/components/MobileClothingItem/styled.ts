import styled from "styled-components";

export const MobileClothingItemWrapper = styled.div<{ isActive: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 1px;
  margin-right: 1px;
  outline: ${({ isActive }) => (
      isActive ? '1px solid #FFFFFF' : '0'
  )};
  background-color: ${({ isActive }) => (
      isActive ? 'rgba(255, 255, 255, 0.33)' : ''
  )};
  border-radius: 2px;
  margin-bottom: 5px;
`

export const MobileClothingItemActions = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 4px;
`

export const MobileClothingItemImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 7px;
`

export const BasketAction = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

export const RemoveFromBasketAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MobileClothingItemPrice = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  font-weight: 500;
  text-align: left;
  padding-left: 7px;
`;

export const MobileClothingImage = styled.img`
  text-align: center;
`;