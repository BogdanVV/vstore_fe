import styled from "styled-components";

export const ClothingItemLookWrapper = styled.div`
  display: none;
  
  @media (max-width: 567px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding-top: 28vh;
    padding-right: 1.5vh;
    height: 100vh;
  }
`

export const ClothingItemLookImage = styled.img`
  width: 230px;
  height: 230px;
`