package br.com.alinesilv.crud.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PessoaResponseDTO {
    private Integer id;
    private String nome;
    private String sobrenome;
    private Integer idade;
    private String email;
    private List<EnderecoResponseDTO> enderecos;
}
