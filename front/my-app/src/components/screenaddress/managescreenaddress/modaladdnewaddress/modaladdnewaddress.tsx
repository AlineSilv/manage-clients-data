import React, { useState } from 'react';
import { useListarEstados, useBuscarCidadesPorEstado, criarEndereco } from '../../../../services/enderecoservice/enderecoService'; 
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Button, ButtonCancel, ErrorMessage, Select } from './modaladdnewaddressstyles';
import { useQuery } from '@tanstack/react-query';


const schema = z.object({
  estado: z.number().nonnegative("Este campo é obrigatório").or(z.literal(0).describe("Estado deve ser selecionado")),
  cidade: z.number({invalid_type_error:"Este campo é obrigatório"}),
  bairro: z.string().min(3, { message: "Este campo é obrigatório e deve ter no mínimo 3 caracteres" }),
  rua: z.string().min(3, { message: "Este campo é obrigatório e deve ter no mínimo 3 caracteres" }),
  numero: z.string().min(2, { message: "Este campo é obrigatório e deve ter no mínimo 2 caracteres" }),
  cep: z.string().min(8, { message: "Este campo é obrigatório e deve ter no mínimo 8 caracteres" }),
});


type FormData = z.infer<typeof schema>;

const ModalAddNewAddress: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [ estadoId, setEstadoId] = useState(Number);

  const { data: estados, isLoading: loadingEstados } = useListarEstados();

  const {data: municipios, isLoading: buscandoCidades, isError: erroAoBuscarCidades} =  useBuscarCidadesPorEstado(estadoId);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await criarEndereco({
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cep: data.cep,
        id_cidade: Number(data.cidade), 
        id_estado: Number(data.estado),
      });
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao criar o endereço", error);
    }
  };

  function buscarCidades(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedId =Number(e.target.value)
    setEstadoId(selectedId);
  }

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Adicionar Novo Registro</ModalHeader>
        <ModalBody>
          {/* Estado */}
          <Select
            {...register('estado',{
              setValueAs: (value) => (value === "" ? undefined : Number(value)), 
            })}
            onChange={(e) => {
              buscarCidades(e);
            }}
          >
            <option value="">Selecione um Estado</option>
            {loadingEstados
              ? <option>Carregando...</option>
              : estados?.map((estado) => (
                <option key={estado.codigo_uf} value={estado.codigo_uf}>{estado.nome}</option>
              ))
            }
          </Select>
          {errors.estado && <ErrorMessage>{errors.estado.message}</ErrorMessage>}

          {/* Cidade */}
          <Select
            {...register("cidade", {
              setValueAs: (value) => (value === "" ? undefined : Number(value)), 
            })}
          >
            <option value="">Selecione uma Cidade</option>
            {municipios?.map((cidade) => (
              <option key={cidade.id} value={cidade.id}>
                {cidade.nome}
              </option>
            ))}
          </Select>
          {errors.cidade && <ErrorMessage>{errors.cidade.message}</ErrorMessage>}

          <Input type="text" placeholder="Bairro" {...register('bairro')} />
          {errors.bairro && <ErrorMessage>{errors.bairro.message}</ErrorMessage>}

          <Input type="text" placeholder="Rua" {...register('rua')} />
          {errors.rua && <ErrorMessage>{errors.rua.message}</ErrorMessage>}

          <Input type="text" placeholder="Numero" {...register('numero')} />
          {errors.numero && <ErrorMessage>{errors.numero.message}</ErrorMessage>}

          <Input type="text" placeholder="CEP" {...register('cep')} />
          {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
        </ModalBody>
        <ModalFooter>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <Button onClick={handleSubmit(onSubmit)}>Adicionar</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalAddNewAddress;
