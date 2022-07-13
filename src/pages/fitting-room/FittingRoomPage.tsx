import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {contentWindow} from "../../App";
import {availableClothesColors, availableClothesSizes, clothesCategories, IClothingItem} from '../../temp/mockData';
import {ICategory, IExtendedSubCategory} from "../../temp/types";
import {useWindowSize} from "../../hooks/useWindowSize";
import {
    BasketIcon,
    BasketIconContainer,
    BuyNowButton,
    ClothesItemsContainer,
    ClothesListTitle,
    ClothesListTitleContainer,
    ClothesListWrapper,
    ContentContainer,
    ControlButtonsContainer,
    EmptyClothesListMessage,
    ExitButtonContainer,
    FiltersContainer,
    HeaderContainer,
    HeaderTitle,
    LeftContentContainer,
    MiddleContentContainer,
    NewLookContainer,
    NewLookContainerTitle,
    NewLookImage,
    NewLookItem,
    NewLookItemColor,
    NewLookItemColorContainer,
    NewLookItemInfoContainer,
    NewLookItemPrice,
    NewLookItemsContainer,
    NewLookItemSizeContainer,
    NewLookItemSizeValue,
    NewLookItemTitle,
    NewLookTitlePriceContainer,
    NewLookTotalCost,
    NewLookTotalCostValue,
    PageWrapper,
    RightContentContainer,
    SelectClothesButtonsWrapper,
    ViewAllClothesButton,
} from './styled';
import {RoutesEnum} from "../../enums/routes.enum";
import {changeIsLoading, changeScene} from "../../store/slices/mainPageSlice";
import {ScenesEnum} from "../../events/enums/scenes.enum";
import {IRootState} from "../../store/types";

import ClothingItem from '../../components/ClothingItem/ClothingItem';
import FilterCategory from '../../components/FilterCategory/FilterCategory';
import RoundButton from '../../components/RoundButton/RoundButton';
import CategoriesHeader from "../../components/CategoriesHeader/CategoriesHeader";
import ClothingItemLook from "../../components/ClothingItemLook";
import switchSceneEventHandler from "../../events/SwitchScene";

import basketIcon from '../../assets/icons/basket.svg';
import exitArrowIcon from '../../assets/icons/exitArrow.svg';

