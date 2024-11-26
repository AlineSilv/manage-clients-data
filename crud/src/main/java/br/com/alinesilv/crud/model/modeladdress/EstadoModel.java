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
@Table(name = "ESTADO")

public class EstadoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "estado_seq")
    @SequenceGenerator(name = "estado_seq", sequenceName = "ESTADO_SEQ", allocationSize = 1)
    private Long codigo_uf;

    @Column(nullable = false, length = 255)
    private String nome;

    @Column(nullable = false, length = 10)
    private String uf;



}
