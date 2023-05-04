/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, ModalBody, ModalContent, ModalOverlay, Image, HStack, Button, useMediaQuery } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import React, { Dispatch, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { coreRemoveVisibleModal } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { ModalsEnum } from '../../enums/ModalsEnum';

interface IModalEmailCheckProps {
  isOpen: boolean;
  productData: any;
}

export const ModalImages = React.memo(({ isOpen, productData }: IModalEmailCheckProps) => {
  const dispatch = useDispatch<Dispatch<RootActions>>();
  const handleClose = useCallback(() => dispatch(coreRemoveVisibleModal(ModalsEnum.MAIN_IMAGES)), []);

  const [image, setImage] = useState(0);
  const [isLargerThan1025] = useMediaQuery('(min-width: 1025px)');

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent w="full" maxW={isLargerThan1025 ? '90%' : '100%'} backgroundColor="transparent">
        <ModalBody backgroundColor="transparent" w="full" maxW="100%" position="relative" top="0px" p={0}>
          <Image src={productData.images[image]} alt="FOG" loading="eager" maxW="100%" borderRadius="5px" />
          <HStack position="absolute" w="100%" h="full" justifyContent="space-between">
            <Button
              variant="brand-icon"
              iconSpacing={0}
              w="60px"
              h="100%"
              _hover={{ backgroundColor: 'rgba(26, 26, 26, 0.80)' }}
              onClick={() => {
                image > 0 ? setImage(image - 1) : setImage(productData.images.length - 1);
              }}
            >
              <ArrowBackIcon boxSize={6} />
            </Button>
            <Button
              variant="brand-icon"
              iconSpacing={0}
              w="60px"
              h="100%"
              _hover={{ backgroundColor: 'rgba(26, 26, 26, 0.80)' }}
              onClick={() => {
                image >= productData.images.length - 1 ? setImage(0) : setImage(image + 1);
              }}
            >
              <ArrowForwardIcon boxSize={6} />
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
