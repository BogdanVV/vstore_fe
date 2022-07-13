import React, { useEffect, useState } from 'react';

import {
    CategoriesHeaderWrapper,
    CategoriesSelect,
    CategoryHeaderWrapper,
    CategoryTitle, MobileCategoriesWrapper
} from "./styled";
import {
    BuyNowButton,
    CheckoutPriceCost,
    CheckoutTotalCost,
    MobileCategoryClothesList,
    MobileCategoryClothesListTitle, MobileCheckoutButton,
    MobileCheckoutButtonWrapper
} from "../../pages/fitting-room/styled";
import { CategoriesHeaderProps } from "./types";
import { ICategory, ISubCategory } from "../../temp/types";

import MobileClothingItem from "../MobileClothingItem/MobileClothingItem";

import burgerMenu from '../../assets/icons/fullBurgerMenu.svg';
import exitArrow from '../../assets/icons/exitWhiteArrow.svg';
import CategoryItem from "./components/CategoryItem/CategoryItem";

const CategoriesHeader: React.FC<CategoriesHeaderProps> = ({
    exitFittingRoom,
    categories,
    selectCategories,
    selectedCategories,
    selectedClothesCategory,
    selectedClothes,
    activeClothingItem,
    setActiveClothingId,
    actionClothingInCart,
    subCategory,
    setSubCategory,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const currentCategory = subCategory ? subCategory : selectedCategories[0]?.subCategories?.[0] ? selectedCategories[0]?.subCategories?.[0] : selectedClothesCategory;

    const allCategories: ICategory[] = [
        selectedClothesCategory,
        ...categories
    ];

    const categoryClothes = (currentCategory.clothes?.length ? currentCategory.clothes : selectedClothes);

    useEffect(() => {
        if (subCategory) {
            const newCategory = categories.find((item) => item.id === subCategory.categoryId) as ICategory;
            const newSubCategory = newCategory.subCategories.find((item) => item.id === subCategory.id) as ISubCategory;

            setSubCategory({
                ...newSubCategory,
                categoryId: newCategory.id
            })
        }
        // eslint-disable-next-line
    }, [selectedClothes]);

    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return <MobileCategoriesWrapper>
        <div style={{position: 'relative'}}>
            <CategoriesHeaderWrapper>
                <CategoryHeaderWrapper>
                    <img
                        src={burgerMenu}
                        alt={'menu'}
                        onClick={handleDropdown}
                    />
                    <CategoryTitle>
                        {currentCategory?.label}
                    </CategoryTitle>
                </CategoryHeaderWrapper>
                <img
                    src={exitArrow}
                    alt={'exit'}
                    onClick={exitFittingRoom}
                />
            </CategoriesHeaderWrapper>
            <CategoriesSelect isVisible={dropdownOpen}>
                {allCategories.map((categoryItem: ICategory) => {
                    return <CategoryItem
                        hideDropdown={handleDropdown}
                        key={`${categoryItem.value + categoryItem.id}`}
                        currentCategory={subCategory?.categoryId as number}
                        subCategory={subCategory}
                        subCategories={categoryItem.subCategories}
                        selectSubCategory={setSubCategory}
                        selectCategories={selectCategories}
                        category={categoryItem}
                        selectedClothesCategory={selectedClothesCategory}
                    />
                })}
            </CategoriesSelect>
        </div>
        <MobileCategoryClothesList
            $blurScroll={categoryClothes.length >= 7}
        >
            <MobileCategoryClothesListTitle>
                {currentCategory.label}
            </MobileCategoryClothesListTitle>
            {categoryClothes.map((item) => {
                return <MobileClothingItem
                    key={item.id}
                    activeClothingId={activeClothingItem}
                    setActiveClothingId={setActiveClothingId}
                    actionClothingInCart={actionClothingInCart}
                    clothingItem={item}
                />
            })}
        </MobileCategoryClothesList>
        {currentCategory.id === 0 && <MobileCheckoutButtonWrapper>
            <MobileCheckoutButton>
                <div>
                    <CheckoutTotalCost>
                        TOTAL COST
                    </CheckoutTotalCost>
                    <CheckoutPriceCost>
                        $ xxx.xxx
                    </CheckoutPriceCost>
                </div>
                <BuyNowButton responsiveFontSize={'11px'} >
                    CHECK OUT
                </BuyNowButton>
            </MobileCheckoutButton>
        </MobileCheckoutButtonWrapper>}
    </MobileCategoriesWrapper>
}

export default CategoriesHeader;