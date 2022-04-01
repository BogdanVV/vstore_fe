export interface IFilterOption {
  title: string;
  value: string;
}

export interface IFilterOptionProps {
  option: IFilterOption;
  handleOptionPick: (option: IFilterOption) => void;
  isChecked: boolean;
}
