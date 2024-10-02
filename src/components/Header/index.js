import styled from 'styled-components'
import OpcoesHeader from '../OpcoesHeader'
import Logo from '../Logo'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header