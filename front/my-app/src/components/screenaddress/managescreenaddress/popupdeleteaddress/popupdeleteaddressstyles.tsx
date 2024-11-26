import styled from 'styled-components';
//#2a28ab - azul #602afa  - roxo

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupContent = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 400px;
  height:230px;
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
width:350px;
margin-left:10%;
align-items:center;
justify-content: flex-start;
'Public Sans', sans-serif;
font-size: 16px;
text-align:left;


`;

export const PopupFooter = styled.div`
  width:350px;
  display: flex;
  justify-content: flex-end;
  align-items:flex-end;
  margin-top:32px;
  margin-bottom:32px;
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


export const ButtonCancel = styled.button`
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