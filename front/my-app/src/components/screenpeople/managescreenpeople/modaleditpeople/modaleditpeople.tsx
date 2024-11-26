import React from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtualizarPessoa } from '../../../../services/pessoaservice/pessoaService'; 
import { 
  ModalContainer, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  FormGroup, 
  Label, 
  Input, 
  Button,
  ButtonCancel,
  ErrorMessage 
} from './modaleditpeoplestyles';

const schema = z.object({
  nome: z.string().min(3, "Este campo é obrigatório"),
  sobrenome: z.string().min(3, "Este campo é obrigatório"),
  email: z.string().email("Formato de e-mail inválido"),
  idade: z.string().min(1, "Este campo é obrigatório"),
});

type FormData = z.infer<typeof schema>;

const ModalEdit: React.FC<{ onClose: () => void, people: any }> = ({ onClose, people }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: people,
  });

  const { mutate: atualizarPessoa } = useAtualizarPessoa();


const onSubmit: SubmitHandler<FormData> = async (data) => {
  try {
    await atualizarPessoa({
      id: people.id,
      pessoa: {
        ...data,
        idade: parseInt(data.idade),
    }});
    onClose();
    window.location.reload();
  } catch (error) {
    console.error('Erro ao Editar o Registro.', error);
  }
};


  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Editar Registro</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input type="text" id="nome" {...register('nome')} placeholder=" " />
            <Label htmlFor="nome">Nome</Label>
            {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Input type="text" id="sobrenome" {...register('sobrenome')} placeholder=" " />
            <Label htmlFor="sobrenome">Sobrenome</Label>
            {errors.sobrenome && <ErrorMessage>{errors.sobrenome.message}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Input type="email" id="email" {...register('email')} placeholder=" " />
            <Label htmlFor="email">E-mail</Label>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Input type="text" id="idade" {...register('idade')} placeholder=" " />
            <Label htmlFor="idade">Idade</Label>
            {errors.idade && <ErrorMessage>{errors.idade.message}</ErrorMessage>}
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <ButtonCancel className="cancel" onClick={onClose}>Cancelar</ButtonCancel>
          <Button className="save" onClick={handleSubmit(onSubmit)}>Salvar Alterações</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalEdit;
