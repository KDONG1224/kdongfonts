import React from 'react';
import { MainLayout } from 'layouts';
import { Home } from 'container';

const HomePage = () => {
  return (
    <MainLayout headerType='main'>
      <Home />
    </MainLayout>
  );
};

export default HomePage;
