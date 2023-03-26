import { VStack, Text } from '@chakra-ui/react';
import React from 'react';

interface ITextInfoProps {
  heading: any;
  text: React.ReactElement;
  isActive: boolean;
}

export const TextInfo = React.memo(({ heading, text, isActive }: ITextInfoProps) => {
  return (
    <VStack w="full" justify="start" align="start" pt={4} borderTop="2px" borderColor="brand.gray">
      {isActive ? (
        <Text fontSize={['lg', 'xl', '2xl']} py={2} color="brand.orange" borderBottom="2px">
          {heading}
        </Text>
      ) : (
        <Text fontSize={['lg', 'xl', '2xl']} py={2} borderBottom="2px" borderColor="transparent">
          {heading}
        </Text>
      )}
      <VStack spacing={4} fontSize={['sm', 'md', 'lg']}>
        {text}
      </VStack>
    </VStack>
  );
});
