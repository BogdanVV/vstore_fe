import React from 'react';

import { ModalWrapper } from "./styled";
import { IModalProps } from "./types";

const Modal: React.FC<IModalProps & { isVisible: boolean }> = ({
    children,
    height,
    width,
    backgroundColor,
    isVisible
}) => {
    return <>
        { isVisible && <ModalWrapper
            width={width}
            height={height}
            backgroundColor={backgroundColor}
        >
            {children}
        </ModalWrapper> }
    </>
};

export default Modal;