import { GenderEnum } from "../../events/enums/gender.enum";
import { ScenesEnum } from "../../events/enums/scenes.enum";

export interface IChangeGenderPayload {
    gender: GenderEnum;
}

export interface IChangeIsLoadingPayload {
    isLoading: boolean;
}

export interface ISelectCategoryPayload {
    category: string;
}

export interface IChangeScenePayload {
    scene: ScenesEnum;
}