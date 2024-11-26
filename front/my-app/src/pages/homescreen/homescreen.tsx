import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PopupLogout from '../../components/homescreen/manage/popuplogout/popuplogout'; 
import CardHome from '../../components/homescreen/homescreencard/homescreencard';
import { HeaderContainer, Logo, UserGreeting, BodyContainer, GeneralContainer, UserContainer, ExitIcon, UserIcon, DropdownMenu, DropdownItem, DropdownItemSelected, Headerdrop } from '../../pages/homescreen/homescreenstyles';


const HomeScreen: React.FC = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <GeneralContainer>
      <HeaderContainer>
        <Logo><span>Gerenciador</span>App</Logo>
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
                    <DropdownItem onClick={() => navigate('/screenaddress')}>Endereços</DropdownItem>
                    <DropdownItemSelected onClick={() => navigate('/homescreen')}>Home</DropdownItemSelected>
                  </DropdownMenu>
                )}
      </Headerdrop>
    
      <BodyContainer>
        <CardHome/>
      </BodyContainer>
      {showLogout && <PopupLogout onClose={() => setShowLogout(false)} />}
    </GeneralContainer>
  );
};

export default HomeScreen;
