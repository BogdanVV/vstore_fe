import styled from 'styled-components';

export const CategoryContainer = styled.div`
  margin-bottom: 26px;
`;
export const CategoryTitle = styled.div`
  margin-bottom: 21px;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.02em;
  border-bottom: 1.4px solid #A9A9A9;
  padding-bottom: 3.5px;
`;
export const FilterOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const SearchInputContainer = styled.div`
  border-bottom: 1px solid #828282;
  margin-bottom: 25.5px;
  margin-top: 3px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.5px;
  padding-right: 10px;
  
  
`;
export const SearchInput = styled.input`
  background-color: transparent;
  flex: 1;
  border: none;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-align: left;
  width: 80%;

  :focus {
    outline: none;
  }
`;
export const SearchIcon = styled.img`
  
`;
