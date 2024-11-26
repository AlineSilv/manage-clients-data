import styled from 'styled-components';
//#2a28ab - azul #602afa  - roxo

export const ModalContainer = styled.div`
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

export const ModalContent = styled.div`
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 400px;
`;

export const ModalHeader = styled.h2`
  font-family: 'Manrope', sans-serif;
  padding-left:10%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 32px;
`;

export const ModalBody = styled.div`
  width:350px;
  height:430px;
  display: flex;
  padding-left:5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalFooter = styled.div`
  width:350px;
  height:44px;
  margin-top:32px;
  margin-bottom:32px;
  display: flex;
  justify-content: flex-end;
`;

export const FormGroup = styled.div`
  position: relative;
  padding-top: 1rem;
`;

export const Label = styled.label`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 0.875rem;
  color: #666;
  background-color: white;
  padding: 0 0.25rem;
  transition: all 0.2s ease;
  pointer-events: none;

  &:focus + &,
  &:not(:placeholder-shown) + & {
    top: -0.75rem;
    left: 0.75rem;
    font-size: 0.75rem;
  }
`;

export const Input = styled.input`
width:300px;
height:35px;
padding: 0.5rem;
margin-bottom:15px;
border: 1px solid #1B1B1B;
border-radius: 12px;
font-size: 1rem;
transition: border-color 0.3s ease;
}

input::placeholder {
color: #666;
}

input:focus {
border-color: #602afa; 
outline: none;
}
`;

export const Select = styled.select`
width:300px;
height:35px;
padding: 0.5rem;
margin-bottom:15px;
border: 1px solid #1B1B1B;
border-radius: 8px;
font-size: 1rem;
transition: border-color 0.3s ease;
}

option::placeholder {
color: #666;
}

option:focus {
border-color: #602afa; 
outline: none;
}
`

export const Button = styled.button`
width:150px;
height:44px;
border: none;
border-radius: 5px;
background-color: #602afa;
color: white;
cursor: pointer;

&:hover {
  background-color: #2a28ab;
}
`;

export const ButtonCancel = styled.button`
margin-right:20px;
padding: 0.5rem 1rem;
border: none;
background: none;
color: #602afa;
cursor: pointer;

&:hover {
  background-color: #eeee;
  border-radius: 5px;
}
`;

export const ErrorMessage = styled.span`
  height:10px;
  width:100%;
  margin-left:10%;
  color: red;
  font-size: 0.875rem;
  margin-bottom:4px;;
`;
