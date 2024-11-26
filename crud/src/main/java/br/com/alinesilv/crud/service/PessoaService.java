package br.com.alinesilv.crud.service;

import br.com.alinesilv.crud.dto.request.PessoaRequestDTO;
import br.com.alinesilv.crud.dto.request.VincularEnderecoPessoaDTO;
import br.com.alinesilv.crud.dto.response.PessoaResponseDTO;
import br.com.alinesilv.crud.exception.EnderecoNotFoundException;
import br.com.alinesilv.crud.exception.PessoaAlreadyExistsException;
import br.com.alinesilv.crud.exception.PessoaNotFoundException;
import br.com.alinesilv.crud.mapper.PessoaMapperDTO;
import br.com.alinesilv.crud.model.modeladdress.EnderecoModel;
import br.com.alinesilv.crud.model.modelpeople.PessoaModel;
import br.com.alinesilv.crud.repository.EnderecoRepository;
import br.com.alinesilv.crud.repository.PessoaRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PessoaService {
    private final PessoaRepository pessoaRepository;
    private final EnderecoRepository enderecoRepository;
    public PessoaService(PessoaRepository pessoaRepository, EnderecoRepository enderecoRepository) {
        this.pessoaRepository = pessoaRepository;
        this.enderecoRepository = enderecoRepository;
    }

    @Transactional
    public PessoaResponseDTO criarPessoa(PessoaRequestDTO pessoaRequestDTO) {
        boolean exists = pessoaRepository.existsByNomeAndSobrenome(pessoaRequestDTO.getNome(), pessoaRequestDTO.getSobrenome());
        if (exists) {
            throw new PessoaAlreadyExistsException("Erro ao cadastrar! Um registro de pessoa com nome " + pessoaRequestDTO.getNome() + " e sobrenome " + pessoaRequestDTO.getSobrenome() + " já existe.");
        }

        PessoaModel pessoaModel = PessoaMapperDTO.INSTANCE.pessoaRequestDTOtoPessoaModel(pessoaRequestDTO);
        pessoaRepository.save(pessoaModel);
        return PessoaMapperDTO.INSTANCE.pessoaModelToPessoaDTO(pessoaModel);
    }

    public List<PessoaResponseDTO> listarPessoas() {
        List<PessoaModel> pessoas = pessoaRepository.findAll();
        return pessoas.stream().map(PessoaMapperDTO.INSTANCE::pessoaModelToPessoaDTO).collect(Collectors.toList());
    }

    public PessoaResponseDTO listarPessoaPorId(Integer id) {
        if (id == null || id <= 0) {
            throw new PessoaNotFoundException("O ID é obrigatório e deve ser um número positivo.");
        }
        PessoaModel pessoaModel = pessoaRepository.findById(id)
                .orElseThrow(() -> new PessoaNotFoundException("Busca confere que o registro de pessoa com ID " + id + " não foi encontrado."));
        return PessoaMapperDTO.INSTANCE.pessoaModelToPessoaDTO(pessoaModel);
    }

    @Transactional
    public PessoaResponseDTO atualizarPessoa(Integer id, PessoaRequestDTO pessoaRequestDTO) {
        PessoaModel pessoaModel = pessoaRepository.findById(id).orElseThrow(() -> new PessoaNotFoundException("Não é possível atualizar o registro, pois o registro de pessoa com ID " + id + " não foi encontrado."));
        pessoaModel.setNome(pessoaRequestDTO.getNome());
        pessoaModel.setSobrenome(pessoaRequestDTO.getSobrenome());
        pessoaModel.setEmail(pessoaRequestDTO.getEmail());
        pessoaModel.setIdade(pessoaRequestDTO.getIdade());
        pessoaRepository.save(pessoaModel);
        return PessoaMapperDTO.INSTANCE.pessoaModelToPessoaDTO(pessoaModel);
    }

    @Transactional
    public void deletarPessoa(Integer id) {
        PessoaModel pessoaModel = pessoaRepository.findById(id).orElseThrow(() -> new PessoaNotFoundException("Exclusão não sucedida, pois o registro de pessoa com ID " + id + " não foi encontrado."));
        pessoaRepository.delete(pessoaModel);
    }

    public ResponseEntity<Void> vincularEndereco(VincularEnderecoPessoaDTO vincularEnderecoPessoaDTO) {
        PessoaModel pessoaModel = pessoaRepository.findById(vincularEnderecoPessoaDTO.getId_pessoa()).orElseThrow(PessoaNotFoundException::new);
        EnderecoModel enderecoModel = enderecoRepository.findById(vincularEnderecoPessoaDTO.getId_endereco()).orElseThrow(EnderecoNotFoundException::new);
        enderecoModel.setPessoa(pessoaModel);
        enderecoRepository.save(enderecoModel);
        return null;
    }
}
