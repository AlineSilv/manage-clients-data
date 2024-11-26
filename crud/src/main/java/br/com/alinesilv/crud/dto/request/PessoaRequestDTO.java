package br.com.alinesilv.crud.dto.request;

import jakarta.validation.constraints.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PessoaRequestDTO {
    @NotBlank(message = "Por favor, preencha o campo nome.")
    @Pattern(regexp = "^[a-zA-Z\\s]*$", message = "O nome deve conter apenas letras e espaços.")
    @Size(min = 3, max = 50, message = "Por favor, revise os dados do campo nome e preencha-o corretamente")
    private String nome;
    @NotBlank(message = "Por favor, preencha o campo sobrenome.")
    @Pattern(regexp = "^[a-zA-Z\\s]*$", message = "O sobrenome deve conter apenas letras e espaços.")
    @Size(min = 3, max = 50, message = "Por favor, revise os dados do campo sobrenome e preencha-o corretamente")
    private String sobrenome;
    @NotNull(message = "Por favor, preencha o campo idade.")
    @Digits(integer = 3, fraction = 0, message = "A idade deve conter apenas números inteiros.")
    @Min(value = 6, message = "A idade deve ser maior que 5.")
    @Max(value = 99, message = "A idade deve ser menor que 100.")
    private Integer idade;
    @NotBlank(message = "Por favor, insira seu e-mail no campo correspondente.")
    @Email(message = "Por favor insira um e-mail válido.")
    private String email;
}
