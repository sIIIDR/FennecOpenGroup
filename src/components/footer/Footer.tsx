import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = React.memo(() => {
  return (
    <HStack w="full" fontSize="lg" justify="center" py="4" zIndex={999}>
      <Text color="brand.lightGray">© Fennec Open Group {new Date().getFullYear()}</Text>
    </HStack>
  );
});
