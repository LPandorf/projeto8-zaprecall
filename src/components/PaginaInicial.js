import styled from 'styled-components';
import logo from '../assets/logo.png';
import GlobalStyle from './GlobalStyled';

export default function PaginaInicial(props) {
    function botaozin() {
        props.setbotao(true);
    }
    return (
        <Body>
            <GlobalStyle />
            <Tela>
                <Logo><img src={logo} alt="logo"/></Logo>
                <Titulo>Zap Recall</Titulo>
                <button onClick={botaozin}>Iniciar Recall</button>
            </Tela>
        </Body>
    )
}

const Body = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-bottom: 200px;
`
const Logo=styled.div`
    width:136;
`

const Tela = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`
const Titulo = styled.h1`
    color: black;
    font-size: 100px;
`
