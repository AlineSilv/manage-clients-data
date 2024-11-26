package br.com.alinesilv.crud.model.modeladdress;

import br.com.alinesilv.crud.model.modelpeople.PessoaModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "ENDERECO", uniqueConstraints = @UniqueConstraint(columnNames = {"rua", "numero", "bairro", "cep", "cidade", "estado"}))
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EnderecoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "endereco_seq")
    @SequenceGenerator(name = "endereco_seq", sequenceName = "ENDERECO_SEQ", allocationSize = 1)
    private Integer id;
    private String rua;
    private String numero;
    private String bairro;
    private String cep;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cidade_id", nullable = false)
    private MunicipioModel cidade;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "estado_id", nullable = false)
    private EstadoModel estado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pessoa_id", nullable = true)
    private PessoaModel pessoa;

}
