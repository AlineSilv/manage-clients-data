package br.com.alinesilv.crud.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FilterEnderecoDTO {

   private String estadoNome;
   private String cidadeNome;
   private String bairro;
   private String pessoaNome;
}
