import { ICategory } from "./types";

import blackHoodieImg from '../assets/images/black-hoody.png';

export interface IClothingItem {
    id: number;
    title: string;
    size: string;
    price: number;
    isInBasket: boolean;
    image: string;
    color: string;
}

export type IExtendedClothingItem = IClothingItem & { subCategory: number, category: number };

export const getClothesList = (): IClothingItem[] => [
    {
        id: Math.random(),
        title: 'Lorem Ipsum',
        size: 'XL',
        price: 29.25,
        isInBasket: false,
        image: blackHoodieImg,
        color: '#161616',
    },
    {
        id: Math.random(),
        title: 'Lorem Ipsum',
        size: 'XL',
        price: 29.25,
        isInBasket: false,
        image: blackHoodieImg,
        color: '#161616',
    },
    {
        id: Math.random(),
        title: 'Lorem Ipsum',
        size: 'XL',
        price: 29.25,
        isInBasket: false,
        image: blackHoodieImg,
        color: '#161616',
    },
    {
        id: Math.random(),
        title: 'Lorem Ipsum',
        size: 'XL',
        price: 29.25,
        isInBasket: false,
        image: blackHoodieImg,
        color: '#161616',
    },
    {
        id: Math.random(),
        title: 'Lorem Ipsum',
        size: 'XL',
        price: 29.25,
        isInBasket: false,
        image: blackHoodieImg,
        color: '#161616',
    },
];

