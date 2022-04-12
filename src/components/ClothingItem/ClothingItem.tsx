import React, { useState } from 'react';
import { IClothingItemProps } from './types';
import { availableClothesColors, availableClothesSizes } from '../../temp/mockData';

import {
  ArrowIcon, AvailableColor, AvailableColorsContainer, BasketIcon,
  BasketIndicator, ClothingSizeChosenValue,
  ClothingImage,
  ClothingImageContainer,
  ClothingInfoContainer,
  ClothingItemContainer,
  ClothingTitle, SelectColorContainer, SelectColorContainerTitle,
  SizeContainer, SizeOptionContainer, SizeOptionRadio,
  SizeOptionsContainer, SizeOptionValue, SizesChooseList,
  SizeText,
} from './styled';
import basketLightIcon from '../../assets/icons/basketLight.svg';
import arrowDownIcon from '../../assets/icons/arrow-down.svg';
import checkIcon from '../../assets/icons/check.svg';

const ClothingItem = ({ clothing }: IClothingItemProps) => {
  const [selectedColor, setSelectedColor] = useState(availableClothesColors[0]);
  const [selectedSize, setSelectedSize] = useState(availableClothesSizes[2]);
  const [isSizesListVisible, setIsSizesListVisible] = useState(false);

  const onColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const onSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const toggleSizesList = () => {
    setIsSizesListVisible(prevState => !prevState);
  };

  return (
    <ClothingItemContainer>
      <ClothingImageContainer>
        <ClothingImage src={clothing.image} />
        <BasketIndicator isDark={clothing.isInBasket}>
          <BasketIcon alt="basket" src={clothing.isInBasket ? checkIcon : basketLightIcon} />
        </BasketIndicator>
      </ClothingImageContainer>
      <ClothingInfoContainer>
        <ClothingTitle>{clothing.title}</ClothingTitle>
        <SizeOptionsContainer>
          <SizeContainer onClick={toggleSizesList}>
            <SizeText>Size:</SizeText>
            <ClothingSizeChosenValue>
              {selectedSize}{' '}
              <ArrowIcon src={arrowDownIcon} />
            </ClothingSizeChosenValue>

            <SizesChooseList isListVisible={isSizesListVisible}>
              {availableClothesSizes.map(size => (
                <SizeOptionContainer
                  key={size}
                  onClick={() => onSizeSelect(size)}
                >
                  <SizeOptionRadio isSelected={selectedSize === size} />
                  <SizeOptionValue>{size}</SizeOptionValue>
                </SizeOptionContainer>
              ))}
            </SizesChooseList>

          </SizeContainer>
          <ClothingSizeChosenValue>$ {clothing.price}</ClothingSizeChosenValue>
        </SizeOptionsContainer>
        <SelectColorContainer>
          <SelectColorContainerTitle>Select color</SelectColorContainerTitle>
          <AvailableColorsContainer>
            {availableClothesColors.map(color => (
              <AvailableColor
                onClick={() => onColorSelect(color)}
                key={color}
                color={color}
                isSelected={color === selectedColor}
                isOutlined={color.toUpperCase() === '#FFF' || color.toUpperCase() === '#FFFFFF'}
              />
            ))}
          </AvailableColorsContainer>
        </SelectColorContainer>
      </ClothingInfoContainer>
    </ClothingItemContainer>
  );
};

export default ClothingItem;
