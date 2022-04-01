import React, { useEffect, useState } from 'react';

import AppButtonRound from '../../components/AppButtonRound/AppButtonRound';
import AppButton from '../../components/AppButton/AppButton';
import NewLookItem from '../../components/NewLookItem/NewLookItem';
import ClothesListContainer from '../../components/ClothesListContainer/ClothesListContainer';
import { clothesList, filterCategories, newLookItems } from '../../temp/mockData';
import FilterCategory from '../../components/FilterCategory/FilterCategory';
import { IFilterOption } from '../../components/FilterOption/types';
import { tabletResValue } from '../../utils/breakpoints';

import {
  Basket,
  ContentContainer,
  ControlButtonsContainer,
  LeftContainer,
  MiddleContainer,
  MobileControlButtonsContainer,
  MobileSelectClothesButton,
  MobileSelectClothesButtonsContainer,
  MobileZoomButtonsContainer,
  NewLookContainer,
  NewLookContainerTitle,
  NewLookItemsContainer,
  NewLookWrapper,
  PageLayout,
  RightContainer,
  TopBar,
  TopBarTitle,
  TotalCostDivider,
  TotalCostSection,
  TotalCostSectionInfo,
  ZoomButtonsContainer,
} from './styled';
import basketIcon from '../../assets/icons/basket.svg';
import exitArrowIcon from '../../assets/icons/exitArrow.svg';
import zoomOutIcon from '../../assets/icons/zoomOut.svg';
import zoomInIcon from '../../assets/icons/zoomIn.svg';
import MobileFittingRoomTopBar from '../../components/MobileFittingRoomTopBar/MobileFittingRoomTopBar';

const FittingRoomPage = () => {
  const [isFiltersBarVisible, setIsFiltersBarVisible] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState<IFilterOption[]>([]);
  const [clientWidth, setClientWidth] = useState(window?.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSelectedMenuCategory, setMobileSelectedMenuCategory] = useState('');

  const handleBasketClick = () => {
    console.log('handleBasketClick');
  };

  const handleExitArrowClick = () => {
    console.log('handleExitArrowClick');
    window.history.back();
  };

  const handleZoomInClick = () => {
    console.log('handleZoomInClick');
  };

  const handleZoomOutClick = () => {
    console.log('handleZoomOutClick');
  };

  const handleOptionPick = (option: IFilterOption) => {
    if (filtersApplied.some(filter => filter.value === option.value)) {
      setFiltersApplied(filtersApplied.filter(f => f.value !== option.value));
    } else {
      setFiltersApplied(prev => [...prev, option]);
    }
  };

  const handleMobileSelectedClothesButtonPress = () => {
    setIsMobileMenuOpen(true);
    setMobileSelectedMenuCategory('selectedClothes');
  };

  const handleMobileAllClothesButtonPress = () => {
    setIsMobileMenuOpen(true);
    setMobileSelectedMenuCategory('allClothes');
  };

  const handleSearchTextChange = (searchQuery: string) => {
    console.log(searchQuery);
  };

  const handleBuyNowClick = () => {
    console.log('handleBuyNowClick');
  };

  const toggleFiltersBar = () => {
    setIsFiltersBarVisible(prevState => !prevState);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const handleMobileMenuBackButtonClick = () => {
    setMobileSelectedMenuCategory('');
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setClientWidth(window?.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  return (
    <PageLayout>
      {clientWidth > tabletResValue
        ? (
          <TopBar>
            <TopBarTitle>AVENBECK</TopBarTitle>
            <Basket
              onClick={handleBasketClick}
              src={basketIcon}
            />
          </TopBar>
        )
        : (
          <MobileFittingRoomTopBar
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            mobileSelectedMenuCategory={mobileSelectedMenuCategory}
            handleMobileMenuBackButtonClick={handleMobileMenuBackButtonClick}
          />
        )}
      <ContentContainer isFiltersBarVisible={isFiltersBarVisible}>
        <LeftContainer isFiltersBarVisible={isFiltersBarVisible}>
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
        </LeftContainer>

        <MiddleContainer>
          <NewLookContainer>
            {newLookItems.length > 0 && (
              <NewLookWrapper>
                <NewLookContainerTitle>NEW LOOK</NewLookContainerTitle>
                <NewLookItemsContainer>
                  {newLookItems.map(item => (
                    <NewLookItem key={item.id} newLookItem={item}/>
                  ))}
                </NewLookItemsContainer>
                <TotalCostSection>
                  <TotalCostSectionInfo>TOTAL COST</TotalCostSectionInfo>
                  <TotalCostDivider/>
                  <TotalCostSectionInfo>$ XXX.XXX</TotalCostSectionInfo>
                  <AppButton
                    title="BUY NOW"
                    width={114}
                    onClick={handleBuyNowClick}
                  />
                </TotalCostSection>
              </NewLookWrapper>
            )}
          </NewLookContainer>

          {clientWidth > tabletResValue
            ? (
              <ControlButtonsContainer>
                <div>
                  <AppButtonRound
                    isOutlined={false}
                    icon={exitArrowIcon}
                    onClick={handleExitArrowClick}
                  />
                </div>
                <ZoomButtonsContainer>
                  <AppButtonRound
                    isOutlined={false}
                    icon={zoomOutIcon}
                    onClick={handleZoomOutClick}
                  />
                  <AppButtonRound
                    isOutlined={false}
                    icon={zoomInIcon}
                    onClick={handleZoomInClick}
                  />
                </ZoomButtonsContainer>
              </ControlButtonsContainer>
            )
            : (
              <MobileControlButtonsContainer>
                <AppButtonRound
                  icon={exitArrowIcon}
                  onClick={handleExitArrowClick}
                  isOutlined={false}
                  isPositionAbsolute
                  top="23px"
                  right="10px"
                />
                <MobileZoomButtonsContainer>
                  <AppButtonRound
                    icon={zoomOutIcon}
                    onClick={handleZoomOutClick}
                    isOutlined={false}
                    margin="0 0 18px 0"
                  />
                  <AppButtonRound
                    icon={zoomInIcon}
                    onClick={handleZoomInClick}
                    isOutlined={false}
                  />
                </MobileZoomButtonsContainer>
                <MobileSelectClothesButtonsContainer>
                  <MobileSelectClothesButton
                    onClick={handleMobileSelectedClothesButtonPress}
                    margin="0 0 20px"
                  >
                    SELECTED CLOTHES
                  </MobileSelectClothesButton>
                  <MobileSelectClothesButton onClick={handleMobileAllClothesButtonPress}>
                    ALL CLOTHES
                  </MobileSelectClothesButton>
                </MobileSelectClothesButtonsContainer>
              </MobileControlButtonsContainer>
            )}

        </MiddleContainer>

        <RightContainer>
          <ClothesListContainer
            spoilerTitle="SELECTED CLOTHES"
            clothesList={clothesList}
          />
          <ClothesListContainer
            spoilerTitle="ALL CLOTHES"
            clothesList={clothesList}
            toggleFiltersBar={toggleFiltersBar}
          />
        </RightContainer>

      </ContentContainer>
    </PageLayout>
  );
};

export default FittingRoomPage;
