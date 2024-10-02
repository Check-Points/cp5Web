import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #e94c19;
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
`;

const Logo = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  display: inline-block;
  color: white;
`;

const Copyright = styled.p`
  margin: 10px 0;
  font-size: 12px;
`;

const Links = styled.div`
  margin-top: 15px;

  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 12px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;
  a {
    margin: 0 10px;
    display: inline-block;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo>GourmetOn</Logo>
      <Copyright>
        © Copyright 2021 - GourmetOn - Todos os direitos reservados GourmetOn com Agência de Restaurantes Online S.A.
      </Copyright>
      <Links>
        <a href="#termos">Termos e condições de uso</a>
        <a href="#privacidade">Privacidade</a>
      </Links>
      <SocialIcons>
        <a href="mailto:gourmeton@hotmail.com"><img src="/images/email-icon.png" alt="Email" /></a>
        <a href="https://www.instagram.com/gourmeton"><img src="/images/insta-icon.png" alt="Instagram" /></a>
        <a href="/path/to/google-play"><img src="/images/googlestore-icon.png" alt="Google Play" /></a>
        <a href="/path/to/app-store"><img src="/images/apple-icon.png" alt="App Store" /></a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
