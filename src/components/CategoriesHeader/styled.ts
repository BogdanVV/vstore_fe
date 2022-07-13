import styled from "styled-components";


export const MobileCategoriesWrapper = styled.div`
  pointer-events: auto;
`

export const CategoriesHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 12px;
  background-color: #333333;
  pointer-events: auto;
`

export const CategoryHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`

export const CategoryTitle = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
  font-weight: 400;
`

export const CategoriesSelect = styled.div<{ isVisible: boolean }>`
  position: absolute;
  z-index: 100;
  max-width: 200px;
  background-color: rgba(231, 231, 231, 0.55);
  backdrop-filter: blur(20px);
  max-height: 90vh;
  transform-origin:top;
  transform: scaleY(${({ isVisible }) => (
        isVisible ? 1 : 0
  )});
  height: auto;
  overflow: hidden;
  overflow-y: scroll; 
  transition: all .4s ease-out;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const CategoriesOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: #333333;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 13px;
  padding: 0 12px;
  &:first-child {
    padding-top: 16px;
  }
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 16px;
  }
`