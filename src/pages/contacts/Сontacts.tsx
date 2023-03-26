import { Button, ButtonGroup, Heading, Spacer, VStack, Text, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import { Footer } from '../../components/footer/Footer';
import { RequestForm } from '../../components/form/RequestForm';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';

export const Contacts = React.memo(() => {
  const { height, width } = useWindowDimensions();

  const texts = new LocalizedStrings({
    EN: {
      contacts: 'Cooperation',
      client: 'Client',
      clientHeading: 'Do you want to place an order?',
      clientText:
        'Leave your contact details and briefly describe the essence of your task, and we will answer you soon.',
      sponsor: 'Sponsor',
      sponsorHeading: 'Are you ready to cooperate?',
      sponsorText: 'Leave your contact details and sign your offer',
    },
    RU: {
      contacts: 'Сотрудничество',
      client: 'Заказчик',
      clientHeading: 'Хотите сделать заказ?',
      clientText:
        'Оставьте свои контактные данные и вкратце опишите суть вашей задачи, и в скором времени мы вам обязательно ответим',
      sponsor: 'Спонсор',
      sponsorHeading: 'Готовы посотрудничать?',
      sponsorText: 'Оставьте свои контактные данные, и распишите своё предложение',
    },
  });

  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');

  const lang = useSelector((state: IRootState) => state.core.lang);

  const [active, setActive] = useState(true);

  return (
    <>
      <Helmet>
        <title> FOG | {texts.getString('contacts', lang)}</title>
      </Helmet>
      <VStack bgColor="brand.dark" minH={`${height}px`} justify="center">
        <Header contacts={true} />
        <VStack w={isLargerThan770 ? width / 2.6 : '100%'} px={[2, 4, 6, 8]} py={4}>
          <ButtonGroup isAttached border="2px" borderColor="brand.orange" size="lg" w="full" borderRadius="10px">
            <Button
              fontWeight="light"
              borderRight="1px"
              borderColor="brand.orange"
              bg="black"
              _active={{ bg: 'brand.orange', color: 'white' }}
              isActive={active}
              onClick={() => setActive(!active)}
              borderRadius="7px"
              w="full"
            >
              {texts.getString('client', lang)}
            </Button>
            <Button
              fontWeight="light"
              borderLeft="1px"
              borderColor="brand.orange"
              bg="black"
              _active={{ bg: 'brand.orange', color: 'white' }}
              isActive={!active}
              onClick={() => setActive(!active)}
              borderRadius="7px"
              w="full"
            >
              {texts.getString('sponsor', lang)}
            </Button>
          </ButtonGroup>
          {active ? (
            <VStack w="full" backgroundColor="brand.gray" borderRadius="5px" align="start" justify="start" p={4}>
              <Heading fontSize="xl">{texts.getString('clientHeading', lang)}</Heading>
              <Text color="brand.lightGray">{texts.getString('clientText', lang)}</Text>
            </VStack>
          ) : (
            <VStack w="full" backgroundColor="brand.gray" borderRadius="5px" align="start" justify="start" p={4}>
              <Heading fontSize="xl">{texts.getString('sponsorHeading', lang)}</Heading>
              <Text color="brand.lightGray">{texts.getString('sponsorText', lang)}</Text>
            </VStack>
          )}
          <RequestForm />
        </VStack>
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
});
