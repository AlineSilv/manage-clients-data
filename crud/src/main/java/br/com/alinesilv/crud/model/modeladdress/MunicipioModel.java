package br.com.alinesilv.crud.model.modeladdress;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "MUNICIPIOS")
public class MunicipioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "municipios_seq")
    @SequenceGenerator(name = "municipios_seq", sequenceName = "MUNICIPIOS_SEQ", allocationSize = 1)
    private Long id;

    @Column(nullable = false, length = 255)
    private String nome;

    @ManyToOne
    @JoinColumn(name = "estado_codigo_uf", nullable = false)
    private EstadoModel estado;
}
