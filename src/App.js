import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage'; 
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <MainPage />
      <Footer />
    </AppContainer>
  );
}

export default App;
