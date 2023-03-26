import { SimpleGrid, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import { DocInfo } from '../../components/docInfo/DocInfo';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';

export const Docs = React.memo(() => {
  const { height } = useWindowDimensions();

  const texts = new LocalizedStrings({
    EN: {
      docs: 'Docs',
      cookie: 'Cookies policy',
      policy: 'Privacy policy',
      whitepaper: 'FOG White Paper',
    },
    RU: {
      docs: 'Документы',
      cookie: 'Политика обработки файлов cookies',
      policy: 'Политика конфиденциальности',
      whitepaper: 'FOG White Paper',
    },
  });
  const lang = useSelector((state: IRootState) => state.core.lang);

  return (
    <>
      <Helmet>
        <title> FOG | {texts.getString('docs', lang)}</title>
      </Helmet>
      <VStack bgColor="brand.dark" minH={`${height}px`} justify="center">
        <Header docs={true} />
        <VStack w="full" px={[2, 4, 6, 8]} py={2}>
          <SimpleGrid columns={[1, 1, 3]} spacing={8} w="full">
            <DocInfo name={texts.getString('whitepaper', lang)} date="24/03/2023" />
            <DocInfo name={texts.getString('cookie', lang)} date="24/03/2023" />
            <DocInfo name={texts.getString('policy', lang)} date="24/03/2023" />
          </SimpleGrid>
        </VStack>
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
});
