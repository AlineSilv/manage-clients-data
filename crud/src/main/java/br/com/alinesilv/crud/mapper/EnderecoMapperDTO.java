package br.com.alinesilv.crud.mapper;

import br.com.alinesilv.crud.dto.request.EnderecoRequestDTO;
import br.com.alinesilv.crud.dto.response.EnderecoResponseDTO;
import br.com.alinesilv.crud.model.modeladdress.EnderecoModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface EnderecoMapperDTO {
    EnderecoMapperDTO INSTANCE = Mappers.getMapper(EnderecoMapperDTO.class);
    @Mapping(target = "cidade.id", source = "id_cidade")
    @Mapping(target = "estado.codigo_uf", source = "id_estado")
    EnderecoModel enderecoResquestDTOToEnderecoModel(EnderecoRequestDTO entity);
    @Mapping(target = "cidade", source = "cidade.id")
    @Mapping(target = "estado", source = "estado.codigo_uf")
    EnderecoResponseDTO enderecoModelToEnderecoResponseDTO(EnderecoModel entity);
    @Mapping(target = "cidade", expression = "java(nomeCidade(enderecoModel))")
    @Mapping(target = "estado", expression = "java(nomeEstado(enderecoModel))")
    EnderecoResponseDTO enderecoModelToEnderecoDTO(EnderecoModel enderecoModel);

    default String nomeCidade(EnderecoModel enderecoModel){
        return enderecoModel.getCidade().getNome();
    }
    default String nomeEstado(EnderecoModel enderecoModel){
        return enderecoModel.getEstado().getNome();
    }
}
