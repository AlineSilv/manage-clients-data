package br.com.alinesilv.crud.model.modelpeople;

import br.com.alinesilv.crud.model.modeladdress.EnderecoModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "PESSOA", uniqueConstraints = @UniqueConstraint(columnNames = {"nome", "sobrenome"}))
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PessoaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pessoa_seq")
    @SequenceGenerator(name = "pessoa_seq", sequenceName = "PESSOA_SEQ", allocationSize = 1)
    private Integer id;
    private String nome;
    private String sobrenome;
    private Integer idade;
    private String email;
    private String senha;
    private Boolean status;

    @OneToMany(mappedBy = "pessoa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<EnderecoModel> endereco;
}
