import { Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';

export const Vacancy = React.memo(() => {
  const { height } = useWindowDimensions();

  const texts = new LocalizedStrings({
    EN: {
      vacancy: 'Vacancy',
    },
    RU: {
      vacancy: 'Вакансии',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);

  return (
    <>
      <Helmet>
        <title> FOG | {texts.getString('vacancy', lang)}</title>
      </Helmet>
      <VStack bgColor="brand.dark" minH={`${height}px`} justify="center">
        <Header vacancy={true} />
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
});
