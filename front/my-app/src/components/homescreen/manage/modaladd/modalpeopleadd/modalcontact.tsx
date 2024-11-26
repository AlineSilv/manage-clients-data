import React from 'react';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter, ButtonCancel, ContainerLink, IconNotion } from './modalpeopleaddstyles';

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}
const ModalContact: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Meios Para Contato</ModalHeader>
        <ModalBody>{children}
        <ContainerLink>
        <p>Acesse o Meu LinkedIn</p>
          <a href="www.linkedin.com/in/alinealv-silv" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none" }}>
          <IconNotion src="/assets/homescreen/iconlinkedin.png"/></a>
        </ContainerLink>
        <ContainerLink>
        <p>Acesse o Meu GitHub</p>
          <a href="https://github.com/AlineSilv" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none" }}>
          <IconNotion src="/assets/homescreen/icongithub.png"/></a>
        </ContainerLink>
        </ModalBody>
        <ModalFooter>
          <ButtonCancel onClick={onClose}>Fechar</ButtonCancel>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalContact;
