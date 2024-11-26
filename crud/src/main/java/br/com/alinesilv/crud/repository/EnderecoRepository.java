package br.com.alinesilv.crud.repository;

import br.com.alinesilv.crud.model.modeladdress.EnderecoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EnderecoRepository extends JpaRepository<EnderecoModel, Integer> {
    List<EnderecoModel> findByEstadoNomeContainingOrCidadeNomeContainingOrBairroContainingOrPessoaNomeContaining(
            String nome, String cidadeNome, String bairro, String pessoaNome);
}
