import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PopupLogout from '../../../components/homescreen/manage/popuplogout/popuplogout';
import { HeaderContainer, Logo, UserGreeting, BodyContainer, GeneralContainer, UserContainer, ExitIcon, UserIcon, DropdownMenu, DropdownItem, DropdownItemSelected, LabelTitle, AddNewButton, Headerdrop } from '../../../pages/homescreen/homescreenstyles';

interface HeaderScreenAddressProps {
  onAddNew: () => void;
}

const HeaderScreenAddress: React.FC<HeaderScreenAddressProps> = ({ onAddNew }) => {
  const [showLogout, setShowLogout] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <GeneralContainer>
      <HeaderContainer>
        <Logo><span>Gerenciador</span>Endereços</Logo>
        <UserContainer onMouseEnter={handleMouseEnter}>
          <UserIcon src="/assets/homescreen/usercircle.svg"/>
          <UserGreeting>Olá, Squader</UserGreeting>
          <ExitIcon src="/assets/homescreen/exiticonhomescreen.svg" data-testid="exit-icon" onClick={() => setShowLogout(true)} />
        </UserContainer>
      </HeaderContainer>
      <Headerdrop onMouseLeave={handleMouseLeave}>
        {showDropdown && (
                  <DropdownMenu>
                    <DropdownItem onClick={() => navigate('/screenpeople')}>Pessoas</DropdownItem>
                    <DropdownItemSelected onClick={() => navigate('/screenaddress')}>Endereços</DropdownItemSelected>
                    <DropdownItem onClick={() => navigate('/homescreen')}>Home</DropdownItem>
                  </DropdownMenu>
                )}
      </Headerdrop>
      <BodyContainer>
      <AddNewButton onClick={onAddNew}>Adicionar novo</AddNewButton>
      </BodyContainer>
      {showLogout && <PopupLogout onClose={() => setShowLogout(false)} />}
    </GeneralContainer>
  );
};

export default HeaderScreenAddress;
