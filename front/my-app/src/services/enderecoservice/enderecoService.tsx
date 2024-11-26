import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/enderecos";

export interface EnderecoRequestDTO {
  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  id_cidade: number;
  id_estado: number;
}

export interface EnderecoResponseDTO {
  id: number;
  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: {
    id: number;
    nome: string;
  };
  estado: {
    id: number;
    nome: string;
  };
}

export interface EstadoModel {
  codigo_uf: number;
  nome: string;
}

export interface MunicipioModel {
  id: number;
  nome: string;
}

export interface FilterEnderecoDTO {
  estadoNome: string;
  cidadeNome: string;
  bairro: string;
  pessoaNome: string;
}


export const listarEnderecos = async (): Promise<EnderecoResponseDTO[]> => {
  const { data } = await axios.get(`${API_URL}`);
  return data;
};

export const criarEndereco = async (endereco: EnderecoRequestDTO): Promise<EnderecoResponseDTO> => {
  const { data } = await axios.post(`${API_URL}`, endereco);
  return data;
};

export const atualizarEndereco = async ({
  id,
  endereco,
}: {
  id: number;
  endereco: EnderecoRequestDTO;
}): Promise<EnderecoResponseDTO> => {
  const { data } = await axios.put(`${API_URL}/${id}`, endereco);
  return data;
};

export const buscarEnderecoPorId = async (id: number): Promise<EnderecoResponseDTO> => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

export const deletarEndereco = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const filtrarEnderecos = async (
  filtro: FilterEnderecoDTO
): Promise<EnderecoResponseDTO[]> => {
  const { data } = await axios.post(`${API_URL}/filtrar`, filtro);
  return data;
};

// buscar estados e municípios
export const listarEstados = async (): Promise<EstadoModel[]> => {
  const { data } = await axios.get("http://localhost:8080/enderecos/estados");
  return data;
};

export const buscarCidadesPorEstado = async (estadoId: number): Promise<MunicipioModel[]> => {
  const { data } = await axios.get(`http://localhost:8080/enderecos/municipios/${estadoId}`);
  return data;
};


export const useListarEnderecos = () => {
  return useQuery<EnderecoResponseDTO[], Error>({
    queryKey: ["enderecos"],
    queryFn: listarEnderecos,
  });
};

export const useCriarEndereco = () => {
  const queryClient = useQueryClient();
  return useMutation<EnderecoResponseDTO, Error, EnderecoRequestDTO>({
    mutationFn: criarEndereco,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enderecos"] });
    },
  });
};

export const useAtualizarEndereco = () => {
  const queryClient = useQueryClient();
  return useMutation<EnderecoResponseDTO, Error, { id: number; endereco: EnderecoRequestDTO }>({
    mutationFn: atualizarEndereco,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enderecos"] });
    },
  });
};

export const useBuscarEnderecoPorId = (id: number) => {
  return useQuery<EnderecoResponseDTO, Error>({
    queryKey: ["endereco", id],
    queryFn: () => buscarEnderecoPorId(id),
    enabled: !!id,
  });
};

export const useDeletarEndereco = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: deletarEndereco,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enderecos"] });
    },
  });
};

export const useFiltrarEnderecos = () => {
  return useMutation<EnderecoResponseDTO[], Error, FilterEnderecoDTO>({
    mutationFn: filtrarEnderecos,
  });
};

export const useListarEstados = () => {
  return useQuery<EstadoModel[], Error>({
    queryKey: ["estados"],
    queryFn: listarEstados,
  });
};

export const useBuscarCidadesPorEstado = (estadoId: number) => {
  return useQuery<MunicipioModel[], Error>({
    queryKey: ["municipios", estadoId],
    queryFn: () => buscarCidadesPorEstado(estadoId),
    enabled: !!estadoId,
  });
};
