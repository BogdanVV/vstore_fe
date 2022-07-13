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
import { ICategory } from "../../temp/types";
import { IFilterOption } from "../FilterOption/types";

import FilterOption from '../FilterOption/FilterOption';
import NestedFilterCategory from "./components/NestedFilterCategory/NestedFilterCategory";

import searchIcon from '../../assets/icons/search.svg';

const FilterCategory = (props: IFilterCategoryProps) => {
  const {
    title,
    options,
    handleOptionPick,
    filtersApplied = [],
    isSearch,
    searchOnChangeHandler,
    nestedArrayFieldName,
    setSubCategory,
    subCategory
  } = props;

  const handleSearchInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (searchOnChangeHandler) {
      searchOnChangeHandler(e.target.value);
    }
  };

  const handleFilterOptionClick = (option: ICategory | IFilterOption) => {
    handleOptionPick(option as ICategory);
  }

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
      )}

      <FilterOptionsContainer>
        {options.map((option) => {
          if (nestedArrayFieldName && option[nestedArrayFieldName]) {
            return <NestedFilterCategory
                key={option.value}
                nestedArrayFieldName={nestedArrayFieldName}
                option={option}
                subCategory={subCategory}
                setSubCategory={setSubCategory}
            />
          }

          return <FilterOption
            option={option}
            handleOptionPick={handleFilterOptionClick}
            isChecked={filtersApplied.some(f => f.value === option.value)}
            key={option.value}
          />
        })}
      </FilterOptionsContainer>
    </CategoryContainer>
  );
};

export default FilterCategory;
