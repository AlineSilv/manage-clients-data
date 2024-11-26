package br.com.alinesilv.crud.repository;

import br.com.alinesilv.crud.model.modeladdress.EstadoModel;
import br.com.alinesilv.crud.model.modeladdress.MunicipioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MunicipioRepository extends JpaRepository<MunicipioModel, Integer> {
    List<MunicipioModel> findByEstado(EstadoModel estado);
}