export const clothesCategories: ICategory[] = [
    {
        id: 1,
        label: 'Fitness',
        value: 'Fitness',
        subCategories: [
            {
                id: 1,
                label: 'Tops',
                value: 'tops',
                clothes: getClothesList()
            },
            {
                id: 2,
                label: 'Bottoms',
                value: 'bottoms',
                clothes: getClothesList()
            },
            {
                id: 3,
                label: 'Joggers',
                value: 'joggers',
                clothes: getClothesList()
            },
            {
                id: 4,
                label: 'Shoes',
                value: 'shoes',
                clothes: getClothesList()
            },
            {
                id: 5,
                label: 'Sports bras',
                value: 'sports bras',
                clothes: getClothesList()
            },
            {
                id: 6,
                label: 'Leggings',
                value: 'leggings',
                clothes: getClothesList()
            }
        ],
    },
    {
        id: 2,
        label: 'Lifestyle',
        value: 'lifestyle',
        subCategories: [
            {
                id: 1,
                label: 'Tops',
                value: 'tops',
                clothes: getClothesList()
            },
            {
                id: 2,
                label: 'Bottoms',
                value: 'bottoms',
                clothes: getClothesList()
            },
            {
                id: 3,
                label: 'Shoes',
                value: 'shoes',
                clothes: getClothesList()
            },
            {
                id: 4,
                label: 'Dresses',
                value: 'dresses',
                clothes: getClothesList()
            }
        ],
    },
    {
        id: 3,
        label: 'Tops',
        value: 'tops',
        subCategories: [
            {
                id: 1,
                label: 'Sports bra',
                value: 'sports bra',
                clothes: getClothesList()
            },
            {
                id: 2,
                label: 'Crop top',
                value: 'crop top',
                clothes: getClothesList()
            },
            {
                id: 3,
                label: 'Blouses',
                value: 'blouses',
                clothes: getClothesList()
            },
            {
                id: 4,
                label: 'Sweaters',
                value: 'sweaters',
                clothes: getClothesList()
            },
            {
                id: 5,
                label: 'Hoodies',
                value: 'hoodies',
                clothes: getClothesList()
            },
            {
                id: 6,
                label: 'Short sleeve',
                value: 'short sleeve',
                clothes: getClothesList()
            },
            {
                id: 7,
                label: 'Long sleeve',
                value: 'long sleeve',
                clothes: getClothesList()
            },
            {
                id: 8,
                label: 'Sleeveless tops',
                value: 'sleeveless tops',
                clothes: getClothesList()
            },
            {
                id: 9,
                label: 'Sweatshirts',
                value: 'sweatshirts',
                clothes: getClothesList()
            }
        ],
    },
    {
        id: 4,
        label: 'Bottoms',
        value: 'bottoms',
        subCategories: [
            {
                id: 1,
                label: 'Shorts',
                value: 'shorts',
                clothes: getClothesList()
            },
            {
                id: 2,
                label: 'Jeans',
                value: 'jeans',
                clothes: getClothesList()
            },
            {
                id: 3,
                label: 'Joggers',
                value: 'joggers',
                clothes: getClothesList()
            },
            {
                id: 4,
                label: 'Formal',
                value: 'formal',
                clothes: getClothesList()
            },
            {
                id: 5,
                label: 'Leggings',
                value: 'leggings',
                clothes: getClothesList()
            }
        ],
    },
    {
        id: 5,
        label: 'Dresses',
        value: 'dresses',
        subCategories: [
            {
                id: 1,
                label: 'T Shirt',
                value: 't shirt',
                clothes: getClothesList()
            },
            {
                id: 2,
                label: 'Long sleeve',
                value: 'long sleeve',
                clothes: getClothesList()
            },
            {
                id: 3,
                label: 'Long sleeve',
                value: 'long sleeve',
                clothes: getClothesList()
            },
            {
                id: 4,
                label: 'Bodycon',
                value: 'bodycon',
                clothes: getClothesList()
            },
            {
                id: 5,
                label: 'Midi',
                value: 'Midi',
                clothes: getClothesList()
            },
            {
                id: 6,
                label: 'Maxi',
                value: 'Maxi',
                clothes: getClothesList()
            },
            {
                id: 7,
                label: 'Denim',
                value: 'denim',
                clothes: getClothesList()
            },
            {
                id: 8,
                label: 'Short',
                value: 'Short',
                clothes: getClothesList()
            },
            {
                id: 9,
                label: 'Sweater',
                value: 'sweater',
                clothes: getClothesList()
            }
        ],
    },
    {
        id: 6,
        label: 'Swimwear',
        value: 'swimwear',
        subCategories: [
            {
                id: 1,
                label: 'Bikini',
                value: 'bikini',
                clothes: getClothesList()
            },
            {
                id: 2,
                label: 'One Piece',
                value: 'one piece',
                clothes: getClothesList()
            },
            {
                id: 3,
                label: 'Max and Match',
                value: 'max and match',
                clothes: getClothesList()
            },
            {
                id: 4,
                label: 'Cover ups',
                value: 'cover ups',
                clothes: getClothesList()
            },
            {
                id: 5,
                label: 'Tops',
                value: 'tops',
                clothes: getClothesList()
            },
            {
                id: 6,
                label: 'Bottoms',
                value: 'bottoms',
                clothes: getClothesList()
            },
        ],
    },
    {
        id: 7,
        label: 'Shoes',
        value: 'shoes',
        subCategories: [
            {
                id: 1,
                label: 'Heels',
                value: 'heels',
                clothes: getClothesList()
            },
            {
                id: 2,
                label: 'Platform',
                value: 'platform',
                clothes: getClothesList()
            },
            {
                id: 3,
                label: 'Wedges',
                value: 'wedges',
                clothes: getClothesList()
            },
            {
                id: 4,
                label: 'Flats',
                value: 'flats',
                clothes: getClothesList()
            },
            {
                id: 5,
                label: 'Sandals',
                value: 'sandals',
                clothes: getClothesList()
            },
            {
                id: 6,
                label: 'Sneakers',
                value: 'sneakers',
                clothes: getClothesList()
            },
            {
                id: 7,
                label: 'Boots',
                value: 'boots',
                clothes: getClothesList()
            },
            {
                id: 8,
                label: 'Fitness',
                value: 'fitness',
                clothes: getClothesList()
            },
        ],
    },
]

export const availableClothesColors = [
    '#161616',
    '#7781DB',
    '#E4DC0B',
    '#FFFFFF',
    '#6F9E49',
    // '#F56D91',
    // '#FF6B6B',
    // '#557B83',
];

export const availableClothesSizes = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    'XXXL',
    'XXXXL',
];

export const availableColorsSelectOptions = availableClothesSizes.map((item) => {
    return {
        label: item,
        value: item
    }
})
