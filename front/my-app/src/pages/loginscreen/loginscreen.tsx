import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  LeftSide,
  ContentLeft,
  RightSide,
  ContentRight,
  Logo,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
  Title,
  Subtitle,
  FooterText,
  Link,
  Illustration,
  SmallText,
  ForgotPassword,
  HelpText,
  FormTop
} from './loginscreenstyles';
import ModalSenha from '../../components/homescreen/manage/modallist/modalpeoplelist/modalsenha';
import ModalContact from '../../components/homescreen/manage/modaladd/modalpeopleadd/modalcontact';
import ModalReference from '../../components/homescreen/manage/modalconfig/modalpeopleconfig/modalreference';
import { fakeAuth } from '../../services/loginscreenservice/authService'; 

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [showModalSenha, setShowModalSenha] = useState(false);
  const [showModalReference, setShowModalReference] = useState(false);
  const [showModalContact, setShowModalContact] = useState(false);

  const handleLogin = async () => {
    try {
      const isAuthenticated = await fakeAuth(username, password);
      
      if (isAuthenticated) {
        // Simula o armazenamento de um token
        localStorage.setItem("emcash_token", "fake_token"); 
        navigate('/homescreen');
      } else {
        setError('Usuário e/ou senha incorretos.');
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setError('Erro ao tentar autenticar.');
    }
  };

  return (
    <Container>
      <LeftSide>
        <Logo><span>NEWTHINKERS</span>2024</Logo>
        <ContentLeft>
          <Illustration src="/assets/loginscreen/illustrationloginscreen.png" alt="Illustration" />
        </ContentLeft>
      </LeftSide>
      <RightSide>
        <ContentRight>
          <FormTop>
            <Title>Seja bem-vindo!</Title>
            <Subtitle>Insira os dados nos campos abaixo para acessar a conta.</Subtitle>
          </FormTop>
          <LoginForm>
            <Input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ForgotPassword>
              <Link onClick={() => setShowModalSenha(true)}><p>Esqueci minha senha</p></Link>
            </ForgotPassword>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button onClick={handleLogin}>Entrar</Button>
            <FooterText>
            <p> Alguma dúvida? <Link onClick={() => setShowModalContact(true)}>Contacte</Link></p>
            </FooterText>
          </LoginForm>
        </ContentRight>
        <HelpText>
          <Link onClick={() => setShowModalReference(true)}><p>Mais Informações</p></Link>
        </HelpText>
      </RightSide>
      {showModalSenha && <ModalSenha onClose={() => setShowModalSenha(false)} />}
      {showModalReference && <ModalReference onClose={() => setShowModalReference(false)} />}
      {showModalContact && <ModalContact onClose={() => setShowModalContact(false)} />}
    </Container>
  );
};

export default LoginScreen;
