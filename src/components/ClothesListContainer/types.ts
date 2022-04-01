export interface IClothingItem {
  id: string | number;
  title: string;
  size: string;
  price: number;
  isInBasket: boolean;
  image: string;
}

export interface IClothesListContainerProps {
  spoilerTitle: string;
  clothesList: IClothingItem[];
  toggleFiltersBar?: () => void;
  isMobile?: boolean;
}
