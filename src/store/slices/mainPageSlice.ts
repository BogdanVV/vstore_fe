import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GenderEnum } from "../../events/enums/gender.enum";
import {IChangeGenderPayload, IChangeIsLoadingPayload, IChangeScenePayload, ISelectCategoryPayload} from "./types";
import { ICanvasCategory } from "../../temp/types";
import { IClothingItem } from "../../temp/mockData";
import { canvasCategories } from "../../temp/canvasMockData";
import { ScenesEnum } from "../../events/enums/scenes.enum";

export interface IMainPageInitialState {
  gender: GenderEnum | null;
  isLoading: boolean;
  categories: ICanvasCategory[];
  selectedCategory: string | null;
  currentClothes: IClothingItem[];
  currentScene: ScenesEnum;
}

const initialState: IMainPageInitialState = {
  gender: null,
  isLoading: true,
  categories: canvasCategories,
  selectedCategory: null,
  currentClothes: [],
  currentScene: ScenesEnum.STORE,
};

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    changeGender: (state, action: PayloadAction<IChangeGenderPayload>) => {
      state.gender = action.payload.gender;
    },
    changeIsLoading: (state, action: PayloadAction<IChangeIsLoadingPayload>) => {
      state.isLoading = action.payload.isLoading;
    },
    selectCategory: (state, action: PayloadAction<ISelectCategoryPayload>) => {
      const {category} = action.payload;

      state.selectedCategory = category;

      const selectedCategory = state.categories.find((item) => item.type === category);

      state.currentClothes = selectedCategory?.clothes || [];
    },
    changeScene: (state, action: PayloadAction<IChangeScenePayload>) => {
      state.currentScene = action.payload.scene;
    }
  },
});

export const { changeGender, changeIsLoading, selectCategory, changeScene } = mainPageSlice.actions;
