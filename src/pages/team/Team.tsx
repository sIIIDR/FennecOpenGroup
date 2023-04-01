import { Spacer, VStack, Text, Button, Stack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import { DeveloperInfo } from '../../components/developerInfo/DeveloperInfo';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';
import MatrixRainingLetters from './MatrixRain';
import DimaSerafimov from '../../assets/developers/DimaSerafimov.jpg';
import MalanovAnton from '../../assets/developers/MalanovAnton.jpg';
import KirillSidorenkov from '../../assets/developers/KirillSidorenkov.jpg';

export const Team = React.memo(() => {
  const { height } = useWindowDimensions();

  const texts = new LocalizedStrings({
    EN: {
      team: 'Team',
      meetTeam: 'Meet the Team',
      meetTeamText:
        'The development of all the projects is done by our team, just look at these guys, here they are from top to bottom.',
      meetTeamButton: 'I want to join you too',
      organizers: 'Organizers and managers',
      organizersText:
        'Organizing and managing large and technically complex projects is not an easy but interesting task. Thanks to competent management, you can achieve great success.',
      developers: 'Developers and engineers',
      developersText:
        'Without technically competent and motivated specialists, the development of serious hardware solutions is simply impossible. That is why we take a very careful approach to the selection of our technical team members.',
    },
    RU: {
      team: 'Команда',
      meetTeam: 'Познакомьтесь с Командой',
      meetTeamText:
        'Разработкой всех проектов занимается наша команда, только посмотрите на этих ребят, вот они сверху вниз.',
      meetTeamButton: 'Я тоже хочу к вам',
      organizers: 'Организаторы и руководители',
      organizersText:
        'Организовывать и руководить крупными и технически сложными проектами, непростая но интересная задача. Благодаря грамотному руководству, можно добиться больших успехов.',
      developers: 'Разработчики и инженеры',
      developersText:
        'Без технически грамотных и мотивированных специалистов, разработка серьёзных аппаратных решений попросту невозможна. Именно поэтому мы очень тщательно подходим к подбору участников нашей технической команды.',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);
  const [isLargerThan1420] = useMediaQuery('(min-width: 1220px)');

  return (
    <>
      <Helmet>
        <title> FOG | {texts.getString('team', lang)}</title>
      </Helmet>
      <VStack bgColor="brand.dark" minH={`${height}px`} maxW="full" overflowX="hidden" justify="center">
        <Header aboutUs={true} />
        <MatrixRainingLetters />
        <VStack zIndex={100} w="full" spacing={[2, 4]} pt={2} justify="center" align="center" px={2}>
          <VStack
            w={isLargerThan1420 ? '50%' : '100%'}
            align={isLargerThan1420 ? 'start' : 'center'}
            p={4}
            backgroundColor="rgb(37,37,37, 0.7)"
            border="2px"
            borderColor="brand.gray"
            borderRadius="10px"
          >
            <Text fontSize={['lg', 'xl', '2xl', '3xl', '4xl']} fontWeight="500">
              {texts.getString('meetTeam', lang)}
            </Text>
            <Text color="brand.lightGray" maxW={isLargerThan1420 ? '55%' : '100%'}>
              {texts.getString('meetTeamText', lang)}
            </Text>
            <Button variant="brand-circle-border" size="sm" isDisabled={true}>
              {texts.getString('meetTeamButton', lang)}
            </Button>
          </VStack>
          <Stack
            w={isLargerThan1420 ? '50%' : '100%'}
            align="start"
            p={4}
            backgroundColor="rgb(37,37,37, 0.7)"
            border="2px"
            borderColor="brand.gray"
            borderRadius="10px"
            direction={isLargerThan1420 ? 'row' : 'column'}
          >
            <VStack maxW={isLargerThan1420 ? '50%' : '100%'} align="start" spacing={0}>
              <Text fontSize={['lg', 'xl', '2xl']} fontWeight="500">
                {texts.getString('organizers', lang)}
              </Text>
              <Text color="brand.lightGray" fontSize="xs">
                {texts.getString('organizersText', lang)}
              </Text>
            </VStack>
            <VStack w="full">
              <DeveloperInfo
                src={KirillSidorenkov}
                name="Сидоренков Кирилл"
                position="Основатель FOG"
                stack={['Go', 'Kotlin', 'PHP', 'TS', 'C++', 'ReactJS', 'VueJS', 'Python']}
                city="Ульяновск"
                country="Россия"
                languages={['Русский', 'English']}
                git="https://github.com/sIIIDR"
                vk="https://vk.com/programist3"
                telegram="https://t.me/s_IIIDR"
              />
            </VStack>
          </Stack>
          <Stack
            w={isLargerThan1420 ? '50%' : '100%'}
            align={isLargerThan1420 ? 'start' : 'center'}
            p={4}
            backgroundColor="rgb(37,37,37, 0.7)"
            border="2px"
            borderColor="brand.gray"
            borderRadius="10px"
            direction={isLargerThan1420 ? 'row' : 'column'}
          >
            <VStack maxW={isLargerThan1420 ? '50%' : '100%'} align="start" spacing={0}>
              <Text fontSize={['lg', 'xl', '2xl']} fontWeight="500">
                {texts.getString('developers', lang)}
              </Text>
              <Text color="brand.lightGray" fontSize="xs">
                {texts.getString('developersText', lang)}
              </Text>
            </VStack>
            <VStack w="full">
              <DeveloperInfo
                src={MalanovAnton}
                name="Малянов Антон"
                position="Frontend web-разработчик"
                stack={['JS', 'HTML/CSS', 'ReactJS', 'Python']}
                city="Ульяновск"
                country="Россия"
                languages={['Русский', 'English']}
                git="https://github.com/Serikserafim"
                vk="https://vk.com/goldblood45"
                telegram="https://t.me/Antonni73"
              />
              <DeveloperInfo
                src={DimaSerafimov}
                name="Серафимов Дмитрий"
                position="Frontend web-разработчик"
                stack={['C', 'JS', 'HTML/CSS', 'ReactJS', 'Python']}
                city="Ульяновск"
                country="Россия"
                languages={['Русский', 'English', 'Deutsch']}
                git="https://github.com/SerJPogareli"
                vk="https://vk.com/dimaserafimov73"
                telegram="https://t.me/Dimaserafimov"
              />
            </VStack>
          </Stack>
        </VStack>
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
});
