import React from 'react';
import axios, { AxiosError } from 'axios';
import { PopupContainer, PopupContent, PopupHeader, PopupBody, PopupFooter, Button, ButtonCancel } from './popupdeleteaddressstyles';
import { deletarEndereco } from '../../../../services/enderecoservice/enderecoService';

interface Address {
  id: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  cep: string;
}

interface PopupDeleteProps {
  onClose: () => void;
  address: Address;
  refreshAddresses: () => void; 
}

const PopupDeleteAddress: React.FC<PopupDeleteProps> = ({ onClose, address, refreshAddresses }) => {
  const handleDelete = async () => {
    if (address) {
      try {
        await deletarEndereco(Number(address.id));
        onClose();
        window.location.reload();
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error('Erro ao deletar pessoa', error);
        if (error.response) {
          console.error('Resposta do servidor:', error.response.data);
        } else {
          console.error('Mensagem de erro:', error.message);
        }
      }
    }
  };

  return (
    <PopupContainer>
      <PopupContent>
        <PopupHeader>Apagar Endereço</PopupHeader>
        <PopupBody>Esta ação é irreversível. Tem certeza que deseja apagar este registro do sistema?</PopupBody>
        <PopupFooter>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <Button onClick={handleDelete}>Apagar</Button>
        </PopupFooter>
      </PopupContent>
    </PopupContainer>
  );
};

export default PopupDeleteAddress;
