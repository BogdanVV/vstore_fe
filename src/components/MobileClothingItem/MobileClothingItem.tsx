import React from "react";

import {
    BasketAction, MobileClothingImage,
    MobileClothingItemActions,
    MobileClothingItemImageWrapper,
    MobileClothingItemPrice,
    MobileClothingItemWrapper,
    RemoveFromBasketAction
} from "./styled";
import { MobileClothingItemProps } from "./types";

import CancelIcon from '../../assets/icons/cancel.svg';
import CheckIcon from '../../assets/icons/check.svg';
import DarkBasketIcon from '../../assets/icons/basket.svg';
import LightBasketIcon from '../../assets/icons/basketLight.svg';

const MobileClothingItem: React.FC<MobileClothingItemProps> = ({ clothingItem, activeClothingId, actionClothingInCart, setActiveClothingId }) => {
    const { price, image, id, isInBasket: inBasket } = clothingItem;

    const active = activeClothingId === id;

    const basketActionColor = (inBasket && active) ? '#434343' : (inBasket && !active) ? '#434343B2' : 'rgba(255, 255, 255, 0.7)'
    const basketActionIcon = (inBasket) ? CheckIcon : (!inBasket && !active) ? LightBasketIcon : DarkBasketIcon;

    const onAddToBasket = () => {
        if (!inBasket) {
            actionClothingInCart(clothingItem, true);
        }
    }

    const onRemoveFromBasket  = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        actionClothingInCart(clothingItem, false);
    };

    const handleActiveClothing = () => {
        setActiveClothingId(id)
    }

    return <MobileClothingItemWrapper
        isActive={active}
        onClick={handleActiveClothing}
    >
        <MobileClothingItemActions>
            <RemoveFromBasketAction>
                {inBasket && <img
                    onClick={onRemoveFromBasket}
                    src={CancelIcon}
                    width={12}
                    height={12}
                    alt={'Cancel'}
                />}
            </RemoveFromBasketAction>
            <div>
                <BasketAction color={basketActionColor}>
                    <img
                        onClick={onAddToBasket}
                        src={basketActionIcon}
                        width={15}
                        height={15}
                        alt={'action'}
                    />
                </BasketAction>
            </div>
        </MobileClothingItemActions>
        <MobileClothingItemImageWrapper>
            <MobileClothingImage
                width={76}
                height={66}
                src={image}
                alt={'clothing item'}
            />
        </MobileClothingItemImageWrapper>
        <MobileClothingItemPrice>
            $ {price}
        </MobileClothingItemPrice>
    </MobileClothingItemWrapper>
}

export default MobileClothingItem;