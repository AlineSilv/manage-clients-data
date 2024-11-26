import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtualizarEndereco, useListarEstados, useBuscarCidadesPorEstado, MunicipioModel, EstadoModel} from '../../../../services/enderecoservice/enderecoService'; 
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
  ErrorMessage,
  Select 
} from './modaleditaddressstyles';

const schema = z.object({
  estado: z.number().nonnegative("Este campo é obrigatório").or(z.literal(0).describe("Estado deve ser selecionado")),
  cidade: z.number().nonnegative("Este campo é obrigatório").or(z.literal(0).describe("Selecione uma cidade válida")),
  bairro: z.string().min(3, { message: "Este campo é obrigatório e deve ter no mínimo 3 caracteres" }),
  rua: z.string().min(3, { message: "Este campo é obrigatório e deve ter no mínimo 3 caracteres" }),
  numero: z.string().min(2, { message: "Este campo é obrigatório e deve ter no mínimo 2 caracteres" }),
  cep: z.string().min(8, { message: "Este campo é obrigatório e deve ter no mínimo 8 caracteres" }),
});


type FormData = z.infer<typeof schema>;

const ModalEditAddress: React.FC<{ onClose: () => void, address: any }> = ({ onClose, address }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: address,
  });

  const [selectedEstado, setSelectedEstado] = useState<number | string>(''); 

  const { data: estadosData, isLoading: isLoadingEstados } = useListarEstados();
  const { data: municipios, refetch: fetchCidades } = useBuscarCidadesPorEstado(Number(selectedEstado));
  const { mutate: atualizarEndereco } = useAtualizarEndereco();

  useEffect(() => {
    if (address) {
      reset({
        estado: address.estado || '',
        cidade: address.cidade || '',
        bairro: address.bairro || '',
        rua: address.rua || '',
        numero: address.numero || '',
        cep: address.cep || '',
      });
  
      if (address.id_estado) {
        setSelectedEstado(address.id_estado);
      }
    }
  }, [address, reset, fetchCidades]);
  

  const handleEstadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const estadoId = e.target.value;
    setSelectedEstado(Number(estadoId));  
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const token = localStorage.getItem("address_token");
    try {
      atualizarEndereco(
        {
          id: address.id, 
          endereco: {
            rua: data.rua,
            numero: data.numero,
            bairro: data.bairro,
            cep: data.cep,
            id_cidade: Number(data.cidade), 
            id_estado: Number(data.estado), 
          },
        },{
          onSuccess: () => {
            onClose();
            window.location.reload();
          },
          onError: (error) => {
            console.error("Erro ao atualizar o endereço", error);
          },
        }
      );
    } catch (error) {
      console.error('Error updating register', error);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>Editar Registro</ModalHeader>
        <ModalBody>
          
        <FormGroup>
        <Select id="estado"  {...register('estado',{
              setValueAs: (value) => (value === "" ? undefined : Number(value)), 
            })}
          onChange={handleEstadoChange}>
          <option value={address.estado}>{address.estado}</option>
          {estadosData?.map((estado) => (
            <option key={estado.codigo_uf} value={estado.codigo_uf}>
              {estado.nome}
            </option>
          ))}
        </Select>
          <Label htmlFor="estado">Estado</Label>
          {errors.estado && <ErrorMessage>{errors.estado.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Select id="cidade" {...register("cidade", {
              setValueAs: (value) => (value === "" ? undefined : Number(value)), 
            })}>
          <option value={address.cidade}>{address.cidade}</option>
            {municipios?.map((cidade) => (
              <option key={cidade.id} value={cidade.id}>
                {cidade.nome}
              </option>
            ))}
          </Select>
          <Label htmlFor="cidade">Cidade</Label>
          {errors.cidade && <ErrorMessage>{errors.cidade.message}</ErrorMessage>}
        </FormGroup>

          <FormGroup>
            <Input type="text" id="bairro" {...register('bairro')} placeholder=" " />
            <Label htmlFor="bairro">Bairro</Label>
            {errors.bairro && <ErrorMessage>{errors.bairro.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Input type="text" id="rua" {...register('rua')} placeholder=" " />
            <Label htmlFor="rua">Rua</Label>
            {errors.rua && <ErrorMessage>{errors.rua.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Input type="text" id="numero" {...register('numero')} placeholder=" " />
            <Label htmlFor="numero">Complemento</Label>
            {errors.numero && <ErrorMessage>{errors.numero.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Input type="text" id="cep" {...register('cep')} placeholder=" " />
            <Label htmlFor="cep">CEP</Label>
            {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
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

export default ModalEditAddress;
