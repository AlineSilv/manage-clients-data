import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PopupLogout from '../../../components/homescreen/manage/popuplogout/popuplogout';
import { HeaderContainer, Logo, UserGreeting, BodyContainer, GeneralContainer, UserContainer, ExitIcon, UserIcon, DropdownMenu, DropdownItem, DropdownItemSelected, AddNewButton, LabelTitle, Headerdrop  } from '../../../pages/homescreen/homescreenstyles';

interface HeaderScreenPeopleProps {
  onAddNew: () => void;
}

const HeaderScreenPeople: React.FC<HeaderScreenPeopleProps> = ({ onAddNew }) => {
  const [showLogout, setShowLogout] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <GeneralContainer>
      <HeaderContainer>
        <Logo><span>Gerenciador</span>Pessoas</Logo>
        <UserContainer onMouseEnter={handleMouseEnter}>
          <UserIcon src="/assets/homescreen/usercircle.svg"/>
          <UserGreeting>Olá, Squader</UserGreeting>
          <ExitIcon src="/assets/homescreen/exiticonhomescreen.svg" data-testid="exit-icon" onClick={() => setShowLogout(true)} />
        </UserContainer>
      </HeaderContainer>
      <Headerdrop onMouseLeave={handleMouseLeave}>
        {showDropdown && (
                  <DropdownMenu>
                    <DropdownItemSelected onClick={() => navigate('/screenpeople')}>Pessoas</DropdownItemSelected>
                    <DropdownItem onClick={() => navigate('/screenaddress')}>Endereços</DropdownItem>
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

export default HeaderScreenPeople;
