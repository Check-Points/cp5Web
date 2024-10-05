##Descrição da Aplicação##
O GourmetOn é um aplicativo de entrega de alimentos que visa proporcionar uma experiência gastronômica excepcional aos usuários. A aplicação é construída utilizando React e styled-components, permitindo um design moderno e responsivo.

##Estrutura do Código##
#Header:#

Contém o componente Header que exibe o logo e as opções de navegação. A barra de navegação é fixa no topo da página e muda de opacidade conforme o usuário rola a página.
#Logo:$

O componente Logo exibe o nome do aplicativo com um estilo personalizado.
Opções de Header:

O componente OpcoesHeader renderiza os links de navegação para as seções principais do aplicativo, como "Home", "Sobre nós", "Feedback", "Categoria" e "Download". Utiliza react-scroll para facilitar a navegação suave entre as seções.
Main Page:

O componente MainPage serve como o coração da aplicação, contendo várias seções:
Hero Section: Uma apresentação visual com uma imagem de fundo, informações sobre o aplicativo e um botão para download.
Features Section: Descreve as funcionalidades do aplicativo, como entrega rápida, diversidade de restaurantes e opções de pagamento.
Meals Section: Utiliza a API do MealDB para buscar e exibir uma lista de refeições disponíveis. Trata erros caso a busca não funcione.
Functionalities Section: Apresenta diferentes categorias de alimentos disponíveis no aplicativo, como pratos, saladas, doces e hamburgueres.
Testimonials Section: Exibe depoimentos de usuários sobre suas experiências com o GourmetOn.
Contact Form Section: Um formulário de contato para que os usuários possam enviar suas mensagens e feedback.
Footer:

O componente Footer contém informações adicionais, como ícones de redes sociais e links para download nas lojas de aplicativos.
Tecnologias Utilizadas
React: Para construção de interfaces de usuário.
styled-components: Para estilização dos componentes de forma modular e reutilizável.
Axios: Para realizar requisições HTTP e interagir com a API de refeições.
