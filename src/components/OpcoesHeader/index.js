import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../Logo/index.js"; 
import { Link } from "react-scroll";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(225, 85, 10, ${(props) => props.opacity}); // Cor de fundo #E1550A com opacidade
  transition: background-color 0.5s ease;
  padding: 15px 20px;
  z-index: 10;
  display: flex;
  justify-content: space-around; 
  align-items: center;
  height: 60px; 
`;

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  min-width: 120px;
  color: #fff; /* Cor branca para o texto, pode mudar se quiser */
  height: 100%; /* Ocupa 100% da altura do contêiner */

  @media (max-width: 768px) {
    font-size: 14px;
    min-width: 90px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    min-width: 70px;
  }
`;

const Opcoes = styled.ul`
  display: flex;
  height: 100%; /* Garante que as opções ocupem toda a altura do Nav */
  align-items: center; /* Centraliza verticalmente as opções */
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const textoOpcoes = [
    { id: "home", label: "Home" },
    { id: "sobre", label: "Sobre nós" },
    { id: "feedback", label: "Feedback" },
    { id: "categoria", label: "Categoria" },
    { id: "home", label: "Download" }
  ];

function OpcoesHeader() {
  const [scrollY, setScrollY] = useState(0);

  // Função para rastrear a rolagem da página
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = scrollY > 100 ? 0.8 : 0.5;

  return (
    <Nav opacity={opacity}>
      <Logo />
      <Opcoes>
        {textoOpcoes.map((item) => (
          <Opcao key={item.id}>
            <Link
              to={item.id}
              smooth={true} // Scroll suave
              duration={500} // Duração do scroll em ms
            >
              {item.label}
            </Link>
          </Opcao>
        ))}
      </Opcoes>
    </Nav>
  );
}

export default OpcoesHeader;
