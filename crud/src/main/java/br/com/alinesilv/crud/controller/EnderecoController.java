package br.com.alinesilv.crud.controller;

import br.com.alinesilv.crud.dto.request.EnderecoRequestDTO;
import br.com.alinesilv.crud.dto.request.FilterEnderecoDTO;
import br.com.alinesilv.crud.dto.response.EnderecoResponseDTO;
import br.com.alinesilv.crud.model.modeladdress.EstadoModel;
import br.com.alinesilv.crud.model.modeladdress.MunicipioModel;
import br.com.alinesilv.crud.service.EnderecoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enderecos")
public class EnderecoController {
    private final EnderecoService enderecoService;

    public EnderecoController(EnderecoService enderecoService) {
        this.enderecoService = enderecoService;
    }

    @PostMapping
    public ResponseEntity<EnderecoResponseDTO> criarEndereco(@Valid @RequestBody EnderecoRequestDTO enderecoRequestDTO){
        EnderecoResponseDTO enderecoResponse = enderecoService.criarEndereco(enderecoRequestDTO);
        return ResponseEntity.ok().body(enderecoResponse);
    }

    @GetMapping
    public ResponseEntity<List<EnderecoResponseDTO>> listarEnderecos(){
        List<EnderecoResponseDTO> enderecos = enderecoService.listarEnderecos();
        return ResponseEntity.ok().body(enderecos);
    }

    @PostMapping("/filtrar")
    public ResponseEntity<List<EnderecoResponseDTO>> filtrarEnderecos(@RequestBody FilterEnderecoDTO filterEnderecoDTO){
        List<EnderecoResponseDTO> enderecos = enderecoService.filtrarEnderecos(filterEnderecoDTO);
        return ResponseEntity.ok().body(enderecos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnderecoResponseDTO> buscarEnderecoPorId(@Valid @PathVariable Integer id){
        EnderecoResponseDTO enderecoResponseDTO = enderecoService.listarEnderecoPorId(id);
        return ResponseEntity.ok().body(enderecoResponseDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnderecoResponseDTO> atualizarEndereco(@PathVariable Integer id, @Valid @RequestBody EnderecoRequestDTO enderecoRequestDTO){
        EnderecoResponseDTO enderecoResponseDTO = enderecoService.atualizarEndereco(id, enderecoRequestDTO);
        return ResponseEntity.ok().body(enderecoResponseDTO);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarEndereco(@PathVariable Integer id){
        enderecoService.deletarEndereco(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/estados")
    public ResponseEntity<List<EstadoModel>> GetEstados(){
        List<EstadoModel> estados = enderecoService.getEstados();
        return ResponseEntity.ok().body(estados);
    }

    @GetMapping("/municipios/{estadoId}")
    public ResponseEntity<List<MunicipioModel>> buscarCidadesPorEstado(@PathVariable EstadoModel estadoId) {
        List<MunicipioModel> cidades = enderecoService.buscarCidadesPorEstado(estadoId);
        return ResponseEntity.ok(cidades);
    }
}
