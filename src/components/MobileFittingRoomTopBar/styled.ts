import styled from 'styled-components';

export const MobileTopBar = styled.div`
  height: ${({ isMenu }: { isMenu: boolean }) => (
    isMenu ? '100vh' : 0)
  };
  background-color: ${({ isMenu }) => (
    isMenu ? 'rgba(255, 255, 255, 0.44)' : 'transparent'
  )};
  padding: 0 12px;
  transition: height .5s ease-in-out;
  overflow: ${({ isMenu }) => (
    isMenu ? 'auto' : 'hidden'
  )};
  backdrop-filter: ${({ isMenu }) => `blur(${isMenu ? 13 : 0}px)`};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
`;
export const MobileTopBarButtonsContainer = styled.div`
  padding-top: 24px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const BurgerMenuContainer = styled.div`
  padding: 5px;
  width: 40px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  //flex-direction: column;
  //justify-content: space-between;
  position: relative;
`;
export const BurgerMenuTopLine = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 5px;
  background-color: #FFF;
  transform: ${({ isActive }: { isActive: boolean }) => (
    isActive ? 'rotate(45deg)' : 'none'
  )};
  position: ${({ isActive }) => isActive ? 'absolute' : 'static'};
  top: 16px;
  transition: transform .5s ease-in-out, position .5s ease-in-out;
`;
export const BurgerMenuMidLine = styled(BurgerMenuTopLine)`
  width: ${({ isActive }) => isActive ? 0 : '66%'};
  transform: none;
  transition: width .5s ease-in-out;
`;
export const BurgerMenuBottomLine = styled(BurgerMenuTopLine)`
  transform: ${({ isActive }: { isActive: boolean }) => (
    isActive ? 'rotate(-45deg)' : 'none'
  )};
  width: ${({ isActive }) => isActive ? '100%' : '33%'};
  transition: transform .5s ease-in-out, width .5s ease-in-out;
`;
export const MobileTopBarListsContainer = styled.div`
  display: ${({ isActive }: { isActive: boolean }) => isActive ? 'block' : 'none'};
`;
export const MobileMenuCategory = styled.div`
  padding: 20px 0;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;
export const Divider = styled.div`
  border-bottom: 2px solid #333;
`;
