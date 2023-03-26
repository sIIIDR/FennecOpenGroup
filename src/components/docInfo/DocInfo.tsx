import { InfoIcon } from '@chakra-ui/icons';
import { VStack, Text, LinkBox, LinkOverlay, Spacer, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import { IRootState } from '../../interfaces/IRootState';

interface IDocInfoProps {
  name: string;
  date: string;
  link?: string;
}

export const DocInfo = React.memo(({ name, date, link }: IDocInfoProps) => {
  const texts = new LocalizedStrings({
    EN: {
      editionOf: 'Edition of',
    },
    RU: {
      editionOf: 'Редакция от',
    },
  });
  const lang = useSelector((state: IRootState) => state.core.lang);

  const [isLargerThan812] = useMediaQuery('(min-width: 812px)');

  return (
    <LinkBox
      cursor="pointer"
      border="2px"
      borderRadius="15px"
      borderColor="brand.gray"
      transitionDuration="0.3s"
      _hover={{ borderColor: 'brand.orange' }}
    >
      <LinkOverlay href={link}>
        <VStack
          backgroundColor="brand.gray"
          w="full"
          h="150px"
          p={[2, 4, 6]}
          borderRadius="12px"
          border="2px"
          borderColor="transparent"
          align="end"
        >
          <Text color="white" w="full" align="start" fontWeight="bold">
            {name}
          </Text>
          <Text color="white" w="full" align="start">
            {isLargerThan812 ? `${texts.getString('editionOf', lang)} ${date}` : date}
          </Text>
          <Spacer />
          <InfoIcon color="white" boxSize="20px" />
        </VStack>
      </LinkOverlay>
    </LinkBox>
  );
});
