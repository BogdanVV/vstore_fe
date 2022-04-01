import { createGlobalStyle } from 'styled-components';

import MontserratRegular from './assets/fonts/Montserrat-Regular.ttf';
import MontserratMedium from './assets/fonts/Montserrat-Medium.ttf';
import MontserratSemiBold from './assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from './assets/fonts/Montserrat-Bold.ttf';
import MontserratExtraBold from './assets/fonts/Montserrat-ExtraBold.ttf';
import MontserratBlack from './assets/fonts/Montserrat-Black.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular}) format('ttf'),
    url(${MontserratMedium}) format('ttf'),
    url(${MontserratSemiBold}) format('ttf'),
    url(${MontserratBold}) format('ttf'),
    url(${MontserratExtraBold}) format('ttf'),
    url(${MontserratBlack}) format('ttf');
    font-weight: 400;
  }
  
  body {
    font-family: Montserrat, sans-serif;
    box-sizing: border-box;
  }
`;
