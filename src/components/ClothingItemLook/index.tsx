import React from "react";

import { ClothingItemLookProps } from "./types";
import { ClothingItemLookImage, ClothingItemLookWrapper } from './styled';

const ClothingItemLook: React.FC<ClothingItemLookProps> = ({ activeClothingId, clothes }) => {
    const currentClothingItem = clothes.find((item) => item.id === activeClothingId);

    return <ClothingItemLookWrapper>
        {
            currentClothingItem && <ClothingItemLookImage src={currentClothingItem?.image} alt="image"/>
        }
    </ClothingItemLookWrapper>
}

export default ClothingItemLook;