import styled from 'styled-components';

export const GeneralContainer = styled.div`
width: 100%;
margin-bottom: 1.5rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
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
margin-left:10%;
display: flex;
aling-items:start;
align-items: center;
`;

export const LabelTitle = styled.p`
font-family: 'Manrope', sans-serif;
padding:0px;
font-size: 1.5rem;
font-weight: bold;
`;

export const AddNewButton = styled.button`
  padding: 0.5rem 1rem;
  margin:0px;
  border: none;
  border-radius: 5px;
  background-color: #602afa;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2a28ab;
  }
`;


