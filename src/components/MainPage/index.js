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
import comida from '../../images/image-comida.png'


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

  @media (max-width: 768px) {
    padding: 5rem 1rem;
    text-align: center;

    p {
      font-size: 1em;
    }

    button {
      width: 100%;
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
      font-family: "Montserrat", sans-serif;
      margin: 10px 0;
      font-size: 1.2em;
      color: #000;
    }

    p {
      font-family: "Montserrat", sans-serif;
      font-size: 0.9em;
      color: #000;
    }
  }

  @media (max-width: 768px) {
    .features {
      flex-direction: column;

      div {
        width: 100%;
      }

      img {
        width: 60px;
        height: 60px;
      }
    }
  }
`;

const FunctionalitiesSection = styled.section`
  background-color: #fff;
  text-align: center;
  padding: 40px 20px;

  h2 {
    font-family: "Montserrat", sans-serif;
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

   @media (max-width: 768px) {
    .images {
      flex-direction: column;

      div {
        width: 100%;
        margin: 20px 0;
      }

      img {
        margin-top: 0;
        width: 100%;
        max-width: 150px; /* Diminuindo o tamanho das imagens para mobile */
      }
    }
  }
`;
// arrumar
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

    h2 {
      font-size: 1.5em;
    }
  }

  @media (max-width: 768px) {
    .testimonial {
      width: 100%; /* Para dispositivos móveis */
    }

    h2 {
      font-size: 1.4em;
      margin-bottom: 20px;
    }

    .testimonial {
      padding: 15px; /* Reduzindo o padding em dispositivos menores */
    }

    .user {
      font-size: 1em;
    }

    .rating {
      font-size: 1.2em;
    }
  }

    h2 {
      font-size: 1.2em;
      margin-bottom: 15px;
    }

    .testimonial {
      padding: 10px;
    }

    .rating {
      font-size: 1em;
    }
  }
`

const FormContatoSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: #fff;

  img {
    width: 50%;
    object-fit: cover;
  }

  form {
    background-color: #c62828;
    padding: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      color: #fff;
      margin-bottom: 20px;
    }

    label {
      color: #fff;
      margin-bottom: 10px;
    }

    input, textarea {
      padding: 10px;
      border: none;
      border-radius: 5px;
      margin-bottom: 15px;
      font-size: 16px;
    }

    input {
      height: 40px;
    }

    textarea {
      height: 100px;
    }

    button {
      background-color: #ff8c00;
      border: none;
      padding: 10px;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: #e67e22;
      }
    }
  }

  @media (max-width: 768px) {
  flex-direction: column;
  padding: 20px;
  align-items: center;

  img {
    width: 70%; /* Largura ajustada para 70% */
    margin-bottom: 20px;
  }

  form {
    width: 70%; /* Igualando a largura do formulário à da imagem */
  }

  button {
    font-size: 14px;
    padding: 8px;
  }

  input, textarea {
    font-size: 14px;
    padding: 8px;
  }
}
`;

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

      <FormContatoSection>
        <img src= {comida} alt="Comida" />
        <form>  
          <h2>Formulário de Contato</h2>
          <label>Nome Completo:</label>
          <input type="text" placeholder="Seu nome" />
          <label>E-mail:</label>
          <input type="email" placeholder="Seu e-mail" />
          <label>Mensagem Opcional:</label>
          <textarea placeholder="Escreva sua mensagem" />
          <button type="submit">Enviar</button>
        </form>
      </FormContatoSection>
    </MainContainer>
  );
};

export default MainPage;
