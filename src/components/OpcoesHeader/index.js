import styled from "styled-components";

//deixar responsivo

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 0 3px;
        min-width: 90px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        min-width: 70px;
        padding: 0 2px;
    }
`;

const Opcoes = styled.ul`
    display: flex;

    @media (max-width: 768px) {
        justify-content: space-between;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`;

const textoOpcoes = ['Home', 'Sobre nós', 'Feedback','Categoria','Download'];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map( (texto) => (
                <Opcao key={texto}><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    );
}

export default OpcoesHeader;