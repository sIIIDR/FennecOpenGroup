import { VStack, Tooltip, Heading, HStack, Link } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

interface IBlockInfoProps {
  icon?: React.ReactElement;
  logo?: string;
  alt?: any;
  fontSize?: string | string[];
  onClick?: MouseEventHandler<HTMLDivElement>;
  toolTipText?: string;
  href?: string;
}

export const BlockInfo = React.memo(({ icon, logo, alt, toolTipText, fontSize, onClick, href }: IBlockInfoProps) => {
  return (
    <Tooltip label={toolTipText}>
      {alt === undefined ? (
        <VStack
          h={['80px', '100px', '130px']}
          minW="100px"
          w="full"
          bgColor="brand.gray"
          transitionDuration="0.5s"
          color="white"
          _hover={{ bgColor: 'brand.lightGray', color: 'brand.gray' }}
          justify="center"
          onClick={onClick}
          cursor="pointer"
          as={Link}
          href={href}
          isExternal
        >
          {icon}
          {logo}
        </VStack>
      ) : (
        <VStack
          h={['80px', '100px', '130px']}
          minW="100px"
          w="full"
          bgColor="brand.gray"
          cursor="pointer"
          justify="center"
        >
          <HStack
            w="full"
            h="full"
            _hover={{
              textShadow: '2px 2px 4px white, 0 0 1em white, 0 0 0.4em white',
            }}
            justify="center"
            transitionDuration="0.25s"
            onClick={onClick}
          >
            <Heading fontSize={fontSize} userSelect="none">
              {alt}
            </Heading>
          </HStack>
        </VStack>
      )}
    </Tooltip>
  );
});
