import { ICategory, IExtendedSubCategory } from "../../temp/types";
import { IClothingItem } from "../../temp/mockData";

export type CategoriesHeaderProps = {
    selectCategories: (categories: ICategory[]) => void;
    categories: ICategory[];
    selectedCategories: ICategory[];
    exitFittingRoom: () => void;
    selectedClothesCategory: ICategory;
    selectedClothes: IClothingItem[];
    activeClothingItem: number | null;
    setActiveClothingId: (id: number | null) => void;
    actionClothingInCart: (cloting: IClothingItem, add: boolean) => void;
    subCategory: IExtendedSubCategory | null;
    setSubCategory: (subCategory: IExtendedSubCategory | null) => void;
}