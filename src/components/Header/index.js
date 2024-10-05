import styled from 'styled-components'
import OpcoesHeader from '../OpcoesHeader'
 
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
                <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header