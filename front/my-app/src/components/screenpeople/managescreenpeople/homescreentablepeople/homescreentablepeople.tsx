import { useState } from 'react';
import { useListarPessoas } from '../../../../services/pessoaservice/pessoaService';
import PopupDeletePeople from '../popupdeletepeople/popupdeletepeople';
import { 
  TableContainer, 
  TableRow, 
  TableHeader, 
  TableCell, 
  EditButton, 
  DeleteButton, 
  EditIconTable, 
  DeleteIconTable, 
  BoxIcon, 
  TableHeaderNome,
  TableHeaderSobrenome,
  TableCellNome, 
  TableHeaderBox,
  TableHeaderEdit,
  TableHeaderDelete,
  TableCellBox,
  TableCellButton,
  AssingAddressButton,
  AssingAddressIconTable 
} from './homescreentablepeoplestyles';

interface People {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  idade: number;
}

interface TableProps {
  onEdit: (people: People) => void;
  onDelete: (people: People) => void;
}

const TablePeople: React.FC<TableProps> = ({ onEdit }) => {
  const { data: people, isLoading, isError } = useListarPessoas();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState<People | null>(null);

  const handleOpenPopup = (people: People) => {
    setSelectedPeople(people);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedPeople(null);
    setShowPopup(false);
  };

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar pessoas.</div>;

  return (
    <TableContainer>
      <thead>
        <TableRow>
          <TableHeaderBox><BoxIcon src="/assets/homescreen/iconboxtoselect.svg" /></TableHeaderBox>
          <TableHeaderNome>Nome</TableHeaderNome>
          <TableHeaderSobrenome>Sobrenome</TableHeaderSobrenome>
          <TableHeader>E-mail</TableHeader>
          <TableHeader>Idade</TableHeader>
          <TableHeaderEdit>Editar</TableHeaderEdit>
          <TableHeaderDelete>Apagar</TableHeaderDelete>
          <TableHeaderDelete>Vincular</TableHeaderDelete>
        </TableRow>
      </thead>
      <tbody>
        {people?.map((people) => (
          <TableRow key={people.id}>
            <TableCellBox><BoxIcon src="/assets/homescreen/iconboxtoselect.svg" /></TableCellBox>
            <TableCellNome>{people.nome}</TableCellNome>
            <TableCell>{people.sobrenome}</TableCell>
            <TableCell>{people.email}</TableCell>
            <TableCell>{people.idade}</TableCell>
            <TableCellButton>
              <EditButton onClick={() => onEdit(people)}>
                <EditIconTable src="/assets/homescreen/editiconhomescreen.svg" />
              </EditButton>
            </TableCellButton>
            <TableCellButton>
              <DeleteButton onClick={() => handleOpenPopup(people)}>
                <DeleteIconTable src="/assets/homescreen/deleteiconhomescreen.svg" />
              </DeleteButton>
            </TableCellButton>
            <TableCellButton>
              <AssingAddressButton>
                <AssingAddressIconTable src="/assets/homescreen/iconaddlocation.png" />
              </AssingAddressButton>
            </TableCellButton>
          </TableRow>
        ))}
      </tbody>
      {showPopup && selectedPeople && (
        <PopupDeletePeople
          onClose={handleClosePopup}
          people={selectedPeople}
        />
      )}
    </TableContainer>
  );
};

export default TablePeople;
