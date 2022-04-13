import React, { createRef, RefObject, useEffect, useState } from 'react';

import { clothesList, filterCategories, newLookItems } from '../../temp/mockData';
import ClothingItem from '../../components/ClothingItem/ClothingItem';
import FilterCategory from '../../components/FilterCategory/FilterCategory';
import { IFilterOption } from '../../components/FilterOption/types';

import {
  PageWrapper,
  ExitFitRoomButtonContainer,
  HeaderContainer,
  ContentContainer,
  LeftContentContainer,
  MiddleContentContainer,
  RightContentContainer,
  NewLookContainer,
  ControlButtonsContainer,
  ClothesListButtonsContainer,
  NewLookContainerTitle,
  NewLookItemsContainer,
  NewLookItem,
  NewLookImage,
  NewLookItemInfoContainer,
  NewLookTitlePriceContainer,
  NewLookItemTitle,
  NewLookItemPrice,
  NewLookItemSizeContainer,
  NewLookItemSizeValue,
  NewLookItemColorContainer,
  NewLookItemColor,
  NewLookTotalCost,
  NewLookTotalCostValue,
  BuyNowButton,
  ExitButtonContainer,
  ZoomControlButtonsContainer,
  SelectClothesListButton,
  MobileListContainer,
  MobileHeaderContainer,
  MobileMenuIcon,
  MobListTitle,
  MobClothesItemsContainer,
  EmptyClothesListMessage,
  MobHeaderButtonsContainer,
  HeaderTitle,
  BasketIcon,
  ClothesListWrapper,
  ClothesListTitle,
  ClothesItemsContainer,
  ClothesListTitleContainer,
  ViewAllClothesButton,
  FiltersContainer, BasketIconContainer,
} from './styled';
import backgroundImage from '../../assets/images/fitting-room-background.jpg';
import basketIcon from '../../assets/icons/basket.svg';
import backArrowIcon from '../../assets/icons/back.svg';
import menuIcon from '../../assets/icons/burgerMenu.svg';
import exitArrowIcon from '../../assets/icons/exitArrow.svg';
import zoomOutIcon from '../../assets/icons/zoomOut.svg';
import zoomInIcon from '../../assets/icons/zoomIn.svg';
import RoundButton from '../../components/RoundButton/RoundButton';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

type SelectedClothesCategory = 'ALL CLOTHES' | 'SELECTED CLOTHES' | '';

const TestPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedClothesList, setSelectedClothesList] = useState<SelectedClothesCategory>('ALL CLOTHES');
  const [isAllClothesListExpanded, setIsAllClothesListExpanded] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState<IFilterOption[]>([]);
  const [isBackgroundImageLoaded, setIsBackgroundImageLoaded] = useState(false);

  const pageLayoutRef: RefObject<HTMLDivElement> = createRef();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleExitFitRoomButtonClick = () => {
    navigate('/');
  };

  const handleZoomInClick = () => {
    console.log('handleZoomInClick')
  };

  const handleZoomOutClick = () => {
    console.log('handleZoomOutClick')
  };

  const onSelectClothesCategory = (category: SelectedClothesCategory) => {
    setSelectedClothesList(category);
    toggleMobileMenu();
  };

  const toggleAllClothesList = () => {
    setIsAllClothesListExpanded(prev => !prev);
  };

  const handleOptionPick = (option: IFilterOption) => {
    if (filtersApplied.some(filter => filter.value === option.value)) {
      setFiltersApplied(filtersApplied.filter(f => f.value !== option.value));
    } else {
      setFiltersApplied(prev => [...prev, option]);
    }
  };

  const handleSearchTextChange = (searchQuery: string) => {
    console.log(searchQuery);
  };

  useEffect(() => {
    // loader handler
    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.onload = () => {
      if (pageLayoutRef.current) {
        pageLayoutRef.current.style.backgroundImage = `url(${backgroundImage})`;
      }
      setIsBackgroundImageLoaded(true);
    }
  }, []);

  return (
    <PageWrapper ref={pageLayoutRef}>
      <ExitFitRoomButtonContainer>
        <RoundButton
          icon={exitArrowIcon}
          onClick={handleExitFitRoomButtonClick}
        />
      </ExitFitRoomButtonContainer>

      <MobileListContainer isOpen={isMobileMenuOpen}>
        <MobileHeaderContainer>
          <MobHeaderButtonsContainer>
            <MobileMenuIcon src={menuIcon} alt="menu" />
            <RoundButton
              icon={backArrowIcon}
              onClick={toggleMobileMenu}
            />
          </MobHeaderButtonsContainer>
        </MobileHeaderContainer>
        <MobListTitle>{selectedClothesList}</MobListTitle>
        <MobClothesItemsContainer>
          {clothesList.length === 0
            ? (
              <EmptyClothesListMessage>
                {selectedClothesList === 'ALL CLOTHES'
                  ? 'No selected clothes yet...'
                  : 'No clothes found'}
              </EmptyClothesListMessage>
            )
            : clothesList.map(clothing => (
              <ClothingItem key={clothing.id} clothing={clothing} />
            ))}
        </MobClothesItemsContainer>
      </MobileListContainer>

      {!isBackgroundImageLoaded
        ? <Loader />
        : (
          <ContentContainer isFiltersBar={isAllClothesListExpanded}>
            <HeaderContainer isTransparent={isMobileMenuOpen}>
              <HeaderTitle>AVENBECK</HeaderTitle>
              <BasketIconContainer>
                <BasketIcon src={basketIcon} alt="basket" />
              </BasketIconContainer>
            </HeaderContainer>

            <LeftContentContainer>
              <FiltersContainer>
                {filterCategories.map(category => (
                  <FilterCategory
                    filtersApplied={filtersApplied}
                    key={category.title}
                    title={category.title}
                    options={category.options}
                    handleOptionPick={handleOptionPick}
                    isSearch={category.isSearch}
                    searchOnChangeHandler={handleSearchTextChange}
                  />
                ))}
              </FiltersContainer>
            </LeftContentContainer>

            <MiddleContentContainer>
              <NewLookContainer isFiltersBar={isAllClothesListExpanded}>
                <NewLookContainerTitle>NEW LOOK</NewLookContainerTitle>
                <NewLookItemsContainer>
                  {newLookItems.map(item => (
                    <NewLookItem key={item.id}>
                      <NewLookImage src={item.image} />
                      <NewLookItemInfoContainer>
                        <NewLookTitlePriceContainer>
                          <NewLookItemTitle>{item.title}</NewLookItemTitle>
                          <NewLookItemPrice>$ {item.price}</NewLookItemPrice>
                        </NewLookTitlePriceContainer>
                        <NewLookItemSizeContainer>
                          Size: <NewLookItemSizeValue>{item.size}</NewLookItemSizeValue>
                        </NewLookItemSizeContainer>
                        <NewLookItemColorContainer>
                          Selected color: <NewLookItemColor color={item.color} />
                        </NewLookItemColorContainer>
                      </NewLookItemInfoContainer>
                    </NewLookItem>
                  ))}
                </NewLookItemsContainer>
                <NewLookTotalCost>TOTAL COST</NewLookTotalCost>
                <NewLookTotalCostValue>$ XXX.XXX</NewLookTotalCostValue>
                <BuyNowButton>BUY NOW</BuyNowButton>
              </NewLookContainer>
              <ControlButtonsContainer>
                <ExitButtonContainer>
                  <RoundButton
                    icon={exitArrowIcon}
                    onClick={handleExitFitRoomButtonClick}
                    isSemiTransparent
                  />
                </ExitButtonContainer>
                <ZoomControlButtonsContainer>
                  <RoundButton
                    icon={zoomOutIcon}
                    onClick={handleZoomOutClick}
                    isSemiTransparent
                  />
                  <RoundButton
                    icon={zoomInIcon}
                    onClick={handleZoomInClick}
                    isSemiTransparent
                  />
                </ZoomControlButtonsContainer>
              </ControlButtonsContainer>
              <ClothesListButtonsContainer>
                <SelectClothesListButton
                  onClick={() => onSelectClothesCategory('SELECTED CLOTHES')}
                >
                  SELECTED CLOTHES
                </SelectClothesListButton>
                <SelectClothesListButton
                  onClick={() => onSelectClothesCategory('ALL CLOTHES')}
                >
                  ALL CLOTHES
                </SelectClothesListButton>
              </ClothesListButtonsContainer>
            </MiddleContentContainer>

            <RightContentContainer>
              <ClothesListWrapper>
                <ClothesListTitleContainer>
                  <ClothesListTitle>SELECTED CLOTHES</ClothesListTitle>
                </ClothesListTitleContainer>
                <ClothesItemsContainer>
                  {clothesList.length === 0
                    ? (
                      <EmptyClothesListMessage>
                        No selected clothes yet...
                      </EmptyClothesListMessage>
                    )
                    : clothesList.map(clothing => (
                      <ClothingItem key={clothing.id} clothing={clothing} />
                    ))}
                </ClothesItemsContainer>
              </ClothesListWrapper>
              <ClothesListWrapper>
                <ClothesListTitleContainer>
                  <ClothesListTitle>ALL CLOTHES</ClothesListTitle>
                  <ViewAllClothesButton
                    onClick={toggleAllClothesList}
                    isAllClothesListExpanded={isAllClothesListExpanded}
                  >
                    {isAllClothesListExpanded ? 'HIDE ALL' : 'VIEW ALL'}
                  </ViewAllClothesButton>
                </ClothesListTitleContainer>
                <ClothesItemsContainer isListCollapsed={!isAllClothesListExpanded}>
                  {clothesList.length === 0
                    ? (
                      <EmptyClothesListMessage>
                        No clothes found
                      </EmptyClothesListMessage>
                    )
                    : clothesList.map(clothing => (
                      <ClothingItem key={clothing.id} clothing={clothing} />
                    ))}
                </ClothesItemsContainer>
              </ClothesListWrapper>
            </RightContentContainer>
          </ContentContainer>
        )
      }

    </PageWrapper>
  );
};

export default TestPage;
