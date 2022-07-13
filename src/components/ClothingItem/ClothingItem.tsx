import React from 'react';
import { useForm } from "react-hook-form";

import TSelect from "../TSelect/TSelect";

import { IClothingItemProps } from './types';
import { availableClothesColors, availableColorsSelectOptions } from '../../temp/mockData';
import {
    AvailableColor, AvailableColorsContainer, BasketIcon,
    BasketIndicator,
    ClothingImage,
    ClothingImageContainer,
    ClothingInfoContainer,
    ClothingItemContainer,
    ClothingTitle, SelectColorContainer, SelectColorContainerTitle,
    ClothingItemActions, RemoveClothingItem, ClothingSizeChosenValue, SizeOptionsContainer, SizeText,
} from './styled';
import { IOption } from "../TSelect/types";

import basketLightIcon from '../../assets/icons/basketLight.svg';
import checkIcon from '../../assets/icons/check.svg';
import removeIcon from '../../assets/icons/cancel.svg';

const ClothingItem: React.FC<IClothingItemProps> = ({
    clothing,
    size,
    color,
    actionClothingInCart,
    setActiveClothingId,
    activeClothingId,
    setOpenedClothingPopupId,
    openedClothingPopupId,
    onColorChange = () => {},
    onSizeChange = () => {}
}) => {
    const {
        setValue,
        watch,
        register,
        control
    } = useForm({
        defaultValues: {
            size,
            color
        },
        mode: 'onTouched',
    })

    const onColorSelect = (newColor: string) => {
        setValue('color', newColor);
        onColorChange(clothing.id, newColor);
    };

    const active = activeClothingId === clothing.id;
    const [selectedColor, selectedSize] = watch(['color', 'size']);

    const handleRemoveClothingItem = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        actionClothingInCart(clothing, false);
    }

    const handleAddClothingItem = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        if (!clothing.isInBasket) {
            actionClothingInCart({
                ...clothing,
                size: selectedSize,
                color: selectedColor
            }, true);
        }
    };

    const handleActiveClothingItem = () => {
        setActiveClothingId(clothing.id);
    };

    const onSizeSelect = (option: IOption | null) => {
        onSizeChange(clothing.id, option?.value || '');
        setOpenedClothingPopupId(null);
    };

    const handleSelectClick = () => {
        if (openedClothingPopupId === clothing.id) {
            setOpenedClothingPopupId(null);

            return;
        }

        setOpenedClothingPopupId(clothing.id);
    }

    return (
        <ClothingItemContainer
            isActive={active}
            onClick={handleActiveClothingItem}
        >
            <ClothingImageContainer>
                <ClothingImage src={clothing.image}/>
                <ClothingItemActions>
                    <div>
                        {clothing.isInBasket && <RemoveClothingItem
                            src={removeIcon}
                            alt={'remove'}
                            onClick={handleRemoveClothingItem}
                        />}
                    </div>
                    <BasketIndicator isDark={clothing.isInBasket}>
                        <BasketIcon
                            alt="basket"
                            src={clothing.isInBasket ? checkIcon : basketLightIcon}
                            onClick={handleAddClothingItem}
                        />
                    </BasketIndicator>
                </ClothingItemActions>
            </ClothingImageContainer>
            <ClothingInfoContainer>
                <ClothingTitle>{clothing.title}</ClothingTitle>
                <SizeOptionsContainer>
                    <TSelect
                        onClick={handleSelectClick}
                        control={control}
                        options={availableColorsSelectOptions}
                        name={'size'}
                        handleNewOption={onSizeSelect}
                        prefix={<SizeText>Size:</SizeText>}
                        isMenuOpen={openedClothingPopupId === clothing.id}
                    />
                    <ClothingSizeChosenValue>$ {clothing.price}</ClothingSizeChosenValue>
                </SizeOptionsContainer>
                <SelectColorContainer>
                    <SelectColorContainerTitle>Select color</SelectColorContainerTitle>
                    <AvailableColorsContainer>
                        {availableClothesColors.map(color => (
                            <AvailableColor
                                key={color}
                                {...register('color')}
                                onClick={() => onColorSelect(color)}
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
