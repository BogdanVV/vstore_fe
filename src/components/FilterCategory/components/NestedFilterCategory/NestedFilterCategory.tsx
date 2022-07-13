import React, { useState } from "react";

import {
    CloseDropdownTick,
    NestedFilterCategoryArray,
    NestedFilterCategoryWrapper
} from "./styled";
import { NestedFilterCategoryProps } from "./types";
import { IExtendedSubCategory, ISubCategory } from "../../../../temp/types";
import { IFilterOption } from "../../../FilterOption/types";

import FilterOption from "../../../FilterOption/FilterOption";

import openDropdown from '../../../../assets/icons/openDropdown.svg';
import closeDropdown from '../../../../assets/icons/closeDropdown.svg';

const NestedFilterCategory: React.FC<NestedFilterCategoryProps> = ({ option, nestedArrayFieldName, setSubCategory, subCategory }) => {
    const nestedArray = option[nestedArrayFieldName] as ISubCategory[];

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleSubCategory = (option: IFilterOption) => {
        setSubCategory(option.subCategory as IExtendedSubCategory);
    }

    return <>
        <NestedFilterCategoryWrapper>
            <CloseDropdownTick
                onClick={handleDropdown}
                src={dropdownOpen ? closeDropdown : openDropdown}
                alt={'tick'}
            />
            <FilterOption
                option={option}
                isChecked={false}
                withCheckbox={false}
            />
        </NestedFilterCategoryWrapper>
        { dropdownOpen && <NestedFilterCategoryArray>
            {nestedArray.map(({ label, value, id, clothes }) => {
                const isCheckedSubCategory = id === subCategory?.id && option.id === subCategory?.categoryId;

                return <FilterOption
                    option={{
                        title: label,
                        value,
                        subCategory: {
                            id,
                            value,
                            label,
                            clothes,
                            categoryId: option.id as number
                        }
                    }}
                    isChecked={isCheckedSubCategory}
                    handleOptionPick={handleSubCategory}
                />
            })}
        </NestedFilterCategoryArray> }
    </>
}

export default NestedFilterCategory;