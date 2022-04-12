import blackHoodieImg from '../assets/images/black-hoody.png';

export interface IClothingItem {
  id: string | number;
  title: string;
  size: string;
  price: number;
  isInBasket: boolean;
  image: string;
  color: string;
}

export const filterCategories = [
  {
    title: 'FILTERS',
    isSearch: false,
    options: [
      { title: 'New', value: 'new' },
      { title: 'Sale', value: 'sale' },
    ],
  },
  {
    title: 'CATEGORIES',
    isSearch: false,
    options: [
      { title: 'Lorem ipsum 1 Lorem ipsum 1', value: 'loremIpsum1' },
      { title: 'Lorem ipsum 2', value: 'loremIpsum2' },
      { title: 'Lorem ipsum 3Lorem ipsum 3 fjdskf fwj k', value: 'loremIpsum3' },
      { title: 'Lorem ipsum 4', value: 'loremIpsum4' },
      { title: 'Lorem ipsum 5 Lorem ipsum 5', value: 'loremIpsum5' },
      { title: 'Lorem ipsum 6', value: 'loremIpsum6' },
    ],
  },
  {
    title: 'BRANDS',
    isSearch: true,
    options: [
      { title: 'Lorem ipsum 1', value: 'loremIpsum7' },
      { title: 'Lorem ipsum 2', value: 'loremIpsum8' },
      { title: 'Lorem ipsum 3', value: 'loremIpsum9' },
      { title: 'Lorem ipsum 4', value: 'loremIpsum10' },
      { title: 'Lorem ipsum 5', value: 'loremIpsum11' },
      { title: 'Lorem ipsum 6', value: 'loremIpsum12' },
    ],
  },
  {
    title: 'SHOPS',
    isSearch: true,
    options: [
      { title: 'Lorem ipsum 1', value: 'loremIpsum13' },
      { title: 'Lorem ipsum 2', value: 'loremIpsum14' },
      { title: 'Lorem ipsum 3', value: 'loremIpsum15' },
      { title: 'Lorem ipsum 4', value: 'loremIpsum16' },
      { title: 'Lorem ipsum 5', value: 'loremIpsum17' },
      { title: 'Lorem ipsum 6', value: 'loremIpsum18' },
    ],
  },
];

interface INewLookItem {
  id: number;
  image: string;
  title: string;
  price: number;
  size: string;
  color: string;
}

export const newLookItems: INewLookItem[] = [
  {
    id: 1,
    image: blackHoodieImg,
    title: 'Lorem Ipsum',
    price: 23.25,
    size: 'XL',
    color: '#000',
  },
  {
    id: 2,
    image: blackHoodieImg,
    title: 'Lorem Ipsum Dolor',
    price: 23.25,
    size: 'XL',
    color: '#123456',
  },
  {
    id: 3,
    image: blackHoodieImg,
    title: 'Lorem Ipsum Dolor Sit Tratata',
    price: 23.25,
    size: 'XXL',
    color: '#abcdef',
  },
  {
    id: 4,
    image: blackHoodieImg,
    title: 'Lorem Ipsum',
    price: 23.25,
    size: 'XL',
    color: '#000',
  },
  {
    id: 5,
    image: blackHoodieImg,
    title: 'Lorem Ipsum Dolor',
    price: 23.25,
    size: 'XL',
    color: '#123456',
  },
  {
    id: 6,
    image: blackHoodieImg,
    title: 'Lorem Ipsum Dolor Sit Tratata',
    price: 23.25,
    size: 'XXL',
    color: '#abcdef',
  },
  {
    id: 7,
    image: blackHoodieImg,
    title: 'Lorem Ipsum',
    price: 23.25,
    size: 'XL',
    color: '#000',
  },
  {
    id: 8,
    image: blackHoodieImg,
    title: 'Lorem Ipsum Dolor',
    price: 23.25,
    size: 'XL',
    color: '#123456',
  },
  {
    id: 9,
    image: blackHoodieImg,
    title: 'Lorem Ipsum Dolor Sit Tratata',
    price: 23.25,
    size: 'XXL',
    color: '#abcdef',
  },
];

export const clothesList: IClothingItem[] = [
  {
    id: 1,
    title: 'Lorem Ipsum dolor sit amet',
    size: 'XL',
    price: 29.25,
    isInBasket: false,
    image: blackHoodieImg,
    color: '#161616',
  },
  {
    id: 2,
    title: 'Lorem Ipsum dolor sit amet',
    size: 'XL',
    price: 29.25,
    isInBasket: true,
    image: blackHoodieImg,
    color: '#161616',
  },
  {
    id: 3,
    title: 'Lorem Ipsum dolor sit amet',
    size: 'XL',
    price: 29.25,
    isInBasket: false,
    image: blackHoodieImg,
    color: '#161616',
  },
  {
    id: 4,
    title: 'Lorem Ipsum dolor sit amet',
    size: 'XL',
    price: 29.25,
    isInBasket: true,
    image: blackHoodieImg,
    color: '#161616',
  },
  {
    id: 5,
    title: 'Lorem Ipsum dolor sit amet',
    size: 'XL',
    price: 29.25,
    isInBasket: false,
    image: blackHoodieImg,
    color: '#161616',
  },
  {
    id: 6,
    title: 'Lorem Ipsum dolor sit amet',
    size: 'XL',
    price: 29.25,
    isInBasket: false,
    image: blackHoodieImg,
    color: '#161616',
  },
  {
    id: 7,
    title: 'Lorem Ipsum dolor sit amet',
    size: 'XL',
    price: 29.25,
    isInBasket: false,
    image: blackHoodieImg,
    color: '#161616',
  },
  {
    id: 8,
    title: 'Lorem Ipsum dolor sit amet',
    size: 'XL',
    price: 29.25,
    isInBasket: false,
    image: blackHoodieImg,
    color: '#161616',
  },
];

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
