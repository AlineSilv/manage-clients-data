import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TableContainer, 
  TableRow, 
  TableHeader, 
  TableCell, 
  EditButton, 
  DeleteButton, 
  EditIconTable, 
  DeleteIconTable, 
  BoxIcon, 
  EyeOpenIcon, 
  TableHeaderNome,
  TableHeaderSobrenome,
  TableCellNome, 
  TableHeaderBox,
  TableHeaderEdit,
  TableHeaderDelete,
  TableCellBox,
  TableCellButton

} from './homescreentableaddressstyles';

interface Address {
  id: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  complemento: string;
  cep: string;
}

interface TableProps {
  onEdit: (address: Address) => void;
  onDelete: (address: Address) => void;
}

const Table: React.FC<TableProps> = ({ onEdit, onDelete }) => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    const fetchAddresses = async () => {
        const token = localStorage.getItem("address_token");
        try {
            const response = await axios.get('http://localhost:8080/enderecos', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            setAddresses(response.data);
        } catch (error) {
            console.error('Error fetching addresses', error);
        }
    };
    fetchAddresses();
}, []);


  return (
    <TableContainer>
      <thead>
        <TableRow>
          <TableHeaderBox><BoxIcon src="/assets/homescreen/iconboxtoselect.svg" /></TableHeaderBox>
          {/*<TableHeaderSobrenome>Cd. UF</TableHeaderSobrenome>*/}
          <TableHeaderNome>Estado</TableHeaderNome>
          {/*<TableHeaderSobrenome>Sg. Município</TableHeaderSobrenome>*/}
          <TableHeaderSobrenome>Município</TableHeaderSobrenome>
          <TableHeader>Bairro</TableHeader>
          <TableHeader>Rua</TableHeader>
          <TableHeader>CEP</TableHeader>
          <TableHeaderEdit>Editar</TableHeaderEdit>
          <TableHeaderDelete>Apagar</TableHeaderDelete>
        </TableRow>
      </thead>
      <tbody>
        {addresses.map((address) => (
          <TableRow key={address.id}>
            <TableCellBox><BoxIcon src="/assets/homescreen/iconboxtoselect.svg" /></TableCellBox>
            {/*<TableCell>{address.siglamunicipio}</TableCell>*/}
            <TableCellNome>{address.estado}</TableCellNome>
            <TableCell>{address.cidade}</TableCell>
            <TableCell>{address.bairro}</TableCell>
            <TableCell>{address.rua}</TableCell>
            <TableCell>{address.cep}</TableCell>
            <TableCellButton>
              <EditButton onClick={() => onEdit(address)}>
                <EditIconTable src="/assets/homescreen/editiconhomescreen.svg" />
              </EditButton>
            </TableCellButton>
            <TableCellButton>
              <DeleteButton onClick={() => onDelete(address)}>
                <DeleteIconTable src="/assets/homescreen/deleteiconhomescreen.svg" />
              </DeleteButton>
            </TableCellButton>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
