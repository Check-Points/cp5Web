import styled from "styled-components";

const LogoContainer = styled.div`
        display: flex;
        font-size: 30px;
`


function Logo() {
    return (
        <LogoContainer>
            <p>Gourmet<strong>On</strong></p>
        </LogoContainer>
    )
}

export default Logo