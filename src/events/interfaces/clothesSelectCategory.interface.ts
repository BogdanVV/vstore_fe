import { GenderEnum } from "../enums/gender.enum";

export interface IClothesSelectCategoryPayload {
    show: boolean;
    type: string;
    gender: GenderEnum;
}