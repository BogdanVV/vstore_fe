import React from "react";

import { StyledButton } from "./styled";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = (props) => {
    return <StyledButton {...props} />
};

export default Button;