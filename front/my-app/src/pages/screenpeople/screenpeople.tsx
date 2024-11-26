import React, { useState } from 'react';
import HeaderScreenPeople from '../../components/screenpeople/headerscreenpeople/headerscreenpeople';
import TablePeople from '../../components/screenpeople/managescreenpeople/homescreentablepeople/homescreentablepeople';
import ModalAddNewPeople from '../../components/screenpeople/managescreenpeople/modaladdnewpeople/modaladdnewpeople';
import ModalEditPeople from '../../components/screenpeople/managescreenpeople/modaleditpeople/modaleditpeople';
import PopupDeletePeople from '../../components/screenpeople/managescreenpeople/popupdeletepeople/popupdeletepeople';
import { HomeContainer } from './screenpeoplestyles';

const ScreenPeople: React.FC = () => {
  const [showAddNewPeople, setShowAddNewPeople] = useState(false);
  const [showEditPeople, setShowEditPeople] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState<any>(null);

  return (
    <HomeContainer>
      <HeaderScreenPeople onAddNew={() => setShowAddNewPeople(true)} />
      <TablePeople
        onEdit={(people: any) => {
          setSelectedPeople(people);
          setShowEditPeople(true);
        }}
        onDelete={(people: any) => {
          setSelectedPeople(people);
          setShowDelete(true);
        }}
      />
      {showAddNewPeople && <ModalAddNewPeople onClose={() => setShowAddNewPeople(false)} />}
      {showEditPeople && (
        <ModalEditPeople 
          onClose={() => setShowEditPeople(false)} 
          people={selectedPeople} 
        />
      )}
       {showDelete && (
        <PopupDeletePeople
          people={selectedPeople}
          onClose={() => setShowDelete(false)}
        />
      )}
    </HomeContainer>
  );
};

export default ScreenPeople;
