import React, { ChangeEvent } from 'react';
import {
  CategoryContainer,
  CategoryTitle,
  FilterOptionsContainer,
  SearchIcon,
  SearchInput,
  SearchInputContainer
} from './styled';
import { IFilterCategoryProps } from './types';
import FilterOption from '../FilterOption/FilterOption';
import searchIcon from '../../assets/icons/search.svg';

const FilterCategory = (props: IFilterCategoryProps) => {
  const {
    title,
    options,
    handleOptionPick,
    filtersApplied,
    isSearch,
    searchOnChangeHandler,
  } = props;

  const handleSearchInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (searchOnChangeHandler) {
      searchOnChangeHandler(e.target.value);
    }
  };

  return (
    <CategoryContainer>
      <CategoryTitle>{title}</CategoryTitle>

      {isSearch && (
        <SearchInputContainer>
          <SearchInput
            onChange={handleSearchInputValueChange}
            placeholder="Search..."
          />
          <SearchIcon
            src={searchIcon}
          />
        </SearchInputContainer>

        // <div style={{border:'2px solid green',display:'flex',width:'80%',justifyContent:'space-between'}}>
        //   <input style={{border:'2px solid red',flex:1}}/>
        //   <div>X</div>
        // </div>
      )}

      <FilterOptionsContainer>
        {options.map(option => (
          <FilterOption
            option={option}
            handleOptionPick={handleOptionPick}
            isChecked={filtersApplied.some(f => f.value === option.value)}
            key={option.value}
          />
        ))}
      </FilterOptionsContainer>
    </CategoryContainer>
  );
};

export default FilterCategory;
