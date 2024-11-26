import React from 'react';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter, ButtonCancel } from './modalpeopleliststyles';

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}
const ModalSenha: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Login Para O Projeto Teste</ModalHeader>
        <ModalBody>{children}
          <p>Usuário: admin</p>
          <p>Senha: admin</p>
        </ModalBody>
        <ModalFooter>
          <ButtonCancel onClick={onClose}>Fechar</ButtonCancel>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalSenha;
