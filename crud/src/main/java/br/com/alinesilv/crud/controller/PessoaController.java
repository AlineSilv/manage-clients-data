package br.com.alinesilv.crud.controller;

import br.com.alinesilv.crud.dto.request.PessoaRequestDTO;
import br.com.alinesilv.crud.dto.request.VincularEnderecoPessoaDTO;
import br.com.alinesilv.crud.dto.response.PessoaResponseDTO;
import br.com.alinesilv.crud.service.PessoaService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/pessoas")
@Validated
public class PessoaController {

    private final PessoaService pessoaService;

    public PessoaController(PessoaService pessoaService) {
        this.pessoaService = pessoaService;
    }

    @PostMapping
    public ResponseEntity<PessoaResponseDTO>criarPessoa(@Valid @RequestBody PessoaRequestDTO pessoaRequestDTO){
    PessoaResponseDTO pessoaResponseDTO = pessoaService.criarPessoa(pessoaRequestDTO);
    return ResponseEntity.ok().body(pessoaResponseDTO);
    }

    @PatchMapping
    public ResponseEntity<Void>vincularEnderecoPessoa(@RequestBody VincularEnderecoPessoaDTO vincularEnderecoPessoaDTO){
        return pessoaService.vincularEndereco(vincularEnderecoPessoaDTO);
    }

    @GetMapping
    public ResponseEntity<List<PessoaResponseDTO>>listarPessoas(){
        List<PessoaResponseDTO> pessoas = pessoaService.listarPessoas();
        return ResponseEntity.ok().body(pessoas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PessoaResponseDTO> buscarPessoaPorId(@Valid @PathVariable Integer id){
        PessoaResponseDTO pessoaResponseDTO = pessoaService.listarPessoaPorId(id);
        return ResponseEntity.ok().body(pessoaResponseDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PessoaResponseDTO> atualizarPessoa(@PathVariable Integer id,@Valid  @RequestBody PessoaRequestDTO pessoaRequestDTO){
        PessoaResponseDTO pessoaResponseDTO = pessoaService.atualizarPessoa(id, pessoaRequestDTO);
        return ResponseEntity.ok().body(pessoaResponseDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPessoa(@PathVariable Integer id){
        pessoaService.deletarPessoa(id);
        return ResponseEntity.noContent().build();
    }
}
