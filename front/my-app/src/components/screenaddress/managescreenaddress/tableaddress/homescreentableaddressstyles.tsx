import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  max-width: 1200px;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableRow = styled.tr`
  max-width: 1170px;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 1rem;
  text-align: left;
  color:black;
  background-color: white;

  @media (max-width: 850px) {
   display:none;
   text-align: center;
  }
`;

export const TableHeaderNome = styled.th`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 1rem;
  text-align: left;
  color:black;
  background-color: white;
`;

export const TableHeaderSobrenome = styled.th`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 1rem;
  text-align: left;
  color:black;
  background-color: white;
`;

export const TableHeaderBox = styled.th`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 1rem;
  text-align: left;
  color:black;
  background-color: white;
`;

export const TableHeaderEdit = styled.th`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 1rem;
  text-align: left;
  color:black;
  background-color: white;
`;

export const TableHeaderDelete = styled.th`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 1rem;
  text-align: left;
  color:black;
  background-color: white;
`;

export const TableCell = styled.td`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  background-color: #EEEE;

  @media (max-width: 850px) {
    display:none;
    text-align: center;
   }
`;

export const TableCellNome = styled.td`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  background-color: #EEEE;
`;

export const TableCellBox = styled.td`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  background-color: #EEEE;
`;

export const TableCellButton = styled.td`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  background-color: #EEEE;
`;

export const EyeOpenIcon = styled.img`
  padding-left:10px;
  width:15px;
`;

export const BoxIcon = styled.img`
width:15px;
`;

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: red;
`;

export const EditIconTable = styled.img`
cursor: pointer;
`;

export const DeleteIconTable = styled.img`
cursor: pointer;
`;
