/* eslint no-unsafe-optional-chaining: "error" */
import { Heading, VStack, Text, SimpleGrid, keyframes, useMediaQuery, HStack, Spacer, Image } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import React, { Dispatch, useCallback, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import LocalizedStrings from 'react-localization';
import Marquee from 'react-fast-marquee';
import { Helmet } from 'react-helmet';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';
import { BlockInfo } from '../../components/blockInfo/BlockInfo';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { RootActions } from '../../types/RootActions';
import { coreSetVisibleModal } from '../../actions/coreActions';
import { ModalProductInfo } from '../../components/modals/ModalProductInfo';
import { IProductInfoState } from '../../interfaces/IProductInfoState';
import chats from '../../assets/darkchat/chats.png';
import chatsModal from '../../assets/darkchat/chatsModal.png';
import menu from '../../assets/darkchat/menu.png';
import itfund from '../../assets/logo_companies/mini-logo.svg';
import menuHover from '../../assets/darkchat/menuHover.png';
import { ROUTE_CONTACTS } from '../../constants/routes';
import { ModalImages } from '../../components/modals/ModalImages';
// @ts-ignore
import space from '../../assets/video/space.mp4';

export const Main = React.memo(() => {
  const { height } = useWindowDimensions();
  const texts = new LocalizedStrings({
    EN: {
      slogan: 'The best execution of your ideas',
      sponsor: 'Development and integration of digital solutions for business',
      ourProducts: 'Products',
      ourProductsInfo:
        'We develop our own products, our philosophy is to create innovative resources and solutions that make life easier for ordinary people and help companies and enterprises to automate routine processes, thereby increasing profits.',
      darkChatProductInfo:
        "DarkChat is our business messenger that offers new functionality to entrepreneurs, creating a complete ecosystem for distributing products within a single site and communicating with external devices through our translator protocol. DarkChat makes life easier for users, allowing them to use their favorite products within a single application, while still retaining the convenience of our generation of messengers. DarkChat's architecture is a set of microservices consisting of 4 components:\n\n1. Multiplatform messenger, with a full set of features needed for everyday communication.\n2. Own platform for financial transactions within the application.\n3. A chat bot builder that helps you create full-fledged applications in the messenger without writing code.\n4. Wasteland communication protocol, which translates information from one protocol to another, thus allowing devices with different protocols to communicate.",
      ourProjects: 'Projects',
      ourProjectsInfo:
        'We love helping people and we love cool ideas, which is why we are happy to participate in the development and support of other projects. We guarantee you a good price and full return.',
      douLike: 'Did you like it? Do you want one too? Write!',
      ourSponsors: 'Sponsors',
      ourSponsorsInfo:
        'Our sponsors, receive constant personal support in the development of their projects, as well as receive carte blanche for unlimited use of all our products.',
      newProduct: 'Expect new products!',
      newSponsor: 'Do you want to be our sponsor?',
      efficiency: 'Efficiency',
      efficiencyText:
        'The products are developed in modern programming languages GO, Elixir, Kotlin and Ceylon. The combination of micro-service architectures with compact monolithic products ensures high reliability and self-recovery after failures in real time.',
      quality: 'Quality',
      qualityText:
        'The systems are configured to work in real time with high decentralization and distributed networks. The operating modes provide both hard and soft versions of real-time systems. The variability of product settings includes maximum user needs.',
      convenience: 'Convenience',
      convenienceText:
        'Comfortable product configuration pages do not require special knowledge to configure all product capabilities. At the same time, it is allowed to limit the roles of users of products, in accordance with their status. The assistance of the website support service for configuring products is provided.',
    },
    RU: {
      slogan: 'Лучшее исполнение ваших идей',
      sponsor: 'Разработка и интеграция цифровых решений для бизнеса',
      ourProducts: 'Продукты',
      ourProductsInfo:
        'Мы занимаемся разработкой собственных продуктов, наша философия заключается в создании инновационных ресурсов и решений, которые облегчат жизнь как простым людям, так и помогут компаниям и предприятиям, автоматизировать рутинные процессы, тем самым увеличивая прибыль.',
      darkChatProductInfo:
        'DarkChat - это наш бизнес мессенджер, который предлагает новый функционал предпринимателям, создавая полноценную экосистему для распространения продуктов внутри одной площадки, и умеющий связываться с внешними устройствами, за счёт нашего протокола переводчика. DarkChat упрощает жизнь пользователям, позволяя пользоваться любимыми продуктами внутри одного приложения, в тоже время сохраняя в себе удобства мессенджеров нашего поколения. Архитектура DarkChat`a это набор микросервисов, состоящих из 4 компонентов:\n\n1. Мультиплатформенный мессенджер, с полноценным набором функций нужных для повседневного общения.\n2. Собственная площадка для выполнения финансовых транзакций внутри приложения.\n3. Конструктор чат ботов, который помогает создавать полноценные приложения в мессенджере без написания кода.\n4. Протокол связи Wasteland, который переводит информацию с одного протокола в другой, таким образом позволяя устройствам с отличающимися протоколами общаться.',
      ourProjects: 'Проекты',
      ourProjectsInfo:
        'Нам нравится помогать людям и мы любим крутые идеи, именно поэтому мы с удовольствием участвуем в разработке и поддержке других проектов. Гарантируем вам хорошу цену и полную отдачу.',
      douLike: 'Понравилось? Хотите тоже? Пишите!',
      ourSponsors: 'Спонсоры',
      ourSponsorsInfo:
        'Наши спонсоры, получают постоянную персональную поддержку в развитии их проектов, и так же получают карт-бланш на не ограниченное использование всех наших продуктов.',
      newProduct: 'Ожидайте новых продуктов!',
      newSponsor: 'Хотите быть нашим спонсором?',
      efficiency: 'Эффективность',
      efficiencyText:
        'Продукты разработаны на современных языках программирования GO, Elixir, Kotlin и Ceylon. Сочетание микро-сервисных архитектур с компактными монолитными продуктами обеспечивают высокую надёжность и самовостановление после сбоев в режиме реального времени.',
      quality: 'Качество',
      qualityText:
        'Системы настроены на работу в масштабе реального времени с высокой децентрализацией и распределенными сетями. Режимы работы обеспечивают как жёсткий так и мягкий вариант работ систем реального времени. Вариативность настроек продуктов включает максимум потребностей пользователя.',
      convenience: 'Удобство',
      convenienceText:
        'Комфортные страницы конфигурации продуктов не требуют специальных знаний для настройки всех возможностей продуктов. При этом допускается ограничение ролей пользователей продуктов, в соответствии с их статусом. Предусмотрено содействие службы поддержки сайтов по настройке продуктов.',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);
  const dispatch = useDispatch<Dispatch<RootActions>>();

  const handleProductInfoClick = useCallback(() => dispatch(coreSetVisibleModal(ModalsEnum.MAIN_PRODUCT_INFO)), []);

  const isOpenProductInfo = useSelector((state: IRootState) => state.core[ModalsEnum.MAIN_PRODUCT_INFO]);
  const isOpenImages = useSelector((state: IRootState) => state.core[ModalsEnum.MAIN_IMAGES]);

  const [isLargerThan1240] = useMediaQuery('(min-width: 1240px)');
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const [isLargerThan430] = useMediaQuery('(min-width: 430px)');

  const refHeader = useRef<HTMLDivElement>(null);

  const darkChat: IProductInfoState = {
    name: 'DARKCHAT',
    info: `${texts.getString('darkChatProductInfo', lang)}`,
    images: [chats, chatsModal, menu, menuHover],
  };

  const KeyframesNorthLight = keyframes`
    0% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 50% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    75% {
      background-position: 50% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `;

  const animationNorthLight = `${KeyframesNorthLight} 5s ease-in-out infinite`;

  return (
    <>
      <Helmet>
        <title>FOG</title>
      </Helmet>
      <Header />
      <VStack bgColor="brand.dark" minH={`${height}px`} justify="center">
        <VStack w="full" spacing={[6, 8, 10, 12]}>
          <VStack w="full" ref={refHeader} p={0} m={0} borderBottom="2px" borderColor="brand.gray">
            <VStack w="full" justify="center" align="center" p={[4, 6, 8, 10]} m={0}>
              {refHeader.current?.clientHeight && (
                <VStack
                  bgColor="black"
                  objectFit="cover"
                  filter="brightness(25%)"
                  left={0}
                  zIndex={0}
                  position="absolute"
                  h={`${refHeader.current?.scrollHeight}`}
                  w="full"
                  p={0}
                  m={0}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <source src={space} type="video/mp4"></source>
                  </video>
                </VStack>
              )}
              <VStack
                w="full"
                p={0}
                m={0}
                zIndex={2}
                minH={isLargerThan600 ? height / 2.5 : '150px'}
                align="center"
                justify="center"
              >
                <Heading>
                  <Text
                    align="center"
                    bgGradient="linear(to-l,  #e73c7e, #FA9836,   #23a6d5, #00B6EC)"
                    as={motion.div}
                    animation={animationNorthLight}
                    bgClip="text"
                    backgroundSize="400%"
                    transform="translate3d(0, 0, 0)"
                    fontSize={['4xl', '5xl', '6xl', '7xl', '8xl', '9xl', '9xl', '9xl']}
                    fontWeight="extrabold"
                  >
                    FENNEC OPEN GROUP
                  </Text>
                </Heading>
                <Text color="white" fontSize={['xs', 'sm', 'md', 'lg', 'xl']} align="center">
                  {texts.getString('slogan', lang)}
                </Text>
                <Text
                  color="brand.lightGray"
                  fontSize={['xs', 'sm', 'md', 'lg', 'xl']}
                  borderTop="2px"
                  borderColor="brand.lightGray"
                  align="center"
                >
                  {texts.getString('sponsor', lang)}
                </Text>
              </VStack>
            </VStack>
          </VStack>
          <SimpleGrid
            columns={isLargerThan1240 ? 3 : 1}
            w={isLargerThan1240 ? '70%' : '90%'}
            spacing={[4, 6, 8, 10]}
            zIndex={2}
          >
            <VStack align="start" spacing={4} maxW={isLargerThan1240 ? '300px' : '1000px'}>
              <Heading fontWeight="bold" fontSize={['lg', 'xl']}>
                {texts.getString('efficiency', lang)}
              </Heading>
              <Text color="brand.lightGray" fontSize={['sm', 'md']}>
                {texts.getString('efficiencyText', lang)}
              </Text>
            </VStack>
            <VStack align="start" spacing={4} maxW={isLargerThan1240 ? '300px' : '1000px'}>
              <Heading fontWeight="bold" fontSize={['lg', 'xl']}>
                {texts.getString('quality', lang)}
              </Heading>
              <Text color="brand.lightGray" fontSize={['sm', 'md']}>
                {texts.getString('qualityText', lang)}
              </Text>
            </VStack>
            <VStack align="start" spacing={4} maxW={isLargerThan1240 ? '300px' : '1000px'}>
              <Heading fontWeight="bold" fontSize={['lg', 'xl']}>
                {texts.getString('convenience', lang)}
              </Heading>
              <Text color="brand.lightGray" fontSize={['sm', 'md']}>
                {texts.getString('convenienceText', lang)}
              </Text>
            </VStack>
          </SimpleGrid>
          <VStack w="full" spacing={4} px={isLargerThan1240 ? '15%' : '5%'}>
            <Heading w="full" fontSize={['lg', 'xl']} alignContent="start">
              {texts.getString('ourProducts', lang)}
            </Heading>
            <SimpleGrid columns={isLargerThan430 ? 3 : 1} w="full" spacing="4px">
              <BlockInfo
                alt={
                  <pre>{`
      :::::::::      :::     :::::::::  :::    :::          ::::::::  :::    :::     ::: ::::::::::: 
     :+:    :+:   :+: :+:   :+:    :+: :+:   :+:          :+:    :+: :+:    :+:   :+: :+:   :+:      
    +:+    +:+  +:+   +:+  +:+    +:+ +:+  +:+           +:+        +:+    +:+  +:+   +:+  +:+       
   +#+    +:+ +#++:++#++: +#++:++#:  +#++:++            +#+        +#++:++#++ +#++:++#++: +#+        
  +#+    +#+ +#+     +#+ +#+    +#+ +#+  +#+           +#+        +#+    +#+ +#+     +#+ +#+         
 #+#    #+# #+#     #+# #+#    #+# #+#   #+#          #+#    #+# #+#    #+# #+#     #+# #+#          
#########  ###     ### ###    ### ###    ###          ########  ###    ### ###     ### ###           
        `}</pre>
                }
                fontSize={['3px', '3px', '4px', '4px', '5px']}
                onClick={handleProductInfoClick}
              />
              <BlockInfo />
              <BlockInfo />
            </SimpleGrid>
          </VStack>
          <VStack w="full" spacing={4} px={isLargerThan1240 ? '15%' : '5%'}>
            <Heading w="full" fontSize={['lg', 'xl']} alignContent="start">
              {texts.getString('ourProjects', lang)}
            </Heading>
            <SimpleGrid columns={isLargerThan430 ? 3 : 1} w="full" spacing="4px">
              <BlockInfo
                icon={
                  <Image
                    src={itfund}
                    h={['50px', '60px', '70px', '80px', '100px']}
                    filter="grayscale(100%) hue-rotate(90deg)"
                  />
                }
                href="https://www.it-fund73.ru/"
              />
              <BlockInfo />
              <VStack spacing={0} p={0} m={0} as={RouterLink} to={ROUTE_CONTACTS}>
                <BlockInfo icon={<AddIcon boxSize="25px" />} toolTipText={texts.getString('douLike', lang)} />
              </VStack>
            </SimpleGrid>
          </VStack>
          <VStack w="full" px={isLargerThan1240 ? '15%' : '5%'} spacing={4}>
            <Heading w="full" fontSize={['lg', 'xl']} alignContent="start">
              {texts.getString('ourSponsors', lang)}
            </Heading>
            <SimpleGrid columns={isLargerThan430 ? 3 : 1} w="full" spacing="4px">
              <BlockInfo />
              <BlockInfo />
              <VStack spacing={0} p={0} m={0} as={RouterLink} to={ROUTE_CONTACTS}>
                <BlockInfo icon={<AddIcon boxSize="25px" />} toolTipText={texts.getString('newSponsor', lang)} />
              </VStack>
            </SimpleGrid>
          </VStack>
        </VStack>
        <Spacer />
        <HStack w="full" overflow="hidden" justifyContent="center" color="white" pt={6}>
          <Marquee gradient={false} direction="left" speed={80}>
            {' - FENNEC OPEN GROUP'.repeat(40)}
          </Marquee>
        </HStack>
        <Footer />
        <ModalProductInfo isOpen={!!isOpenProductInfo} productData={darkChat} />
        <ModalImages isOpen={!!isOpenImages} productData={darkChat} />
      </VStack>
    </>
  );
});
