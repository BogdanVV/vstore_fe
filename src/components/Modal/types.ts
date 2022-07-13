
export interface IModalWrapperProps {
    width?: string;
    height?: string;
    backgroundColor?: string;
}

export interface IModalProps extends IModalWrapperProps {
    isVisible: boolean;
}