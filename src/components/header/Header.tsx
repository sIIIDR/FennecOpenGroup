import {
  Button,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Image,
  useMediaQuery,
  Tooltip,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import LocalizedStrings from 'react-localization';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { Dispatch, useCallback } from 'react';

import { IRootState } from '../../interfaces/IRootState';
import { LangEnum } from '../../enums/LangEnum';
import { coreSetLang } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import logo from '../../assets/logo-fog.png';
import {
  ROUTE_CONTACTS,
  ROUTE_DOCS,
  ROUTE_FAQ,
  ROUTE_MAINPAGE,
  ROUTE_TEAM,
  ROUTE_VACANCY,
} from '../../constants/routes';

interface IHeaderProps {
  contacts?: boolean;
  docs?: boolean;
  aboutUs?: boolean;
  vacancy?: boolean;
}

export const Header = React.memo(({ contacts, docs, aboutUs, vacancy }: IHeaderProps) => {
  const texts = new LocalizedStrings({
    EN: {
      docs: 'Docs',
      projects: 'Projects',
      vacancy: 'Vacancy',
      contacts: 'Cooperation',
      language: 'Language',
      aboutUs: 'About us',
      aboutUsFAQ: 'FAQ',
      aboutUsTeam: 'Team',
      stopVacancy: 'We don`t have any vacancies :/',
    },
    RU: {
      docs: 'Документы',
      projects: 'Проекты',
      vacancy: 'Вакансии',
      contacts: 'Сотрудничество',
      language: 'Язык',
      aboutUs: 'О нас',
      aboutUsFAQ: 'FAQ',
      aboutUsTeam: 'Команда',
      stopVacancy: 'У нас нет свободных вакансий :/',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);
  const [isLargerThan840] = useMediaQuery('(min-width: 840px)');
  const dispatch = useDispatch<Dispatch<RootActions>>();

  const handleLangClickRU = useCallback(() => {
    // dispatch(accountChangeLang(LangEnum.RU));
    dispatch(coreSetLang(LangEnum.RU));
  }, [lang]);

  const handleLangClickEN = useCallback(() => {
    // dispatch(accountChangeLang(LangEnum.EN));
    dispatch(coreSetLang(LangEnum.EN));
  }, [lang]);

  return (
    <HStack
      w="full"
      bgColor="brand.dark"
      borderBottom="2px"
      borderBottomColor="brand.gray"
      h="55px"
      px={[6, 8, 10]}
      py={[2, 4, 6]}
      position="sticky"
      top="0px"
      zIndex={999}
    >
      <HStack as={RouterLink} to={ROUTE_MAINPAGE} cursor="pointer">
        <Image
          src={logo}
          alt="FOG"
          loading="lazy"
          minW="32px"
          w="32px"
          minH="32px"
          h="32px"
          htmlWidth="full"
          htmlHeight="full"
        />
        <Text
          fontSize={['lg', 'xl', '2xl']}
          fontWeight="extrabold"
          transitionDuration="0.3s"
          _hover={{ color: 'brand.orange' }}
        >
          FOG
        </Text>
      </HStack>
      <Spacer />
      <HStack>
        {isLargerThan840 && (
          <>
            <Button
              variant="brand-transparent"
              as={RouterLink}
              to={ROUTE_CONTACTS}
              h="55px"
              borderBottom={contacts ? '2px' : '0px'}
              borderColor="brand.orange"
            >
              {texts.getString('contacts', lang)}
            </Button>
            <Button
              variant="brand-transparent"
              h="55px"
              borderBottom={docs ? '2px' : '0px'}
              borderColor="brand.orange"
              as={RouterLink}
              to={ROUTE_DOCS}
            >
              {texts.getString('docs', lang)}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                h="55px"
                variant="brand-transparent"
                rightIcon={<ChevronDownIcon boxSize="16px" />}
                borderBottom={aboutUs ? '2px' : '0px'}
                borderColor="brand.orange"
              >
                {texts.getString('aboutUs', lang)}
              </MenuButton>
              <MenuList>
                <MenuItem as={RouterLink} to={ROUTE_FAQ}>
                  {texts.getString('aboutUsFAQ', lang)}
                </MenuItem>
                <MenuItem as={RouterLink} to={ROUTE_TEAM}>
                  {texts.getString('aboutUsTeam', lang)}
                </MenuItem>
              </MenuList>
            </Menu>
            <Tooltip label={texts.getString('stopVacancy', lang)} placement="auto">
              <Button
                variant="brand-transparent"
                h="55px"
                borderBottom={vacancy ? '2px' : '0px'}
                borderColor="brand.orange"
                as={RouterLink}
                to={ROUTE_VACANCY}
                isDisabled={true}
              >
                {texts.getString('vacancy', lang)}
              </Button>
            </Tooltip>
          </>
        )}
        <HStack spacing={0}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon boxSize="16px" />} h="55px">
              {texts.getString('language', lang)}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleLangClickRU}>Русский</MenuItem>
              <MenuItem onClick={handleLangClickEN}>English</MenuItem>
            </MenuList>
          </Menu>
          {!isLargerThan840 && (
            <Menu>
              <MenuButton as={Button} variant="brand-icon" color="white" rightIcon={<GiHamburgerMenu size="20px" />} />
              <MenuList>
                <MenuItem as={RouterLink} to={ROUTE_CONTACTS}>
                  {texts.getString('contacts', lang)}
                </MenuItem>
                <MenuItem as={RouterLink} to={ROUTE_DOCS}>
                  {texts.getString('docs', lang)}
                </MenuItem>
                <MenuItem as={RouterLink} to={ROUTE_FAQ}>
                  {texts.getString('aboutUsFAQ', lang)}
                </MenuItem>
                <MenuItem as={RouterLink} to={ROUTE_TEAM}>
                  {texts.getString('aboutUsTeam', lang)}
                </MenuItem>
                <MenuItem isDisabled={true}>{texts.getString('vacancy', lang)}</MenuItem>
              </MenuList>
            </Menu>
          )}
        </HStack>
        {/* <Button variant="brand-icon" iconSpacing={0} leftIcon={<AiFillGithub size="30px" />} size="xs" />
        <Button variant="brand-icon" iconSpacing={0} leftIcon={<AiFillGitlab size="30px" />} size="xs" />
        <Button variant="brand-icon" iconSpacing={0} leftIcon={<BsTelegram size="30px" />} size="xs" />
        <Button variant="brand-icon" iconSpacing={0} leftIcon={<BsDiscord size="30px" />} size="xs" /> */}
      </HStack>
      {isLargerThan840 && <Spacer />}
    </HStack>
  );
});
