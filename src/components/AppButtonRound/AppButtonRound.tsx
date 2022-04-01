import React from 'react';
import { IAppButtonRoundProps } from './types';
import { ButtonInnerWrapper, ButtonOuterWrapper, Icon } from './styled';

const AppButtonRound = (props: IAppButtonRoundProps) => {
  const {
    icon,
    right,
    left,
    bottom,
    top,
    onClick,
    isOutlined = true,
    isPositionAbsolute = false,
    margin,
  } = props;

  return (
    <ButtonOuterWrapper
      isPositionAbsolute={isPositionAbsolute}
      isOutlined={isOutlined}
      right={right}
      left={left}
      bottom={bottom}
      top={top}
      onClick={onClick}
      margin={margin}
    >
      <ButtonInnerWrapper isOutlined={isOutlined}>
        <Icon src={icon} />
      </ButtonInnerWrapper>
    </ButtonOuterWrapper>
  );
};

export default AppButtonRound;
