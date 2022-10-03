import styled from 'styled-components';
import Header from './Header';
import Pergunta from './Pergunta';

export default function Perguntas(){

    return(
        <Body>
            <Header/>
            <Pergunta/>
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