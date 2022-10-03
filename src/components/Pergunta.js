import PerguntaIndividual from './PerguntaIndividual';

import styled from 'styled-components';

export default function Pergunta() {

    const DeckRecall = [
        { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
        { Q: "Componentes devem iniciar com ", R: "letra maiúscula" },
        { Q: "Podemos colocar  dentro do JSX", R: "expressões" },
        { Q: "Usamos props para ", R: "passar diferentes informações para componentes" }
    ];

    return (
        <Fundo>
            {DeckRecall.map((item, index) => {
                return <PerguntaIndividual key={index} item={item} index={index}/>
            })}
        </Fundo>
    )

}

const Fundo=styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
`
