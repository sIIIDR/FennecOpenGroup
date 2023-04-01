/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, ModalBody, ModalContent, ModalOverlay, Image, HStack, Spacer, Button, Square } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import React, { Dispatch, useCallback, useRef, useState } from 'react';
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
  const iconRef = useRef<HTMLDivElement>(null);

  const [image, setImage] = useState(0);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent w="full" maxW="95%" backgroundColor="transparent">
        <ModalBody backgroundColor="transparent" w="full" maxW="100%" ref={iconRef}>
          <Image src={productData.images[image]} alt="FOG" loading="eager" maxW="100%" borderRadius="5px" />
          <HStack
            w={iconRef.current ? iconRef.current.children[0].clientWidth : '97%'}
            h={iconRef.current ? iconRef.current.children[0].clientHeight : 'full'}
            position="absolute"
          >
            <Square size="55px">
              <Button
                variant="brand-icon"
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
            <Spacer />
            <Square size="55px">
              <Button
                variant="brand-icon"
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
