import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TableContainer,
  TableRow,
  TableHeaderBox,
  TableHeaderNome,
  TableHeaderSobrenome,
  TableCellNome,
  TableCell,
  TableCellBox,
  TableCellButton,
  EditButton,
  EditIconTable,
  BoxIcon,
} from './managetablepeoplestyles';

interface People {
  id: string;
  nome: string;
  sobrenome: string;
}

const TableUser: React.FC<{ onAddNewAddress: () => void }> = ({ onAddNewAddress }) => {
  const [peoples, setPeoples] = useState<People[]>([]);

  useEffect(() => {
    const fetchPeoples = async () => {
      const token = localStorage.getItem('people_token');
      try {
        const response = await axios.get('/pessoa', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPeoples(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching peoples', error);
      }
    };

    fetchPeoples();
  }, []);

  return (
    <TableContainer>
      <thead>
        <TableRow>
          <TableHeaderBox><BoxIcon src="/assets/homescreen/iconboxtoselect.svg" /></TableHeaderBox>
          <TableHeaderNome>Nome</TableHeaderNome>
          <TableHeaderSobrenome>Sobrenome</TableHeaderSobrenome>
        </TableRow>
      </thead>
      <tbody>
        {peoples.map((people) => (
          <TableRow key={people.id}>
            <TableCellBox><BoxIcon src="/assets/homescreen/iconboxtoselect.svg" /></TableCellBox>
            <TableCellNome>{people.nome}</TableCellNome>
            <TableCell>{people.sobrenome}</TableCell>
            <TableCellButton>
              <EditButton onClick={onAddNewAddress}> {/* Chama a função passada como prop */}
                <EditIconTable src="/assets/homescreen/iconaddlocation.png" />
              </EditButton>
            </TableCellButton>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default TableUser;
