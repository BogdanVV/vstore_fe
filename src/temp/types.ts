import { IClothingItem } from "./mockData";
import { GenderEnum } from "../events/enums/gender.enum";

export interface ICategory {
    id: number;
    label: string;
    value: string;
    clothes?: IClothingItem[];
    subCategories: ISubCategory[];
}

export interface ICanvasCategory {
    id: number;
    type: string;
    clothes: IExtendedClothingItem[];
}

export type IExtendedClothingItem = IClothingItem & { gender: GenderEnum };

export type ISubCategory = Omit<ICategory, 'subCategories'> & { clothes: IClothingItem[] };

export type IExtendedSubCategory = ISubCategory & { categoryId: number };