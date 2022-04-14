import React from 'react';
import { MainLayout } from 'layouts';

const HomePage = () => {
  return (
    <MainLayout headerType='main'>
      <iframe
        title='KDONG'
        src='https://rice-price-kdong.web.app/'
        width='100%'
        height='100%'
      />
    </MainLayout>
  );
};

export default HomePage;
