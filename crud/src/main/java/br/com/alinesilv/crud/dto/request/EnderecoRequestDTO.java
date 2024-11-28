package br.com.alinesilv.crud.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
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
    @Size(min = 3, max = 50, message = "Por favor, revise os dados do campo sobrenome e preencha-o corretamente")
    private String rua;
    @NotBlank(message = "Por favor, preencha o campo numero.")
    @Pattern(regexp = "\\d+", message = "O campo numero deve conter apenas números inteiros.")
    private  String numero;
    @NotBlank(message = "Por favor, preencha o campo bairro.")
    @Size(min = 3, max = 50, message = "Por favor, revise os dados do campo sobrenome e preencha-o corretamente")
    private String bairro;
    @NotBlank(message = "Por favor, preencha o campo cep.")
    @Pattern(regexp = "\\d{8}", message = "O campo cep deve conter exatamente 8 números.")
    private String cep;
    @NotNull(message = "Por favor, preencha o campo cidade.")
    private Integer id_cidade;
    @NotNull(message = "Por favor, preencha o campo estado.")
    private Integer id_estado;


}
