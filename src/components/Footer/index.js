import React from 'react';
import styled from 'styled-components';
import email from '../../images/email-icon.png'
import instagram from '../../images/insta-icon.png'
import googleplay from '../../images/googlestore-icon.png'
import applestore from '../../images/apple-icon.png'


const FooterContainer = styled.footer`
  background-color: #e94c19;
  color: white;   
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;      
  font-size: 30px;
  font-family: "Borel", cursive;
  color: #fff;
  text-align: center;
  margin-bottom: 20px; 
`

const SubLogo = styled.strong`
    color: #25BA00;
`

const Copyright = styled.p`
  margin: 10px 0;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
`;

const Links = styled.div`
  margin-top: 15px;

  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 12px;
    font-family: "Montserrat", sans-serif;
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
      <LogoContainer>
            <p>Gourmet<SubLogo>On</SubLogo></p>
        </LogoContainer>
      <Copyright>
        © Copyright 2021 - GourmetOn - Todos os direitos reservados GourmetOn com Agência de Restaurantes Online S.A.
      </Copyright>
      <Links>
        <a href="#termos">Termos e condições de uso</a>
        <a href="#privacidade">Privacidade</a>
      </Links>
      <SocialIcons>
        <a href="mailto:gourmeton@hotmail.com"><img src={email} alt="Email" /></a>
        <a href="https://www.instagram.com/gourmeton"><img src={instagram} alt="Instagram" /></a>
        <a href="/path/to/google-play"><img src={googleplay} alt="Google Play" /></a>
        <a href="/path/to/app-store"><img src={applestore} alt="App Store" /></a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
