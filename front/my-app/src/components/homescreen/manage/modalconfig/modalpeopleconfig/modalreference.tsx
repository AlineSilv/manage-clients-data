import React from 'react';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter, ButtonCancel, IconNotion, ContainerLink } from './modalpeopleconfigstyles';

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalReference: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Documentação do Projeto</ModalHeader>
        <ModalBody>{children}
        <ContainerLink>
        <p>Acesse o Guia de Planejamento e Produção do Projeto!</p>
          <a href="https://garnet-shear-d8b.notion.site/Guia-de-Planejamento-Projeto-Spring-1429f9faccaa80659012d27096b42499" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none" }}>
          <IconNotion src="/assets/homescreen/iconnotion.png"/></a>
        </ContainerLink>
        <ContainerLink>
        <p>Acesse o Layout Figma do Projeto!</p>
          <a href="https://www.figma.com/design/qyyP7NAxYQ74uK41qh5LK9/GerenciadorApp" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none" }}>
          <IconNotion src="/assets/homescreen/iconfigma.png"/></a>
        </ContainerLink>
        </ModalBody>
        <ModalFooter>
          <ButtonCancel onClick={onClose}>Fechar</ButtonCancel>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalReference;
