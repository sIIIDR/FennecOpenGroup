import { Avatar, HStack, VStack, Text, Link, Icon, Square, useMediaQuery } from '@chakra-ui/react';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { ImEarth } from 'react-icons/im';
import { BsCodeSlash, BsGithub, BsTelegram } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
// import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

interface IDeveloperInfoProps {
  src?: any;
  name: string;
  position: string;
  stack?: Array<String> | any;
  city: string;
  country: string;
  languages: Array<String> | any;
  git?: string;
  vk?: string;
  telegram?: string;
}

export const DeveloperInfo = React.memo(
  ({ name, position, city, country, languages, stack, git, vk, telegram, src }: IDeveloperInfoProps) => {
    const [isLargerThan426] = useMediaQuery('(min-width: 426px)');

    return (
      <VStack
        px={4}
        py={2}
        backgroundColor="rgb(59, 66, 72, 0.5)"
        justify="start"
        align="start"
        borderRadius="10px"
        w="full"
      >
        <HStack align="start">
          <Avatar size={isLargerThan426 ? 'xl' : 'lg'} name={name} src={src} />
          <VStack align="start" py={2}>
            <VStack align="start" justify="start" spacing={0}>
              <Text>{name}</Text>
              <Text fontWeight="light" fontSize="xs" color="brand.lightGray">
                {position}
              </Text>
            </VStack>
            <VStack align="start" justify="start" spacing={0}>
              {stack && (
                <HStack w="full" align="start">
                  <BsCodeSlash color="#7a8893" />
                  <HStack w="full">
                    <Text fontWeight="light" fontSize="xs">
                      {`${stack.join(' ● ')}`}
                    </Text>
                  </HStack>
                </HStack>
              )}
              <HStack align="start">
                <HiOutlineMapPin color="#7a8893" />
                <Text fontWeight="light" fontSize="xs">{`${city} ● ${country}`}</Text>
              </HStack>
              <HStack align="start">
                <ImEarth color="#7a8893" size="14px" />
                <Text fontWeight="light" fontSize="xs">{`${languages.join(', ')}`}</Text>
              </HStack>
            </VStack>
            <HStack>
              <Link href={git} isExternal>
                <Square size="22px">
                  <Icon as={BsGithub} boxSize="100%" color="#7a8893" _hover={{ color: 'white' }} />
                </Square>
              </Link>
              <Link href={telegram} isExternal>
                <Square size="22px">
                  <Icon as={BsTelegram} boxSize="100%" color="#7a8893" _hover={{ color: 'white' }} />
                </Square>
              </Link>
              <Link href={vk} isExternal>
                <Square size="22px">
                  <Icon as={SlSocialVkontakte} boxSize="100%" color="#7a8893" _hover={{ color: 'white' }} />
                </Square>
              </Link>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    );
  },
);
