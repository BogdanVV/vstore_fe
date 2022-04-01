import React from 'react';
import { IFilterOptionProps } from './types';
import { Checkbox, CheckMark, OptionContainer, OptionTitle } from './styled';

const FilterOption = (props: IFilterOptionProps) => {
  const {
    option,
    handleOptionPick,
    isChecked,
  } = props;

  const handleOptionClick = () => {
    handleOptionPick(option);
  };

  return (
    <OptionContainer onClick={handleOptionClick}>
      <Checkbox>
        <CheckMark isChecked={isChecked} />
      </Checkbox>
      <OptionTitle>{option.title}</OptionTitle>
    </OptionContainer>
  );
};

export default FilterOption;