const FittingRoomPage = () => {
    const dispatch = useDispatch();

    const { currentScene } = useSelector((state: IRootState) => state.mainPage);

    const [isAllClothesListExpanded, setIsAllClothesListExpanded] = useState(false);
    const [activeClothingItem, setActiveClothingItem] = useState<number | null>(null);
    const [categories, setCategories] = useState<ICategory[]>(clothesCategories);
    const [selectedCategories, setSelectedCategories] = useState<Omit<ICategory, 'clothes'>[]>([]);
    const [selectedClothes, setSelectedClothes] = useState<IClothingItem[]>([]);
    const [subCategory, setSubCategory] = useState<IExtendedSubCategory | null>(selectedCategories[0]?.subCategories?.[0] ? {
        ...selectedCategories[0]?.subCategories?.[0],
        categoryId: selectedCategories[0]?.id
    } : null);
    const [isSelectedClothesCategory, setIsSelectedClothesCategory] = useState<boolean>(false);
    const [openedClothingPopupId, setOpenedClothingPopupId] = useState<number | null>(null);

    const { width } = useWindowSize();

    const isMobileOrTablet = width <= 1195;

    const actionClothingInCart = (clothing: IClothingItem, add: boolean) => {
        setSelectedClothes(oldSelectedClothes => {
            return add ? [...oldSelectedClothes, {
                ...clothing,
                isInBasket: true
            }] : [...oldSelectedClothes.filter(item => item.id !== clothing.id)];
        });

        const newCategories: ICategory[] = categories.map((category) => {
            return {
                ...category,
                subCategories: category.subCategories.map((subCategory) => {
                    return {
                        ...subCategory,
                        clothes: subCategory.clothes.map((item) => {
                            const isSelectedClothing = item.id === clothing.id;

                            return {
                                ...item,
                                isInBasket: isSelectedClothing ? add : item.isInBasket
                            }
                        })
                    }
                })
            }
        });

        setCategories(newCategories);

        if (subCategory) {
            const clothes = subCategory.clothes.map((item) => {
                if (item.id === clothing.id) {
                    return {
                        ...item,
                        isInBasket: add
                    }
                }

                return {
                    ...item
                }
            });

            setSubCategory({
                ...subCategory,
                clothes
            })
        }
    };

    const selectCategories = (categories: ICategory[], overwrite = true) => {
        setSelectedCategories(overwrite ? categories : [...selectedCategories, ...categories]);
    }

    const selectedClothesCategory =  {
        id: 0,
        clothes: selectedClothes,
        subCategories: [],
        label: 'Selected clothes',
        value: 'Selected clothes'
    };

    const navigate = useNavigate();

    const handleExitFitRoomButtonClick = () => {
        dispatch(changeScene({ scene: ScenesEnum.STORE }));
        dispatch(changeIsLoading({ isLoading: true }));

        const switchSceneEvent = switchSceneEventHandler(ScenesEnum.STORE);

        contentWindow?.dispatchEvent(switchSceneEvent);

        navigate(RoutesEnum.MAIN);
    };

    const toggleAllClothesList = () => {
        setIsAllClothesListExpanded(prev => !prev);
    };

    const handleSearchTextChange = (searchQuery: string) => {
        console.log(searchQuery);
    };

    const fullClothesList: IClothingItem[] = categories.map((item) => {
        const clothes: IClothingItem[] = [];

        item.subCategories.forEach((subCategory) => {
            clothes.push(...subCategory.clothes);
        });

        return clothes;
    }).flat(2);

    const handleOptionClick = (option: ICategory) => {
        if (option.id === 0) {
            setIsSelectedClothesCategory(true);
            setSubCategory(null);
        }
    }

    const filterCategories = [
        {
            title: 'CATEGORIES',
            isSearch: false,
            options:
            [
                {
                    title: 'Selected clothes',
                    value: 'selected clothes',
                    id: 0
                },
                ...categories.map((item) => {
                    return {
                        title: item.label,
                        value: item.label,
                        subCategories: item.subCategories,
                        id: item.id
                    }
                })
            ]
        },
    ];

    const onSelectedClothingFieldChange = (field: string, id: number, value: string) => {
        const newSelectedClothes = selectedClothes.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    [field]: value
                }
            }

            return item;
        });

        setSelectedClothes(newSelectedClothes);
    };

    const handleSubCategory = (subCategory: IExtendedSubCategory | null) => {
        setIsSelectedClothesCategory(false);
        setSubCategory(subCategory);
    };

    const handleAllClothesClick = () => {
        setIsAllClothesListExpanded(true);
        setIsSelectedClothesCategory(false);
    };

    const handleSelectedClothesClick = () => {
        setIsAllClothesListExpanded(true);
        setIsSelectedClothesCategory(true);
        setSubCategory(null);
    };

    useEffect(() => {
        if (currentScene !== ScenesEnum.FITTING) {
            const switchSceneEvent = switchSceneEventHandler(ScenesEnum.FITTING);

            contentWindow?.dispatchEvent(switchSceneEvent);
        }
    }, [currentScene, dispatch]);

    return (
        <PageWrapper>
            {isMobileOrTablet && <CategoriesHeader
                selectedCategories={selectedCategories}
                selectCategories={selectCategories}
                categories={categories}
                exitFittingRoom={handleExitFitRoomButtonClick}
                selectedClothesCategory={selectedClothesCategory}
                selectedClothes={selectedClothes}
                activeClothingItem={activeClothingItem}
                setActiveClothingId={setActiveClothingItem}
                actionClothingInCart={actionClothingInCart}
                subCategory={subCategory}
                setSubCategory={handleSubCategory}
            />}
            {isMobileOrTablet && <ClothingItemLook
                activeClothingId={activeClothingItem}
                clothes={fullClothesList}
            />}
            {/*{ isMobile &&  <MobileZoomButtonsContainer>*/}
            {/*    <RoundButton*/}
            {/*        icon={zoomOutIcon}*/}
            {/*        onClick={handleZoomOutClick}*/}
            {/*        isSemiTransparent*/}
            {/*    />*/}
            {/*    <RoundButton*/}
            {/*        icon={zoomInIcon}*/}
            {/*        onClick={handleZoomInClick}*/}
            {/*        isSemiTransparent*/}
            {/*    />*/}
            {/*</MobileZoomButtonsContainer> }*/}
            {!isMobileOrTablet && <>
                <ContentContainer isFiltersBar={isAllClothesListExpanded}>
                    <HeaderContainer>
                        <HeaderTitle>AVENBECK</HeaderTitle>
                        <BasketIconContainer>
                            <BasketIcon src={basketIcon} alt="basket"/>
                        </BasketIconContainer>
                    </HeaderContainer>

                    <LeftContentContainer>
                        <FiltersContainer>
                            {filterCategories.map(category => (
                                <FilterCategory
                                    key={category.title}
                                    title={category.title}
                                    options={category.options}
                                    handleOptionPick={handleOptionClick}
                                    isSearch={category.isSearch}
                                    searchOnChangeHandler={handleSearchTextChange}
                                    nestedArrayFieldName={'subCategories'}
                                    setSubCategory={handleSubCategory}
                                    subCategory={subCategory}
                                    filtersApplied={isSelectedClothesCategory ? [
                                        {
                                            title: 'Selected clothes',
                                            value: 'selected clothes'
                                        }
                                    ] : []}
                                />
                            ))}
                        </FiltersContainer>
                    </LeftContentContainer>

                    <MiddleContentContainer>
                        <NewLookContainer
                            isFiltersBar={isAllClothesListExpanded}
                        >
                            <NewLookContainerTitle>NEW LOOK</NewLookContainerTitle>
                            <NewLookItemsContainer>
                                {selectedClothes.map(item => (
                                    <NewLookItem key={item.id}>
                                        <NewLookImage src={item.image}/>
                                        <NewLookItemInfoContainer>
                                            <NewLookTitlePriceContainer>
                                                <NewLookItemTitle>{item.title}</NewLookItemTitle>
                                                <NewLookItemPrice>$ {item.price}</NewLookItemPrice>
                                            </NewLookTitlePriceContainer>
                                            <NewLookItemSizeContainer>
                                                Size: <NewLookItemSizeValue>{item.size}</NewLookItemSizeValue>
                                            </NewLookItemSizeContainer>
                                            <NewLookItemColorContainer>
                                                Selected color: <NewLookItemColor color={item.color}/>
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
                            {!isAllClothesListExpanded && <SelectClothesButtonsWrapper>
                                <BuyNowButton
                                    onClick={handleAllClothesClick}
                                    width={'100%'}
                                >
                                    ALL CLOTHES
                                </BuyNowButton>
                                <BuyNowButton
                                    onClick={handleSelectedClothesClick}
                                    width={'100%'}
                                >
                                    SELECTED CLOTHES
                                </BuyNowButton>
                            </SelectClothesButtonsWrapper>}
                        </ControlButtonsContainer>
                    </MiddleContentContainer>

                    {isAllClothesListExpanded && <RightContentContainer>
                        {isSelectedClothesCategory ? <ClothesListWrapper>
                            <ClothesListTitleContainer>
                                <ClothesListTitle>SELECTED CLOTHES</ClothesListTitle>
                            </ClothesListTitleContainer>
                            <ClothesItemsContainer>
                                {selectedClothes.length === 0
                                    ? (
                                        <EmptyClothesListMessage>
                                            No selected clothes yet...
                                        </EmptyClothesListMessage>
                                    )
                                    : selectedClothes.map(clothing => (
                                        <ClothingItem
                                            setOpenedClothingPopupId={setOpenedClothingPopupId}
                                            openedClothingPopupId={openedClothingPopupId}
                                            activeClothingId={activeClothingItem}
                                            setActiveClothingId={setActiveClothingItem}
                                            key={clothing.id}
                                            clothing={clothing}
                                            actionClothingInCart={actionClothingInCart}
                                            color={clothing.color}
                                            size={clothing.size}
                                            onSizeChange={(id, size) => {
                                                onSelectedClothingFieldChange('size', id, size);
                                            }}
                                            onColorChange={(id, color) => {
                                                onSelectedClothingFieldChange('color', id, color);
                                            }}
                                        />
                                    ))}
                            </ClothesItemsContainer>
                        </ClothesListWrapper> : <ClothesListWrapper>
                            <ClothesListTitleContainer>
                                <ClothesListTitle>{subCategory?.label?.toUpperCase() || 'ALL CLOTHES'}</ClothesListTitle>
                                <ViewAllClothesButton
                                    onClick={toggleAllClothesList}
                                    isAllClothesListExpanded={isAllClothesListExpanded}
                                >
                                    {isAllClothesListExpanded ? 'HIDE ALL' : 'VIEW ALL'}
                                </ViewAllClothesButton>
                            </ClothesListTitleContainer>
                            {isAllClothesListExpanded && <ClothesItemsContainer>
                                {subCategory?.clothes?.length === 0
                                    ? (
                                        <EmptyClothesListMessage>
                                            No clothes found
                                        </EmptyClothesListMessage>
                                    )
                                    : subCategory?.clothes?.map(clothing => (
                                        <ClothingItem
                                            setOpenedClothingPopupId={setOpenedClothingPopupId}
                                            openedClothingPopupId={openedClothingPopupId}
                                            activeClothingId={activeClothingItem}
                                            setActiveClothingId={setActiveClothingItem}
                                            key={clothing.id}
                                            clothing={clothing}
                                            actionClothingInCart={actionClothingInCart}
                                            color={availableClothesColors[0]}
                                            size={availableClothesSizes[0]}
                                        />
                                    ))}
                            </ClothesItemsContainer>}
                        </ClothesListWrapper>}
                    </RightContentContainer>}
                </ContentContainer>
            </>}
        </PageWrapper>
    );
};

export default FittingRoomPage;
