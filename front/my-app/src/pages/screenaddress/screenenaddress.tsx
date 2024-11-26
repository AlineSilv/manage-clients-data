import React, { useState } from 'react';
import HeaderScreenAddress from '../../components/screenaddress/headerscreenaddress/headerscreenaddress';
import TableAddress from '../../components/screenaddress/managescreenaddress/tableaddress/homescreentableaddress';
import PopupLogout from '../../components/homescreen/manage/popuplogout/popuplogout'; 
import ModalAddNewAddress from '../../components/screenaddress/managescreenaddress/modaladdnewaddress/modaladdnewaddress';
import ModalEditAddress from '../../components/screenaddress/managescreenaddress/modaleditaddress/modaleditaddress';
import PopupDeleteAddress from '../../components/screenaddress/managescreenaddress/popupdeleteaddress/popupdeleteaddress';
import { HomeContainer } from './screenaddressstyles';


const ScreenAddress: React.FC = () => {
  const [showAddNewAddress, setShowAddNewAddress] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const [showDeleteAddress, setShowDeleteAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [showLogout, setShowLogout] = useState(false);
  
  return (
    <HomeContainer>
      <HeaderScreenAddress onAddNew={() => setShowAddNewAddress(true)} />
      <TableAddress
        onEdit={(address: any) => {
          setSelectedAddress(address);
          setShowEditAddress(true);
        }}
        onDelete={(address: any) => {
          setSelectedAddress(address);
          setShowDeleteAddress(true);
        }}
      />
      {showAddNewAddress && <ModalAddNewAddress onClose={() => setShowAddNewAddress(false)} />}
      {showEditAddress && <ModalEditAddress onClose={() => setShowEditAddress(false)} address={selectedAddress} />}
      {showLogout && <PopupLogout onClose={() => setShowLogout(false)} />}
      {showDeleteAddress && <PopupDeleteAddress address={selectedAddress} onClose={() => setShowDeleteAddress(false)} refreshAddresses={function (): void {
        throw new Error('Erro ao escuir registro.');
      } } />}
    </HomeContainer>
  );
};

export default ScreenAddress;