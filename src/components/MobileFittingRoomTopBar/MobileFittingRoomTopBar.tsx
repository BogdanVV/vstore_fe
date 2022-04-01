import React from 'react';

import AppButtonRound from '../AppButtonRound/AppButtonRound';
import ClothesListContainer from '../ClothesListContainer/ClothesListContainer';
import { clothesList } from '../../temp/mockData';
import { IMobileFittingRoomTopBarProps } from './types';

import backIcon from '../../assets/icons/back.svg';
import burgerMenuIcon from '../../assets/icons/burgerMenu.svg';
import {
  BurgerMenuContainer,
  MobileTopBar,
  MobileTopBarButtonsContainer,
  MobileTopBarListsContainer
} from './styled';

const MobileFittingRoomTopBar = (props: IMobileFittingRoomTopBarProps) => {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    mobileSelectedMenuCategory,
    handleMobileMenuBackButtonClick,
  } = props;

  return (
    <MobileTopBar isMenu={isMobileMenuOpen}>
      <MobileTopBarButtonsContainer>
        <BurgerMenuContainer onClick={toggleMobileMenu}>
          <img alt="menu icon" src={burgerMenuIcon}/>
        </BurgerMenuContainer>
        <AppButtonRound
          icon={backIcon}
          onClick={handleMobileMenuBackButtonClick}
          isOutlined={false}
        />
      </MobileTopBarButtonsContainer>
      <MobileTopBarListsContainer isActive={isMobileMenuOpen}>
        <ClothesListContainer
          isMobile={true}
          spoilerTitle={mobileSelectedMenuCategory === 'allClothes' ? 'ALL CLOTHES' : 'SELECTED CLOTHES'}
          clothesList={clothesList}
        />
      </MobileTopBarListsContainer>
    </MobileTopBar>
  );
};

export default MobileFittingRoomTopBar;
