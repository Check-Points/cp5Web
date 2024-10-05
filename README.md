# GourmetOn

GourmetOn é um aplicativo web moderno para explorar e saborear a melhor gastronomia da sua região. Com uma interface intuitiva, você pode encontrar restaurantes, ler avaliações, fazer reservas e até pedir delivery. Além disso, oferece receitas exclusivas e promoções especiais para uma experiência gastronômica completa.

## Integrantes

- Milena Codinhoto
- Evellyn Valencia
- Carolina Ferraz

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Styled-Components**: Biblioteca para estilização de componentes em React utilizando CSS-in-JS.
- **Axios**: Cliente HTTP para realizar requisições a APIs.
- **React Hooks**: `useState` e `useEffect` para gerenciamento de estado e efeitos colaterais.
- **APIs Externas**: [TheMealDB](https://www.themealdb.com/api.php) para buscar dados de refeições.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **Node.js** (v14 ou superior)
- **npm** ou **yarn**

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/gourmeton.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd gourmeton
   ```

3. **Instale as dependências:**

   Usando npm:
   ```bash
   npm install
   ```

   Ou usando yarn:
   ```bash
   yarn install
   ```

4. **Inicie o servidor de desenvolvimento:**

   Usando npm:
   ```bash
   npm start
   ```

   Ou usando yarn:
   ```bash
   yarn start
   ```

5. **Acesse o aplicativo:**

   Abra seu navegador e vá para [http://localhost:3000](http://localhost:3000)

## Como Usar

O aplicativo está dividido em várias seções principais:

### 1. Hero Section

Apresenta a proposta do aplicativo com um fundo atrativo, texto descritivo e um botão para download.

### 2. Features Section

Destaca os principais recursos do GourmetOn, como entrega rápida, ampla seleção de restaurantes e formas de pagamento facilitadas.

### 3. Meals Section

Exibe uma lista de refeições buscadas da API TheMealDB. Cada refeição é apresentada em um cartão com imagem e nome.

### 4. Functionalities Section

Mostra diferentes categorias de alimentos disponíveis, como Pratos, Saladas, Doces e Hambúrgueres, cada uma com uma imagem representativa.

### 5. Testimonials Section

Exibe feedback de usuários com avaliações e comentários sobre a experiência no aplicativo.

### 6. Contact Form Section

Formulário para contato onde os usuários podem enviar mensagens, feedback ou dúvidas diretamente através do aplicativo.

## Estrutura do Projeto

```plaintext
gourmeton/
│
├── src/
│   ├── components/
│   │   ├── MainPage.jsx
│   │   └── ...outros componentes
│   │
│   ├── images/
│   │   ├── background.png
│   │   ├── icon1.png
│   │   ├── icon2.png
│   │   ├── icon3.png
│   │   ├── food1.png
│   │   ├── food2.png
│   │   ├── food3.png
│   │   ├── food4.png
│   │   └── image-comida.png
│   │
│   ├── App.js
│   ├── index.js
│   └── ...outros arquivos
│
├── package.json
├── README.md
└── ...outros arquivos de configuração
```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. **Fork este repositório.**
2. **Crie uma branch para sua feature ou correção:**

   ```bash
   git checkout -b minha-nova-feature
   ```

3. **Faça commit das suas alterações:**

   ```bash
   git commit -m "Adiciona nova feature"
   ```

4. **Faça push para a branch:**

   ```bash
   git push origin minha-nova-feature
   ```

5. **Abra um Pull Request.**

# Contato

Para mais informações, entre em contato através do e-mail [seu-email@exemplo.com](mailto:seu-email@exemplo.com).

# Observações

- **API Externa**: Certifique-se de que a API [TheMealDB](https://www.themealdb.com/api.php) está acessível para o correto funcionamento da seção de refeições.
- **Imagens**: As imagens utilizadas devem estar presentes na pasta `src/images/`. Substitua pelas suas próprias imagens conforme necessário.

# Personalização

Você pode personalizar o aplicativo adicionando mais funcionalidades, como:

- **Autenticação de Usuário**: Permitir que usuários se cadastrem e façam login.
- **Carrinho de Compras**: Implementar um sistema de carrinho para pedidos.
- **Integração com Pagamentos**: Adicionar métodos de pagamento online.

Sinta-se à vontade para explorar e expandir o GourmetOn conforme suas necessidades!

# Conclusão

GourmetOn é uma solução completa para amantes da gastronomia que desejam explorar, descobrir e saborear o melhor que a região tem a oferecer. Com uma interface amigável e funcionalidades robustas, proporciona uma experiência única e eficiente para os usuários.

