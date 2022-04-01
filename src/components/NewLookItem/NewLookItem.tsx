import React from 'react';
import { INewLookItemProps } from './types';
import {
  ItemColor, ItemColorValue,
  ItemInfoContainer,
  ItemPicture,
  ItemPrice,
  ItemSize,
  ItemSizeValue,
  ItemTitle,
  NewItemContainer
} from './styled';

const NewLookItem = ({ newLookItem }: INewLookItemProps) => {
  const { title, image, price, size, color } = newLookItem;

  return (
    <NewItemContainer>
      <ItemPicture
        src={image}
      />
      <ItemInfoContainer>
        <div>
          <ItemTitle>{title}</ItemTitle>
          <ItemSize>Size: <ItemSizeValue>{size}</ItemSizeValue></ItemSize>
          <ItemColor>Selected color:<ItemColorValue color={color}/></ItemColor>
        </div>
        <ItemPrice>$ {price}</ItemPrice>
      </ItemInfoContainer>
    </NewItemContainer>
  );
};

export default NewLookItem;
