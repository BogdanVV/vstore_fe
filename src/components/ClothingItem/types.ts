import { IClothingItem } from '../../temp/mockData';

export interface IClothingItemProps {
  clothing: IClothingItem;
  actionClothingInCart: (item: IClothingItem, add: boolean) => void;
  setActiveClothingId: (id: number | null) => void;
  activeClothingId: number | null;
  openedClothingPopupId: number| null;
  setOpenedClothingPopupId: (id: number | null) => void;
  onSizeChange?: (id: number, size: string) => void;
  onColorChange?: (id: number, color: string) => void;
  color: string;
  size: string;
}
