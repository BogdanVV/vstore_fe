import React from 'react';
import { IAppButtonProps } from './types';
import { StyledButton } from './styled';

const AppButton = (props: IAppButtonProps) => {
  const {
    title,
    width,
    onClick,
    backgroundColor,
    borderColor,
    textColor,
    margin,
    padding,
  } = props;

  return (
    <StyledButton
      onClick={onClick}
      width={width}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      margin={margin}
      padding={padding}
    >
      {title}
    </StyledButton>
  );
};

export default AppButton;
