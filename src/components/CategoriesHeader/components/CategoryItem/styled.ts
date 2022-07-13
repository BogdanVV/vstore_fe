import styled from "styled-components";

export const SubCategoriesList = styled.div`
  padding: 5px 8px 5px 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`

export const SubCategoryItem = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (
      active ? 'rgba(51, 51, 51, 0.3)' : 'inherit'
  )};
  color: ${({ active }) => (
      active ? '#FFFFFF' : '#333333'
  )};
  font-size: 16px;
  line-height: 19px;
  padding: 8px;
  margin-bottom: 3px;
`