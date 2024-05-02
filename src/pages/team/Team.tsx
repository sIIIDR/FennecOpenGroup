import { Spacer, VStack, Text, Button, Stack, useMediaQuery } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import { DeveloperInfo } from '../../components/developerInfo/DeveloperInfo';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';
import MatrixRainingLetters from './MatrixRain';
import NikitaKozlov from '../../assets/developers/NikitaKozlov.jpg';
import KirillSidorenkov from '../../assets/developers/KirillSidorenkov.jpg';
import KapustinZahar from '../../assets/developers/KapustinZahar.jpg';
import EliseevEgor from '../../assets/developers/EliseevEgor.jpg';
import Alexey from '../../assets/developers/Alexey.jpg';
import Yakov from '../../assets/developers/Yakov.jpg';

export const Team = React.memo(() => {
  const { height } = useWindowDimensions();

  const texts = new LocalizedStrings({
    EN: {
      team: 'Team',
      meetTeam: 'Meet the Team',
      meetTeamText:
        'The development of all the projects is done by our team, just look at these guys, here they are from top to bottom.',
      meetTeamButton: 'I want to join you too',
      organizers: 'Administration and management',
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
      organizers: 'Управление и менеджмент',
      organizersText:
        'Организовывать и руководить крупными и технически сложными проектами, непростая но интересная задача. Благодаря грамотному руководству, можно добиться больших успехов.',
      developers: 'Разработчики и инженеры',
      developersText:
        'Без технически грамотных и мотивированных специалистов, разработка серьёзных аппаратных решений попросту невозможна. Именно поэтому мы очень тщательно подходим к подбору участников нашей технической команды.',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);
  const pageHeightRef = useRef<HTMLDivElement>(null);
  const [isLargerThan1420] = useMediaQuery('(min-width: 1220px)');

  return (
    <>
      <Helmet>
        <title> FOG | {texts.getString('team', lang)}</title>
      </Helmet>
      <Header aboutUs={true} />
      <VStack minH={`${pageHeightRef.current?.scrollHeight}px`} position="absolute" m={0} p={0}>
        <MatrixRainingLetters height={pageHeightRef.current?.scrollHeight} />
      </VStack>
      <VStack
        bgColor="brand.dark"
        minH={`${height}px`}
        maxW="full"
        ref={pageHeightRef}
        overflowX="hidden"
        justify="center"
      >
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
              <DeveloperInfo
                src={KapustinZahar}
                name="Капустин Захар"
                position="Project Manager"
                stack={[
                  'Agile',
                  'Scrum',
                  'Kanban',
                  'Waterfall',
                  'Jira',
                  'Confluence',
                  'Microsoft Project',
                  'Team leadership',
                  'Stakeholder management',
                  'Risk management',
                  'Budgeting',
                  'Problem-solving',
                  'Quality assurance',
                ]}
                city="Стамбул"
                country="Турция"
                languages={['Русский', 'English', 'Türkçe', '中国人。']}
                telegram="https://t.me/BLIK666"
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
                src={NikitaKozlov}
                name="Козлов Никита"
                position="Backend-разработчик/DevOps"
                stack={['Python', 'JS', 'Go', 'C++/C', 'Docker', 'PostgreSQL', 'Ruby', 'Nginx/Apache', 'MongoDB']}
                city="Ульяновск"
                country="Россия"
                languages={['Русский', 'English']}
                git="https://github.com/Gospodun"
                vk="https://vk.com/wiesoimmerich"
                telegram="https://t.me/wiesoimmerich"
              />
              <DeveloperInfo
                src={Yakov}
                name="Яков Арханов"
                position="Backend-разработчик"
                stack={[
                  'C#',
                  'JS',
                  'Java',
                  'C++/C',
                  'Maven',
                  'Spring framework',
                  'NET core',
                  'React.js',
                  'Hibernate',
                  'Entity framework',
                  'Docker',
                  'Kubernates',
                ]}
                city="Ульяновск"
                country="Россия"
                languages={['Русский', 'English']}
                telegram="https://t.me/Zifrkoks"
              />
              <DeveloperInfo
                src={Alexey}
                name="Алексей Леонов"
                position="Fullstack-разработчик"
                stack={['Python', 'JS', 'jQuery', 'C++/C', 'ESP', 'IDF']}
                city="Москва"
                country="Россия"
                languages={['Русский', 'English']}
                telegram="https://t.me/ALLeoon"
              />
              <DeveloperInfo
                src={EliseevEgor}
                name="Елисеев Егор"
                position="Frontend-разработчик"
                stack={['C#', 'Java', 'C/C++', 'JavaScript', 'PHP', '.NET', 'Spring', 'BackPack', 'Laravel']}
                city="Ульяновск"
                country="Россия"
                languages={['Русский', 'English']}
                git="https://github.com/ElEgEv"
                vk="https://vk.com/id321670251"
                telegram="https://t.me/ThreeE_74"
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
