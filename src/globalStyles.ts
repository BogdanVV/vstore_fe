import { createGlobalStyle } from 'styled-components';

import MontserratLight from './assets/fonts/Montserrat-Light.ttf';
import MontserratRegular from './assets/fonts/Montserrat-Regular.ttf';
import MontserratMedium from './assets/fonts/Montserrat-Medium.ttf';
import MontserratSemiBold from './assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from './assets/fonts/Montserrat-Bold.ttf';
import MontserratExtraBold from './assets/fonts/Montserrat-ExtraBold.ttf';
import MontserratBlack from './assets/fonts/Montserrat-Black.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLight}) format('ttf');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular}) format('ttf');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium}) format('ttf');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBold}) format('ttf');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBold}) format('ttf');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraBold}) format('ttf');
    font-weight: 800;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBlack}) format('ttf');
    font-weight: 900;
  }
  
  body {
    font-family: Montserrat, sans-serif;
  }
  
  div {
    box-sizing: border-box;
    
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #818181;
      border-radius: 20px;
    }
  }
`;
