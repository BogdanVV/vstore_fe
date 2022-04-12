import styled from 'styled-components';

export const LoaderContainerLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .77);
  backdrop-filter: blur(50px);
  position: relative;
`;
export const LoaderContainer = styled.div`
  border-radius: 50%;
  position: absolute;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
  box-shadow: 0 0 200px 200px rgba(255, 255, 255, .3);
`;
export const LoaderIcon = styled.img`
  height: 100px;
`;
