/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Image } from '@chakra-ui/react';
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

  const [image] = useState(0);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent w="full">
        <ModalCloseButton />
        <ModalBody backgroundColor="transparent" w="full">
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
            cursor="pointer"
            srcSet={`${productData.images[image]}, ${productData.images[image]}, ${productData.images[image]}`}
            sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
