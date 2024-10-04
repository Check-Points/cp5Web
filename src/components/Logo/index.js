import styled from "styled-components";

const LogoContainer = styled.div`
        display: flex;
        font-size: 30px;
        font-family: "Borel", cursive;
        color: #fff;
`

const SubLogo = styled.strong`
    color: #25BA00;
`

function Logo() {
    return (
        <LogoContainer>
            <p>Gourmet<SubLogo>On</SubLogo></p>
        </LogoContainer>
    )
}

export default Logo