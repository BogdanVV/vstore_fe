import React, { useState } from 'react';
import {
  ContentContainer,
  LeftContainer,
  MiddleContainer,
  PageLayout,
  RightContainer,
  TopBar,
  Basket,
  TopBarTitle,
  NewLookContainer,
  NewLookContainerTitle,
  NewLookItemsContainer, TotalCostDivider,
  TotalCostSection,
  TotalCostSectionInfo
} from './styled';
import basketIcon from '../../assets/icons/basket.svg';
import { filterCategories, newLookItems } from '../../temp/mockData';
import FilterCategory from '../../components/FilterCategory/FilterCategory';
import { IFilterOption } from '../../components/FilterOption/types';
import NewLookItem from '../../components/NewLookItem/NewLookItem';
import AppButton from '../../components/AppButton/AppButton';

const TestPage = () => {
  const [filtersApplied, setFiltersApplied] = useState<IFilterOption[]>([]);

  const handleBasketClick = () => {
    console.log('handleBasketClick');
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

  const handleBuyNowClick = () => {
    console.log('handleBuyNowClick');
  };

  return (
    <PageLayout>
      <TopBar>
        <TopBarTitle>AVENBECK</TopBarTitle>
        <Basket
          onClick={handleBasketClick}
          src={basketIcon}
        />
      </TopBar>
      <ContentContainer>
        <LeftContainer>
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
            <NewLookContainerTitle>NEW LOOK</NewLookContainerTitle>
            <NewLookItemsContainer>
              {newLookItems.map(item => (
                <NewLookItem key={item.id} newLookItem={item} />
              ))}
            </NewLookItemsContainer>
            <TotalCostSection>
              <TotalCostSectionInfo>TOTAL COST</TotalCostSectionInfo>
              <TotalCostDivider />
              <TotalCostSectionInfo>$ XXX.XXX</TotalCostSectionInfo>
              <AppButton
                title="BUY NOW"
                width={114}
                onClick={handleBuyNowClick}
              />
            </TotalCostSection>
          </NewLookContainer>
        </MiddleContainer>

        <RightContainer>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123</div>
          <div style={{padding: 20}}>123ййй</div>
        </RightContainer>
      </ContentContainer>
    </PageLayout>
  );
};

export default TestPage;
