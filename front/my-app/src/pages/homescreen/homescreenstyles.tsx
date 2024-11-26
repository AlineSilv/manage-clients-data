import styled from 'styled-components';

export const GeneralContainer = styled.div`
width: 100%;
margin-bottom: 1.5rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 1, 1, 0.1);

  @media (max-width: 600px) {
    flex-direction: column; 
    justify-content:space-between;
  }
`;

export const Logo = styled.div`
  margin-left:10%;
  font-family: 'Manrope', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color:#602afa;

  span {
    color: black;
  }

  @media (max-width: 600px) {
    width:100%;
    align-items:flex-start;
    margin-bottom:1rem;
  }
`;

export const UserContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 600px) {
  align-items:flex-end;
  justify-content: flex-end;
  margin-bottom:1rem;
  width:100%;
}
`;

export const UserIcon = styled.img`
width:20px;
`;

export const UserGreeting = styled.div`
font-family: 'Public Sans', sans-serif;
padding-left:15px;
padding-right:20px;
font-size: 1rem;
color: #333;
`;

export const ExitIcon = styled.img`
padding-right:20px;
width:20px;
`;
export const BodyContainer = styled.div`
 margin-top: 1.5rem;
margin-left:10%;
display: flex;
aling-items:start;
align-items: center;
width:auto;
`;

export const LabelTitle = styled.p`
font-family: 'Manrope', sans-serif;
padding-right: 20px;
font-size: 1.5rem;
font-weight: bold;
`;

export const AddNewButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #602afa;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2a28ab;
  }
`;

export const Headerdrop = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-right:50px;
  margin-left:80%;
  position:fixed;
`;

export const DropdownMenu = styled.div`
  width:180px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius:12px;
  padding: 0.5rem;
`;

export const DropdownItem = styled.div`
  width:180px;
  padding: 0.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    border-radius:12px;
    width:150px;
    background-color: #f0f0f0;
  }
`;

export const DropdownItemSelected = styled.div`
  width:150px;
  border-radius:12px;
  background-color: #f6c3ff;
  padding: 0.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    border-radius:12px;
    width:150px;
    color:white;
  }
`;
