import React from 'react';
import { IAppButtonProps } from './types';
import { ButtonIconContainer, ButtonTitle, StyledButton } from './styled';

const AppButtonIcon = (props: IAppButtonProps) => {
  const {
    title,
    onClick,
    width,
    icon,
    margin,
  } = props;

  return (
    <StyledButton
      width={width}
      onClick={onClick}
      margin={margin}
    >
      <ButtonIconContainer>
        <img alt="icon" src={icon} height={28}/>
      </ButtonIconContainer>
      <ButtonTitle>
        {title}
      </ButtonTitle>
    </StyledButton>
  );
};

export default AppButtonIcon;
