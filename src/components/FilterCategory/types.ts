import { IFilterOption } from '../FilterOption/types';

export interface IFilterCategoryProps {
  title: string;
  options: { title: string, value: string }[],
  handleOptionPick: (option: IFilterOption) => void;
  filtersApplied: IFilterOption[];
  isSearch?: boolean;
  searchOnChangeHandler?: (searchText: string) => void;
}
