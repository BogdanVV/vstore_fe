import React from 'react';

import { StyledButton, StyledIcon } from './styled';
import { IRoundButtonProps } from './types';

const RoundButton = (props: IRoundButtonProps) => {
  const { icon, isSemiTransparent, onClick } = props;

  return (
    <StyledButton
      onClick={onClick}
      isSemiTransparent={isSemiTransparent}
    >
      <StyledIcon src={icon} />
    </StyledButton>
  );
};

export default RoundButton;
