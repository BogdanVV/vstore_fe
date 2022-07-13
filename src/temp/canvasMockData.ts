import { ICanvasCategory } from "./types";
import { availableClothesColors, availableClothesSizes } from "./mockData";
import { GenderEnum } from "../events/enums/gender.enum";

import blackHoodieImg from '../assets/images/black-hoody.png';

export const canvasCategories: ICanvasCategory[] = [
    {
        id: 1,
        type: 'tshirt',
        clothes: [
            {
                id: Math.random(),
                title: 'T-Shirt',
                image: blackHoodieImg,
                color: availableClothesColors[0],
                size: availableClothesSizes[1],
                price: 100,
                isInBasket: false,
                gender: GenderEnum.WOMAN
            }
        ],
    },
    {
        id: 2,
        type: 'pants',
        clothes: [
            {
                id: Math.random(),
                title: 'Pants',
                image: blackHoodieImg,
                color: availableClothesColors[3],
                size: availableClothesSizes[0],
                price: 150,
                isInBasket: true,
                gender: GenderEnum.MAN
            }
        ]
    }
];