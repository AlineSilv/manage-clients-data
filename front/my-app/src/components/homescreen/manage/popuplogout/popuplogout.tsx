import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PopupContainer, PopupContent, PopupHeader, PopupBody, PopupFooter, Button, ButtonCancel } from './popuplogoutstyles';

interface PopupLogoutProps {
  onClose: () => void;
}

const PopupLogout: React.FC<PopupLogoutProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("emcash_token");
    navigate('/');
  };

  return (
    <PopupContainer>
      <PopupContent>
        <PopupHeader>Sair</PopupHeader>
        <PopupBody>Tem certeza que deseja sair?</PopupBody>
        <PopupFooter>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <Button onClick={handleLogout}>Sair</Button>
        </PopupFooter>
      </PopupContent>
    </PopupContainer>
  );
};

export default PopupLogout;
