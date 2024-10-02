import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const HeroSection = styled.section`
  background-color: #e94c19;
  color: white;
  text-align: center;
  padding: 50px 20px;

  h1 {
    font-size: 2.5em;
  }

  p {
    font-size: 1.2em;
    margin: 20px 0;
  }

  button {
    background-color: #41d07b;
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 5px;
    color: white;
  }
`;

const FeaturesSection = styled.section`
  text-align: center;
  padding: 40px 20px;

  h2 {
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
      width: 100%;
      border-radius: 10px;
      max-height: 150px;
      object-fit: cover;
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
`;

const MainPage = () => {
  return (
    <MainContainer>
      <HeroSection>
        <h1>GourmetOn</h1>
        <p>Explore e saboreie a melhor gastronomia da sua região!</p>
        <button>Download</button>
      </HeroSection>

      <FeaturesSection>
        <h2>O GourmetOn como aplicativo</h2>
        <div className="features">
          <div>
            <img src="/path/to/fast-delivery-icon.png" alt="Entrega Rápida" />
            <h3>Entrega rápida e segura</h3>
            <p>Utiliza um sistema eficiente de logística para garantir que suas refeições cheguem quentinhas.</p>
          </div>
          <div>
            <img src="/path/to/restaurant-icon.png" alt="Restaurantes" />
            <h3>Restaurantes</h3>
            <p>Uma ampla seleção de restaurantes, desde fast food até alta gastronomia.</p>
          </div>
          <div>
            <img src="/path/to/payment-icon.png" alt="Pagamento Fácil" />
            <h3>Forma de pagamento fácil</h3>
            <p>O processo de pagamento com múltiplas opções, como cartões de crédito e carteiras digitais.</p>
          </div>
        </div>
      </FeaturesSection>

      <FunctionalitiesSection>
        <h2>Bateu a fome? A GourmetOn está aqui!</h2>
        <div className="images">
          <div>
            <img src="/path/to/prato.jpg" alt="Pratos" />
            <p>Pratos</p>
          </div>
          <div>
            <img src="/path/to/salada.jpg" alt="Salada" />
            <p>Salada</p>
          </div>
          <div>
            <img src="/path/to/doces.jpg" alt="Doces" />
            <p>Doces</p>
          </div>
          <div>
            <img src="/path/to/hamburguer.jpg" alt="Hamburguer" />
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
