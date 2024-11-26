import React from 'react';
import { criarPessoa } from '../../../../services/pessoaservice/pessoaService'; 
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  ModalContainer, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Input, 
  Button, 
  ButtonCancel, 
  ErrorMessage 
} from './modaladdnewpeoplestyles';

const schema = z.object({
  nome: z.string().min(3, "Este campo é obrigatório"),
  sobrenome: z.string().min(3, "Este campo é obrigatório"),
  email: z.string().email("Formato de e-mail inválido"),
  idade: z.string().min(1, "Este campo é obrigatório"),
});

type FormData = z.infer<typeof schema>;

interface ModalAddNewPeopleProps {
  onClose: () => void;
}

const ModalAddNewPeople: React.FC<ModalAddNewPeopleProps> = ({ onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });


  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await criarPessoa({
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        idade: parseInt(data.idade),
      });
      reset();  
      onClose();  
    } catch (error) {
      console.error('Erro ao adicionar pessoa', error);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Adicionar Novo Registro</ModalHeader>
        <ModalBody>
          <Input type="text" placeholder="Nome" {...register('nome')} />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}

          <Input type="text" placeholder="Sobrenome" {...register('sobrenome')} />
          {errors.sobrenome && <ErrorMessage>{errors.sobrenome.message}</ErrorMessage>}

          <Input type="email" placeholder="E-mail" {...register('email')} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <Input type="text" placeholder="Idade" {...register('idade')} />
          {errors.idade && <ErrorMessage>{errors.idade.message}</ErrorMessage>}
        </ModalBody>
        <ModalFooter>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <Button onClick={handleSubmit(onSubmit)}>Adicionar</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalAddNewPeople;
