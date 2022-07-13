import { IExtendedSubCategory } from "../../temp/types";

export interface IFilterOption {
  title: string;
  value: string;
  subCategory?: IExtendedSubCategory;
}

export interface IFilterOptionProps {
  withCheckbox?: boolean;
  option: IFilterOption;
  handleOptionPick?: (option: IFilterOption) => void;
  isChecked: boolean;
}
