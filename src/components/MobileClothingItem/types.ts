import { IClothingItem } from "../../temp/mockData";

export type MobileClothingItemProps = {
    activeClothingId: number | null;
    setActiveClothingId: (id: number) => void;
    actionClothingInCart: (item: IClothingItem, add: boolean) => void;
    clothingItem: IClothingItem;
}