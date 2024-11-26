import React from 'react';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter, ButtonCancel } from './modaladdressliststyles';

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalAddressList: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Escolha uma Opção</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <ButtonCancel onClick={onClose}>Fechar</ButtonCancel>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalAddressList;
