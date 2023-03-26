import { Heading, Spacer, VStack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { ROUTE_MAINPAGE } from '../../constants/routes';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';

export const NotFound = React.memo(() => {
  const { height } = useWindowDimensions();

  const texts = new LocalizedStrings({
    EN: {
      notFound: 'Page Not Found',
      sorry: "You just hit a route that doesn't exist... the sadness.",
      back: 'Go home',
    },
    RU: {
      notFound: 'Страница Не Найдена',
      sorry: 'Вы перешли по маршруту, которого не существует... Простите.',
      back: 'На главную',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);

  return (
    <>
      <Helmet>
        <title> FOG | 404</title>
      </Helmet>
      <VStack bgColor="brand.dark" minH={`${height}px`} justify="center">
        <Header />
        <Spacer />
        <VStack justify="center" align="center" w="full">
          <Heading fontSize={['lg', 'xl', '2xl', '3xl', '4xl']}>404 | {texts.getString('notFound', lang)}</Heading>
          <Text fontSize={['xs', 'xm', 'md']} align="center">
            {texts.getString('sorry', lang)}
          </Text>
          <Button variant="brand-circle-border" as={RouterLink} to={ROUTE_MAINPAGE}>
            {texts.getString('back', lang)}
          </Button>
        </VStack>
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
});
