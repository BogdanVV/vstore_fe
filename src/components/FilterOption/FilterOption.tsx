import React from 'react';

import { IFilterOptionProps } from './types';
import { Checkbox, CheckMark, OptionContainer, OptionTitle } from './styled';

const FilterOption = (props: IFilterOptionProps) => {
  const {
    option,
    handleOptionPick = () => {},
    isChecked,
    withCheckbox = true
  } = props;

  const handleOptionClick = () => {
    handleOptionPick(option);
  };

  return (
    <OptionContainer onClick={handleOptionClick}>
        { withCheckbox && <Checkbox>
            <CheckMark isChecked={isChecked} />
        </Checkbox> }
        <OptionTitle>{option.title}</OptionTitle>
    </OptionContainer>
  );
};

export default FilterOption;
