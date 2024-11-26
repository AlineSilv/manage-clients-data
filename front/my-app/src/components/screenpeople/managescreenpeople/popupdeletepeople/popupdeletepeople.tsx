import React from 'react';
import { AxiosError } from 'axios';
import { PopupContainer, PopupContent, PopupHeader, PopupBody, PopupFooter, Button, ButtonCancel } from './popupdeletestyles';
import { deletarPessoa } from '../../../../services/pessoaservice/pessoaService'; 

interface People {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  idade: number;
}

interface PopupDeleteProps {
  onClose: () => void;
  people: People;
}

const PopupDeletePeople: React.FC<PopupDeleteProps> = ({ onClose, people }) => {
  const handleDelete = async () => {
    if (people) {
      try {
        await deletarPessoa(people.id);
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
        <PopupHeader>Apagar Pessoa</PopupHeader>
        <PopupBody>Esta ação é irreversível. Tem certeza que deseja apagar este registro do sistema?</PopupBody>
        <PopupFooter>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <Button onClick={handleDelete}>Apagar</Button>
        </PopupFooter>
      </PopupContent>
    </PopupContainer>
  );
};

export default PopupDeletePeople;
