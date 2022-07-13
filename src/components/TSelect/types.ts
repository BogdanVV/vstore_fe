import React from "react";

export interface ISelectProps {
    control: any;
    options: IOption[];
    name: string;
    handleNewOption?: (option: IOption | null) => void;
    prefix?: React.ReactNode;
    isMenuOpen?: boolean;
    onClick?: () => void;
}

export interface IOption {
    label: string;
    value: string;
}