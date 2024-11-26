package br.com.alinesilv.crud.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EnderecoRequestDTO {
    @NotBlank(message = "Por favor, preencha o campo rua.")
    private String rua;
    @NotBlank(message = "Por favor, preencha o campo numero.")
    private  String numero;
    @NotBlank(message = "Por favor, preencha o campo bairro.")
    private String bairro;
    @NotBlank(message = "Por favor, preencha o campo cep.")
    private String cep;
    @NotNull(message = "Por favor, preencha o campo cidade.")
    private Integer id_cidade;
    @NotNull(message = "Por favor, preencha o campo estado.")
    private Integer id_estado;


}
