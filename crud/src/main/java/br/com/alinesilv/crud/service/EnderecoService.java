package br.com.alinesilv.crud.service;

import br.com.alinesilv.crud.dto.request.EnderecoRequestDTO;
import br.com.alinesilv.crud.dto.request.FilterEnderecoDTO;
import br.com.alinesilv.crud.dto.response.EnderecoResponseDTO;
import br.com.alinesilv.crud.exception.EnderecoAlreadyExistsException;
import br.com.alinesilv.crud.exception.EnderecoNotFoundException;
import br.com.alinesilv.crud.mapper.EnderecoMapperDTO;
import br.com.alinesilv.crud.model.modeladdress.EnderecoModel;
import br.com.alinesilv.crud.model.modeladdress.EstadoModel;
import br.com.alinesilv.crud.model.modeladdress.MunicipioModel;
import br.com.alinesilv.crud.repository.EnderecoRepository;
import br.com.alinesilv.crud.repository.EstadoRepository;
import br.com.alinesilv.crud.repository.MunicipioRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EnderecoService {
    private final EnderecoRepository enderecoRepository;
    private final EstadoRepository estadoRepository;
    private final MunicipioRepository municipioRepository;
    @PersistenceContext
    private EntityManager entityManager;
    public EnderecoService(EnderecoRepository enderecoRepository, EstadoRepository estadoRepository, MunicipioRepository municipioRepository) {
        this.enderecoRepository = enderecoRepository;
        this.estadoRepository = estadoRepository;
        this.municipioRepository = municipioRepository;
    }


    @Transactional
    public EnderecoResponseDTO criarEndereco(EnderecoRequestDTO enderecoRequestDTO) {
        long count = entityManager.createQuery(
                "SELECT COUNT(e) FROM EnderecoModel e WHERE e.rua = :rua AND e.numero = :numero AND e.bairro = :bairro AND e.cep = :cep AND e.cidade.id = :cidadeId AND e.estado.id = :estadoId", Long.class)
                .setParameter("rua", enderecoRequestDTO.getRua())
                .setParameter("numero", enderecoRequestDTO.getNumero())
                .setParameter("bairro", enderecoRequestDTO.getBairro())
                .setParameter("cep", enderecoRequestDTO.getCep())
                .setParameter("cidadeId", enderecoRequestDTO.getId_cidade())
                .setParameter("estadoId", enderecoRequestDTO.getId_estado())
                .getSingleResult();
        if(count >0){
            throw new EnderecoAlreadyExistsException("Erro ao cadastrar! Endereço já existe.");
        }
        EnderecoModel enderecoModel = EnderecoMapperDTO.INSTANCE.enderecoResquestDTOToEnderecoModel(enderecoRequestDTO);
        EnderecoModel novoEndereco = enderecoRepository.save(enderecoModel);
        return EnderecoMapperDTO.INSTANCE.enderecoModelToEnderecoResponseDTO(novoEndereco);
    }

    public List<EnderecoResponseDTO> listarEnderecos() {
        List<EnderecoModel> enderecos = enderecoRepository.findAll();
        return enderecos.stream().map(EnderecoMapperDTO.INSTANCE::enderecoModelToEnderecoDTO).collect(Collectors.toList());
    }

    public List<EnderecoResponseDTO> filtrarEnderecos(FilterEnderecoDTO filterEnderecoDTO) {
        List<EnderecoModel> enderecos = enderecoRepository.findByEstadoNomeContainingOrCidadeNomeContainingOrBairroContainingOrPessoaNomeContaining(
                filterEnderecoDTO.getEstadoNome(),
                filterEnderecoDTO.getCidadeNome(),
                filterEnderecoDTO.getBairro(),
                filterEnderecoDTO.getPessoaNome()
        );
        return enderecos.stream().map(EnderecoMapperDTO.INSTANCE::enderecoModelToEnderecoResponseDTO).collect(Collectors.toList());
    }

    public EnderecoResponseDTO listarEnderecoPorId(Integer id) {
        if (id == null || id <= 0) {
            throw new EnderecoNotFoundException("O ID é obrigatório e deve ser um número positivo.");
        }
        EnderecoModel enderecoModel = enderecoRepository.findById(id)
                .orElseThrow(() -> new EnderecoNotFoundException("Busca confere que o registro de endereço com ID " + id + " não foi encontrado."));
        return EnderecoMapperDTO.INSTANCE.enderecoModelToEnderecoDTO(enderecoModel);
    }

    @Transactional
    public EnderecoResponseDTO atualizarEndereco(Integer id, EnderecoRequestDTO enderecoRequestDTO) {
        EnderecoModel enderecoModel = enderecoRepository.findById(id).orElseThrow(() -> new EnderecoNotFoundException("Não foi possível atualizar o registro, pois o endereço com ID " + id + " não foi encontrado."));
        enderecoModel.setRua(enderecoRequestDTO.getRua());
        enderecoModel.setNumero(enderecoRequestDTO.getNumero());
        enderecoModel.setBairro(enderecoRequestDTO.getBairro());

        MunicipioModel cidade = municipioRepository.findById(enderecoRequestDTO.getId_cidade())
                .orElseThrow(() -> new EnderecoNotFoundException("Cidade não encontrada com ID: " + enderecoRequestDTO.getId_cidade()));
        enderecoModel.setCidade(cidade);
        EstadoModel estado = estadoRepository.findById(enderecoRequestDTO.getId_estado())
                .orElseThrow(() -> new EnderecoNotFoundException("Estado não encontrado com ID: " + enderecoRequestDTO.getId_estado()));
        enderecoModel.setEstado(estado);
        enderecoRepository.save(enderecoModel);
        return EnderecoMapperDTO.INSTANCE.enderecoModelToEnderecoDTO(enderecoModel);
    }
    @Transactional
    public void deletarEndereco(Integer id) {
        EnderecoModel enderecoModel = enderecoRepository.findById(id).orElseThrow(() -> new EnderecoNotFoundException("Exlusão de registro não sucedida, pois o endereço com ID " + id + " não foi encontrado."));
        enderecoRepository.delete(enderecoModel);
    }

    public List<EstadoModel> getEstados() {
        List<EstadoModel> estados = estadoRepository.findAll();
        return estados;
    }

    public List<MunicipioModel> buscarCidadesPorEstado(EstadoModel estado) {
        List<MunicipioModel> municipios = municipioRepository.findByEstado(estado);
        return municipios;
    }
}
