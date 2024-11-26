package br.com.alinesilv.crud.repository;
import br.com.alinesilv.crud.model.modeladdress.EstadoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EstadoRepository  extends JpaRepository<EstadoModel, Integer> {
}
