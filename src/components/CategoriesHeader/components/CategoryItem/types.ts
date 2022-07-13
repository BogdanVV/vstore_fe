import { ICategory, IExtendedSubCategory, ISubCategory } from "../../../../temp/types";

export type CategoryItemProps = {
    currentCategory: number;
    subCategory: ISubCategory | null;
    subCategories: ISubCategory[];
    selectCategories: (categories: ICategory[]) => void;
    selectSubCategory: (subCategory: IExtendedSubCategory | null) => void;
    hideDropdown: () => void;
    category: ICategory;
    selectedClothesCategory: ICategory;
}