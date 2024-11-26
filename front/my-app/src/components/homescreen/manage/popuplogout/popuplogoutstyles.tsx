import styled from 'styled-components';
//#2a28ab - azul #602afa  - roxo

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  height:200px;
  max-width: 80%;

`;

export const PopupHeader = styled.h2`
margin-left:10%;
font-family: 'Manrope', sans-serif;
width:100%;
justify-content: flex-start;
font-size: 20px;
margin-bottom: 32px;
`;

export const PopupBody = styled.p`
margin-left:10%;
  margin-bottom: 20px;
`;

export const PopupFooter = styled.div`
  display: flex;
  width:350px;
  display: flex;
  justify-content: flex-end;
  align-items:flex-end;
  margin-top:40px;
`;

export const Button = styled.button`
width:85px;
border: none;
height:44px;
border-radius: 5px;
background-color: #602afa;
color: white;
cursor: pointer;

&:hover {
  background-color: #2a28ab;
}
`;

export const ButtonCancel = styled(Button)`
width:85px;
height:44px;
margin-right:20px;
border: none;
background: none;
color: #602afa;
cursor: pointer;

&:hover {
  background-color: #eeee;
  border-radius: 5px;
}
`;
