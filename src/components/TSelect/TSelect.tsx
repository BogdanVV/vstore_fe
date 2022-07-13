import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

import { IOption, ISelectProps } from "./types";
import { selectControlStyles, selectIndicatorContainerStyles, selectOptionStyles, ValueContainer } from "./styled";

const TSelect: React.FC<ISelectProps> = ({ control, options, name, prefix, isMenuOpen = false, handleNewOption = () => {}, onClick = () => {} }) => {
    return <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { value, onChange } }) => {
            const handleChange = (option: IOption | null) => {
                onChange(option?.value);
                handleNewOption(option);
            }

            return <Select
                onMenuOpen={onClick}
                onMenuClose={onClick}
                menuIsOpen={isMenuOpen}
                isSearchable={false}
                options={options}
                value={{
                    value,
                    label: value
                }}
                onChange={handleChange}
                styles={{
                    control: selectControlStyles,
                    option: selectOptionStyles,
                    dropdownIndicator: selectIndicatorContainerStyles,
                }}
                maxMenuHeight={150}
                components={{
                    ValueContainer: ({ children }) => {
                        return <ValueContainer>
                            {prefix} {children}
                        </ValueContainer>
                    },
                    IndicatorSeparator: () => null
                }}
            />
        }}
    />
}

export default TSelect;