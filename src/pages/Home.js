import React from 'react';
import { Helmet } from 'react-helmet';
import { Carrusel } from '../components/Carousel/Carousel';

export const Home = () => {
  return (
    <>
      <Carrusel />
      <Helmet>
        <title>MJV test</title>
        <meta name='description' content='Website app to looking for your favorite pet' />
      </Helmet>
    </>
  );
};