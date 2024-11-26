package br.com.alinesilv.crud.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VincularEnderecoPessoaDTO {
    private Integer id_pessoa;
    private Integer id_endereco;
}
