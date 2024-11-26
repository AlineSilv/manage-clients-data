import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/pessoas";


export interface PessoaRequestDTO {
  nome: string;
  sobrenome: string;
  email: string;
  idade: number;
}

export interface PessoaResponseDTO {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  senha:string;
  idade: number;
}

export interface VincularEnderecoPessoaDTO {
  id_pessoa: number;
  id_endereco: number;
}

export const listarPessoas = async (): Promise<PessoaResponseDTO[]> => {
  const { data } = await axios.get(`${API_URL}`);
  return data;
};

export const criarPessoa = async (pessoa: PessoaRequestDTO): Promise<PessoaResponseDTO> => {
  const { data } = await axios.post(`${API_URL}`, pessoa);
  return data;
};

export const atualizarPessoa = async ({
  id,
  pessoa,
}: {
  id: number;
  pessoa: PessoaRequestDTO;
}): Promise<PessoaResponseDTO> => {
  const { data } = await axios.put(`${API_URL}/${id}`, pessoa);
  return data;
};

export const buscarPessoaPorId = async (id: number): Promise<PessoaResponseDTO> => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

export const deletarPessoa = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const vincularEndereco = async (
  vinculo: VincularEnderecoPessoaDTO
): Promise<void> => {
  await axios.patch(`${API_URL}/${vinculo.id_pessoa}/endereco/${vinculo.id_endereco}`, vinculo);

};


// Hooks do React Query para operações
export const useListarPessoas = () => {
  return useQuery<PessoaResponseDTO[], Error>({
    queryKey: ["pessoas"], 
    queryFn: listarPessoas  
  });
};

export const useCriarPessoa = () => {
  const queryClient = useQueryClient();
  return useMutation<PessoaResponseDTO, Error, PessoaRequestDTO>({
    mutationFn: criarPessoa, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pessoas"] });
    },
  });
};

export const useAtualizarPessoa = () => {
  const queryClient = useQueryClient();
  return useMutation<PessoaResponseDTO, Error, { id: number, pessoa: PessoaRequestDTO }>({
    mutationFn: atualizarPessoa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pessoas"] });
    },
  });
};

export const useBuscarPessoaPorId = (id: number) => {
  return useQuery<PessoaResponseDTO, Error>({
    queryKey: ["pessoa", id],  
    queryFn: () => buscarPessoaPorId(id)  
  });
};

export const useDeletarPessoa = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: deletarPessoa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pessoas"] });  
    },
  });
};

export const useVincularEndereco = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, VincularEnderecoPessoaDTO>({
    mutationFn: vincularEndereco, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pessoas"] });
    },
  });
};
