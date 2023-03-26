/* eslint-disable react-hooks/exhaustive-deps */
import {
  HStack,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Image,
  Button,
  Square,
  Text,
  Heading,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import React, { Dispatch, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { coreRemoveVisibleModal } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { ModalsEnum } from '../../enums/ModalsEnum';

interface IModalProductInfoProps {
  isOpen: boolean;
  productData: any;
}

export const ModalProductInfo = React.memo(({ isOpen, productData }: IModalProductInfoProps) => {
  const dispatch = useDispatch<Dispatch<RootActions>>();
  const handleClose = useCallback(() => dispatch(coreRemoveVisibleModal(ModalsEnum.MAIN_PRODUCT_INFO)), []);

  const [image, setImage] = useState(0);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="6xl">
      <ModalOverlay />
      <ModalContent backgroundColor="brand.dark" borderColor="brand.orange" border="2px" w="full">
        <ModalCloseButton />
        <ModalBody p={2}>
          <VStack w="full" my={[2, 4, 6, 8]} py={6}>
            <HStack w="full" h="full" align="center" justify="center">
              <Image
                src={productData.images[image]}
                alt="FOG"
                loading="lazy"
                w="full"
                h="full"
                htmlWidth="full"
                htmlHeight="full"
                borderRadius="20px"
                objectFit="cover"
                srcSet={`${productData.images[image]}, ${productData.images[image]}, ${productData.images[image]}`}
                sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
              />
            </HStack>
            <VStack>
              <HStack>
                <Square size="55px">
                  <Button
                    variant="brand-circle-border"
                    borderRadius="60px"
                    iconSpacing={0}
                    minW="full"
                    minH="full"
                    onClick={() => {
                      image > 0 ? setImage(image - 1) : setImage(productData.images.length - 1);
                    }}
                  >
                    <ArrowBackIcon boxSize={6} />
                  </Button>
                </Square>
                <Square size="55px">
                  <Button
                    variant="brand-circle-border"
                    borderRadius="60px"
                    iconSpacing={0}
                    minW="full"
                    minH="full"
                    onClick={() => {
                      image >= productData.images.length - 1 ? setImage(0) : setImage(image + 1);
                    }}
                  >
                    <ArrowForwardIcon boxSize={6} />
                  </Button>
                </Square>
              </HStack>
              <Text fontSize={['lg', 'xl']}>{`${image + 1}/${productData.images.length}`}</Text>
            </VStack>
            <VStack w="full" justify="start" align="start">
              <Heading fontSize="xl">{productData.name}</Heading>
              <Text color="brand.lightGray" fontSize={['xs', 'sm', 'md']}>
                {productData.info
                  .trim()
                  .replace(/(?:\r\n|\r|\n)/g, '<br />')
                  .split('<br />')
                  .map(function (item: any, textindex: any) {
                    return (
                      <span key={textindex}>
                        {item}
                        <br />
                      </span>
                    );
                  })}
              </Text>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
