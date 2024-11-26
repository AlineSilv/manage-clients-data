import styled from 'styled-components';

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
  border-radius: 5px;
  width: 400px;
  padding: 20px;
`;

export const ModalHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

export const ModalBody = styled.div`
  margin-bottom: 16px;
  text-align: center;

`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonCancel = styled.button`
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

export const ContainerLink = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0;
  margin-bottom:5%;
  margin-left:4%;
  border-radius: 8px;
  width: 350px;
  padding: 10px;
`;

export const IconNotion = styled.img`
  width:30px;
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    width:35px;
  }
`;