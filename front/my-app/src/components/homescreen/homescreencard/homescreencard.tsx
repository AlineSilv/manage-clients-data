import React, { useState } from 'react';
import {
  HomeScreenCard,
  SectionOne,
  ChartContainerOne,
  WindowChartOne,
  LabelWindowContainerOne,
  LabelWindowContainerTwo,
  LabelWindowContainerThree,
  BoxDescription,
  WindowChartTwo,
  WindowChartThree,
  ChartContainerTwo,
  ChartContainerThree,
  SectionTwo,
  SectionThree,
  IllustrationCardPeople,
  IllustrationCardAddress,
  IllustrationCardAdd,
  Dropdown,
  DropdownOptionList,
  DropdownOptionConfig,
  DropdownOptionAdd
} from "./homescreencardstyles";
import ModalAddressList from '../../../components/homescreen/manage/modallist/modaladdresslist/modaladdresslist';
import ModalReference from '../manage/modalconfig/modalpeopleconfig/modalreference';
import ModalAddressConfig from '../../../components/homescreen/manage/modalconfig/modaladdressconfig/modaladdressconfig';
import ModalContact from '../manage/modaladd/modalpeopleadd/modalcontact';
import ModalAddressAdd from '../../../components/homescreen/manage/modaladd/modaladdressadd/modaladdressadd';

function CardHome() {
  const [showDropdown, setShowDropdown] = useState({ cardOne: false, cardTwo: false, cardThree:false });
  const [showModalPeopleList, setShowModalPeopleList] = useState(false);
  const [showModalAddressList, setShowModalAddressList] = useState(false);
  const [showModalReference, setShowModalReference] = useState(false);
  const [showModalAddressConfig, setShowModalAddressConfig] = useState(false);
  const [showModalContact, setShowModalContact] = useState(false);
  const [showModalAddressAdd, setShowModalAddressAdd] = useState(false);

  return (
    <HomeScreenCard>
      {/* Window Sem Destino
      <SectionOne>
        <ChartContainerOne
          onMouseEnter={() => setShowDropdown({ ...showDropdown, cardOne: true })}
          onMouseLeave={() => setShowDropdown({ ...showDropdown, cardOne: false })}
        >
          <WindowChartOne>
            <BoxDescription>
              <IllustrationCardPeople src="/assets/homescreen/illustrationcardpeople.png" alt="Illustration" />
            </BoxDescription>
            <LabelWindowContainerOne src="/assets/homescreen/iconlist.png"/>
            {showDropdown.cardOne && (
              <Dropdown>
                <DropdownOptionList onClick={() => setShowModalPeopleList(true)}>
                  Encontrar Pessoas
                </DropdownOptionList>
                <DropdownOptionList onClick={() => setShowModalAddressList(true)}>
                  Encontrar Endereços
                </DropdownOptionList>
              </Dropdown>
            )}
          </WindowChartOne>
        </ChartContainerOne>
      </SectionOne> */}

      <SectionTwo>
        <ChartContainerTwo
          onMouseEnter={() => setShowDropdown({ ...showDropdown, cardTwo: true })}
          onMouseLeave={() => setShowDropdown({ ...showDropdown, cardTwo: false })}
        >
          <WindowChartTwo>
            <BoxDescription>
              <IllustrationCardAddress src="/assets/homescreen/illustrationconfig.png" alt="Illustration" />
            </BoxDescription>
            <LabelWindowContainerTwo onClick={() => setShowModalReference(true)} src="/assets/homescreen/iconconfig.png"/>
           {/* 
            {showDropdown.cardTwo && (
              <Dropdown>
                <DropdownOptionConfig onClick={() => setShowModalPeopleConfig(true)}>
                  Gerenciar Pessoas
                </DropdownOptionConfig>
                
                <DropdownOptionConfig onClick={() => setShowModalAddressConfig(true)}>
                  Gerenciar Endereços
                </DropdownOptionConfig>
              </Dropdown>
            )}*/}
          </WindowChartTwo>
        </ChartContainerTwo>
      </SectionTwo>
      
      <SectionThree>
        <ChartContainerThree
          onMouseEnter={() => setShowDropdown({ ...showDropdown, cardThree: true })}
          onMouseLeave={() => setShowDropdown({ ...showDropdown, cardThree: false })}
        >
          <WindowChartThree>
            <BoxDescription>
              <IllustrationCardAdd src="/assets/homescreen/illustrationinfo.png" alt="Illustration" />
            </BoxDescription>
            <LabelWindowContainerThree onClick={() => setShowModalContact(true)} src="/assets/homescreen/iconmap.png"/>
            {/* DropDown Sem destino
            {showDropdown.cardThree && (
              <Dropdown>
                <DropdownOptionAdd onClick={() => setShowModalPeopleAdd(true)}>
                  Roadmap Para o Projeto
                </DropdownOptionAdd>
                <DropdownOptionAdd onClick={() => setShowModalAddressAdd(true)}>
                  LinkTree
                </DropdownOptionAdd>
              </Dropdown>
            )}*/} 
          </WindowChartThree>
        </ChartContainerThree>
      </SectionThree>
      {/** Modal sem Destino
      {showModalPeopleList && <ModalPeopleList onClose={() => setShowModalPeopleList(false)} />}
      {showModalAddressList && <ModalAddressList onClose={() => setShowModalAddressList(false)} />}
        */}
      {showModalReference && <ModalReference onClose={() => setShowModalReference(false)} />}
      {/** Modal Sem destino
      {showModalAddressConfig && <ModalAddressConfig onClose={() => setShowModalAddressConfig(false)} />}
      */}
      {showModalContact && <ModalContact onClose={() => setShowModalContact(false)} />}
      {/** Modal Sem Destino
      {showModalAddressAdd && <ModalAddressAdd onClose={() => setShowModalAddressAdd(false)} />}
      */}
    </HomeScreenCard>
  );
}

export default CardHome;
