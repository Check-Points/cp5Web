import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import OpcoesHeader from '../OpcoesHeader'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Borel&family=Margarine&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    `
    
const HeaderContainer = styled.header`
    background-color: #E1550A;
    display: flex;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    color: #fff;
`

function Header() {
    return (
        <HeaderContainer>
            <GlobalStyle/>
                <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header