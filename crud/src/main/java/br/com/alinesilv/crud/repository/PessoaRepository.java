package br.com.alinesilv.crud.repository;

import br.com.alinesilv.crud.model.modelpeople.PessoaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaRepository extends JpaRepository<PessoaModel,Integer> {
    boolean existsByNomeAndSobrenome(String nome, String sobrenome);
}
