package br.com.alinesilv.crud.mapper;

import br.com.alinesilv.crud.dto.request.PessoaRequestDTO;
import br.com.alinesilv.crud.dto.response.EnderecoResponseDTO;
import br.com.alinesilv.crud.dto.response.PessoaResponseDTO;
import br.com.alinesilv.crud.model.modeladdress.EnderecoModel;
import br.com.alinesilv.crud.model.modelpeople.PessoaModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;

@Component
@Mapper(componentModel = "spring")
public interface PessoaMapperDTO {
    PessoaMapperDTO INSTANCE = Mappers.getMapper(PessoaMapperDTO.class);

    PessoaModel pessoaRequestDTOtoPessoaModel(PessoaRequestDTO entity);
    @Mapping(target ="enderecos", expression = "java(getEnderecos(entity))")
    PessoaResponseDTO pessoaModelToPessoaDTO(PessoaModel entity);


    default List<EnderecoResponseDTO> getEnderecos(PessoaModel entity){
        List<EnderecoModel> enderecos = entity.getEndereco();
        if(enderecos == null){
            return Collections.emptyList();
        }
        return enderecos.stream().map(enderecoModel -> EnderecoResponseDTO.builder()
                .id(enderecoModel.getId())
                .cep(enderecoModel.getCep())
                .rua(enderecoModel.getRua())
                .bairro(enderecoModel.getBairro())
                .estado(enderecoModel.getEstado().getNome())
                .cidade(enderecoModel.getCidade().getNome())
                .numero(enderecoModel.getNumero())
                .build()
        ).toList();
    }


}
