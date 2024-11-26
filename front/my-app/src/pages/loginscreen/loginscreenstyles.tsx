import styled from 'styled-components';
//#2a28ab - azul #602afa  - roxo

export const Container = styled.div`
  width:100%;
  display: flex;
  height: 100vh;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 800px) {
    flex-direction: column; 
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentLeft = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
 
`;


export const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
  background: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
`;

export const ContentRight = styled.div`
width:300px;
height:500px;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


export const Logo = styled.h1`
  display: flex;
  align-items: flex-end;
  height:auto;
  color: #602afa;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'JetBrains', sans-serif;
  span{
    color:black;
  }
  margin-top: 2rem;
  margin-left:10%;
`;
export const FormTop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 350px;
max-width: 400px;
`;

export const Title = styled.p`
  color: #602afa;
  font-weight:600;
  font-size: 36px;
  margin-bottom: 30px;
`;

export const Subtitle = styled.p`
  font-family: 'Public Sans', sans-serif;
  color: #1B1B1B;
  font-size: 16px;
  margin-bottom: 30px;
  text-align: center;
`;


export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  max-width: 400px;

  input {
    width: 200px;
    padding: 0.75rem;
    margin-bottom:24px;
    border: 1px solid #1B1B1B;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  input::placeholder {
    color: #666;
  }

  input:focus {
    border-color: #602afa; 
    outline: none; 
  }
`;

export const Input = styled.input``;

export const Button = styled.button`
  width: 200px;
  padding: 0.75rem;
  margin-bottom:24px;
  border: none;
  border-radius: 5px;
  background-color: #602afa;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #2a28ab;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const ForgotPassword = styled.p`
width: 200px;
display: flex;
justify-content: flex-end; 
color: #666;
font-size: 0.875rem;
`;


export const FooterText = styled.p`
  color: #666;
  font-size: 0.875rem;
`;

export const HelpText = styled.p`
  color: #666;
  font-size: 0.875rem;
  width: 100%;
  display: flex;
  justify-content: flex-end; 
`;

export const Link = styled.a`
  color: #602afa;
  text-decoration: none;
  cursor:pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Illustration = styled.img`
  flex:1;
  position:fixed;
  max-width: 50%;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    display: none;
   }
`;

export const SmallText = styled.p`
  font-family: 'Jet Brain Mono', sans-serif;
  margin-left:10%;
  margin-top: 1rem;
  color: #1B1B1B;
  font-size: 2rem;
  text-align: start;

  @media (max-width: 800px) {
    text-align: center;
   }
`;
