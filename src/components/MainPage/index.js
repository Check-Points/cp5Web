import React from 'react';
import styled from 'styled-components';
import bg from '../../images/background.png'
import icon1 from '../../images/icon3.png'
import icon2 from '../../images/icon1.png'
import icon3 from '../../images/icon2.png'
import pratos from '../../images/food1.png'
import salada from '../../images/food2.png'
import doces from '../../images/food3.png'
import hamburger from '../../images/food4.png'

const MainContainer = styled.div`
  font-family: "Montserrat", sans-serif;
`

const HeroSection = styled.section`
  color: white;
  padding: 10rem 1.25rem;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  position: relative; /* Necessário para o Overlay e o Content */

  img { 
    width: 80px;
    height: 80px;
  }

  p {
    font-size: 1.2em;
    margin: 20px 0;
    color: #fff; /* Cor do texto */
    line-height: 1.4; 
    max-width: 900px; 
  }

  button {
    background-color: #41d07b;
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #369b66;
    }
  }
`

const Overlay = styled.div`
  position: absolute; /* Posiciona o overlay de forma absoluta */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Cor preta com opacidade de 50% */
  z-index: 1; /* Coloca o overlay acima da imagem de fundo */
`

const Content = styled.div`
  position: relative;
  z-index: 2;
`

const FeaturesSection = styled.section`
  background-color: #fff;
  text-align: center;
  padding: 40px 20px;

  h2 {
    font-family: "Margarine", sans-serif;
    font-size: 2em;
    margin-bottom: 20px;
    color: #849848;
  }

  .features {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    div {
      text-align: center;
      width: 30%;
    }

    img {
      width: 80px;
      height: 80px;
    }

    h3 {
      margin: 10px 0;
      font-size: 1.2em;
      color: #e94c19;
    }

    p {
      font-size: 0.9em;
      color: #444;
    }
  }
`;

const FunctionalitiesSection = styled.section`
  background-color: #fff;
  text-align: center;
  padding: 40px 20px;

  h2 {
    font-size: 1.5em;
    color: #e94c19;
    margin-bottom: 20px;
  }

  .images {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    div {
      text-align: center;
      width: 22%;
    }

    img {
    margin-top: 155px;
      width: 100%;
    }

    p {
      margin-top: 10px;
      font-size: 1em;
      font-weight: bold;
      color: #333;
    }
  }
`;

const TestimonialsSection = styled.section`
  background-color: #849848;
  color: white;
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 1.8em;
    margin-bottom: 30px;
  }

  .testimonial {
    background-color: white;
    color: #444;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 600px;
    text-align: left;

    p {
      margin-bottom: 10px;
    }

    .user {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .rating {
      color: gold;
    }
  }
`

const MainPage = () => {
  return (
      <MainContainer>
          <HeroSection>
          <Overlay/>
          <Content>
            <p>O GourmetOn é o novo aplicativo para explorar e saborear a melhor gastronomia da sua região! Com uma interface intuitiva, você pode encontrar restaurantes, ler avaliações, fazer reservas e até pedir delivery. Experimente receitas exclusivas e participe de promoções especiais!</p>
            <p>Não perca tempo, instale nosso app e comece a sua jornada gastronômica hoje mesmo!</p>
            <button>Download</button>
          </Content>
          </HeroSection>
        

      <FeaturesSection>
        <h2>O GourmetOn como aplicativo</h2>
        <div className="features">
          <div>
            <img src={icon1} alt="Entrega Rápida" />
            <h3>Entrega rápida e segura</h3>
            <p>Utiliza um sistema eficiente de logística para garantir que suas refeições cheguem quentinhas.</p>
          </div>
          <div>
            <img src={icon2} alt="Restaurantes" />
            <h3>Restaurantes</h3>
            <p>Uma ampla seleção de restaurantes, desde fast food até alta gastronomia.</p>
          </div>
          <div>
            <img src={icon3} alt="Pagamento Fácil" />
            <h3>Forma de pagamento fácil</h3>
            <p>O processo de pagamento com múltiplas opções, como cartões de crédito e carteiras digitais.</p>
          </div>
        </div>
      </FeaturesSection>

      <FunctionalitiesSection>
        <h2>Bateu a fome? A GourmetOn está aqui!</h2>
        <div className="images">
          <div>
            <img src={pratos} alt="Pratos" />
            <p>Pratos</p>
          </div>
          <div>
            <img src={salada} alt="Salada" />
            <p>Salada</p>
          </div>
          <div>
            <img src={doces} alt="Doces" />
            <p>Doces</p>
          </div>
          <div>
            <img src={hamburger} alt="Hamburguer" />
            <p>Hamburguer</p>
          </div>
        </div>
      </FunctionalitiesSection>

      <TestimonialsSection>
        <h2>O que estão falando...</h2>
        <div className="testimonial">
          <p className="user">Usuário.</p>
          <p>Adorei a agilidade na entrega! Meu pedido chegou quentinho e dentro do tempo estimado.</p>
          <p className="rating">★★★★★</p>
        </div>
        <div className="testimonial">
          <p className="user">Usuário.</p>
          <p>Tive um pequeno problema com meu pedido, mas o suporte foi rápido e eficiente em resolver.</p>
          <p className="rating">★★★☆☆</p>
        </div>
        <div className="testimonial">
          <p className="user">Usuário.</p>
          <p>O GourmetOn oferece várias opções saudáveis, perfeito para quando quero algo mais leve.</p>
          <p className="rating">★★★★★</p>
        </div>
      </TestimonialsSection>
    </MainContainer>
  );
};

export default MainPage;
