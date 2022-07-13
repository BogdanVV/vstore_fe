import React from "react";

import { IFilterOption } from '../FilterOption/types';
import { ICategory, IExtendedSubCategory } from "../../temp/types";

export type IOption = {
  title: string;
  value: string;
} & Record<string, unknown>;

export interface IFilterCategoryProps {
  title: string;
  options: IOption[],
  handleOptionPick: (option: ICategory) => void;
  filtersApplied?: IFilterOption[];
  isSearch?: boolean;
  searchOnChangeHandler?: (searchText: string) => void;
  nestedArrayFieldName?: string;
  setSubCategory: (subCategory: IExtendedSubCategory | null) => void;
  subCategory: IExtendedSubCategory | null;
}
