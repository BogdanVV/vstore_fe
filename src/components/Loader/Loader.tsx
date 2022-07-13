import React from 'react';

import { LoaderContainer, LoaderContainerLayout, LoaderIcon } from './styled';

import loadingSpinner2 from '../../assets/loaders/preloader.svg';

const Loader = () => {
  return (
    <LoaderContainerLayout>
      <LoaderContainer>
        <LoaderIcon src={loadingSpinner2} />
      </LoaderContainer>
    </LoaderContainerLayout>
  );
};

export default Loader;
