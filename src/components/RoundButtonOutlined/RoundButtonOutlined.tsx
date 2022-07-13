import React from 'react';

import { IRoundButtonProps } from './types';
import { ButtonIcon, OuterWrapper, StyledButton } from './styled';

const RoundButtonOutlined = (props: IRoundButtonProps) => {
  const {
    icon,
    onClick,
    isSemiTransparent,
  } = props;

  return (
    <OuterWrapper isSemiTransparent={isSemiTransparent} onClick={onClick}>
      <StyledButton isSemiTransparent={isSemiTransparent}>
        <ButtonIcon src={icon}/>
      </StyledButton>
    </OuterWrapper>
  );
};

export default RoundButtonOutlined;
