/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { Dispatch, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalizedStrings from 'react-localization';

import { coreRemoveVisibleModal } from '../../actions/coreActions';
import { RootActions } from '../../types/RootActions';
import { ModalsEnum } from '../../enums/ModalsEnum';
import { IRootState } from '../../interfaces/IRootState';

interface IModalEmailCheckProps {
  isOpen: boolean;
}

export const ModalEmailCheck = React.memo(({ isOpen }: IModalEmailCheckProps) => {
  const texts = new LocalizedStrings({
    EN: {
      writeUs: 'Write to us: ',
      or: 'or',
    },
    RU: {
      writeUs: 'Напишите нам: ',
      or: 'или',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);

  const dispatch = useDispatch<Dispatch<RootActions>>();
  const handleClose = useCallback(() => dispatch(coreRemoveVisibleModal(ModalsEnum.MAIN_NEW_SPONSOR)), []);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="md">
      <ModalOverlay />
      <ModalContent backgroundColor="brand.dark" borderColor="brand.orange" border="2px">
        <ModalCloseButton />
        <ModalHeader fontSize={['lg', 'xl']}>{texts.getString('writeUs', lang)}</ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
});
