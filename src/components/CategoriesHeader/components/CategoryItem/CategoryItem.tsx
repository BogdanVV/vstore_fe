import React, { useState } from "react";

import { CategoriesOptionItem } from "../../styled";
import { SubCategoriesList, SubCategoryItem } from "./styled";
import { CategoryItemProps } from "./types";
import { ISubCategory } from "../../../../temp/types";

import openDropdown from '../../../../assets/icons/openDropdown.svg';
import closeDropdown from '../../../../assets/icons/closeDropdown.svg';

const CategoryItem: React.FC<CategoryItemProps> = ({ subCategories, selectedClothesCategory, category, selectCategories, currentCategory, subCategory, selectSubCategory, hideDropdown }) => {
    const [subCategoriesOpen, setSubCategoriesOpen] = useState(false);

    const handleSubCategory = (item: ISubCategory) => {
        selectSubCategory({
            ...item,
            categoryId: category.id
        });

        selectCategories([category]);
        hideDropdown();
    }

    const handleCategoryClick = (e: React.ChangeEvent<any>) => {
        if (category.id === 0) {
            selectCategories([selectedClothesCategory]);
            selectSubCategory(null);
            hideDropdown();

            return;
        }

        e.stopPropagation();
        setSubCategoriesOpen(!subCategoriesOpen)
    };

    const handleSubCategoryOpen = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        setSubCategoriesOpen(!subCategoriesOpen);
    };

    return <>
        <CategoriesOptionItem
            onClick={handleCategoryClick}
        >
            {category.label}
            {!!subCategories.length && <img
                src={subCategoriesOpen ? closeDropdown : openDropdown}
                alt={'tick'}
                onClick={handleSubCategoryOpen}
            />}

        </CategoriesOptionItem>
        {(subCategoriesOpen && subCategories.length) && <SubCategoriesList>
            {subCategories.map((item) => {
                const activeSubCategory = item.id === subCategory?.id && currentCategory === category.id;

                const selectSubCategory = () => {
                    handleSubCategory(item)
                };

                return <SubCategoryItem
                    onClick={selectSubCategory}
                    key={item.id}
                    active={activeSubCategory}
                >
                    {item.label}
                </SubCategoryItem>
            })}
        </SubCategoriesList>}
    </>
}

export default CategoryItem;