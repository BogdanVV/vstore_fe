import React, { useState } from 'react';
import { IClothesListContainerProps } from './types';
import ClothingItem from '../ClothingItem/ClothingItem';
import {
  ClothesListWrapper,
  ClothingItemsContainer, NoClothesMessage,
  SpoilerTitle
} from './styled';
import AppButton from '../AppButton/AppButton';

const ClothesListContainer = (props: IClothesListContainerProps) => {
  const {
    spoilerTitle,
    clothesList,
    toggleFiltersBar,
    isMobile = false,
  } = props;

  const isSelectedClothesTab = spoilerTitle === 'SELECTED CLOTHES';

  const [isSpoilerOpen, setIsSpoilerOpen] = useState(isSelectedClothesTab || isMobile);

  const onSpoilerClick = () => {
    if (!isMobile) {
      if (toggleFiltersBar) {
        toggleFiltersBar();
      }

      setIsSpoilerOpen(prevState => !prevState);
    }
  };

  return (
    <ClothesListWrapper>
      <SpoilerTitle>
        {spoilerTitle}
        {!isSelectedClothesTab && !isMobile && (
          <AppButton
            title={isSpoilerOpen ? 'HIDE ALL' : 'VIEW ALL'}
            width={112}
            onClick={onSpoilerClick}
            backgroundColor="transparent"
            borderColor={isSpoilerOpen ? '#FFF' : '#333'}
            textColor={isSpoilerOpen ? '#FFF' : '#333'}
          />
        )}
      </SpoilerTitle>
      <ClothingItemsContainer isOpen={isSpoilerOpen}>
        {clothesList.map(clothing => (
          <ClothingItem
            key={clothing.id}
            clothing={clothing}
          />
        ))}
      </ClothingItemsContainer>
        {clothesList.length === 0 && (
          <NoClothesMessage>
            {isSelectedClothesTab ? 'No selected clothes yet...' : 'No clothes found'}
          </NoClothesMessage>
        )}
    </ClothesListWrapper>
  );
};

export default ClothesListContainer;
