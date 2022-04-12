import styled from 'styled-components';

export const CategoryContainer = styled.div`
  margin-bottom: 15px;
  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      margin-bottom: 26px;
    }
  }
`;
export const CategoryTitle = styled.div`
  margin-bottom: 10px;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0;
  border-bottom: 1.4px solid #A9A9A9;
  
  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      font-size: 20px;
      letter-spacing: 0.02em;
      margin-bottom: 21px;
    }
  }
`;
export const FilterOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (orientation: landscape) {
    
  }
`;
export const SearchInputContainer = styled.div`
  border-bottom: 1px solid #828282;
  margin-bottom: 8px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  
  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      padding-bottom: 2.5px;
      margin-bottom: 21.5px;
    }
  }
`;
export const SearchInput = styled.input`
  background-color: transparent;
  flex: 1;
  border: none;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.02em;
  width: 80%;

  :focus {
    outline: none;
  }
  
  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
export const SearchIcon = styled.img`
  height: 11px;
  @media (orientation: landscape) {
    @media (min-width: 1281px) {
      height: 17px;
    }
  }
`;
