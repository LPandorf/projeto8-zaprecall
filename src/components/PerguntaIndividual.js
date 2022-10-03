import { useState } from 'react';
import styled from 'styled-components';
import seta from '../assets/seta_play.png';
import virar from '../assets/seta_virar.png';


export default function PerguntaIndividual(props) {

    const [estadoDaCarta, setestadoDaCarta] = useState(0);

    if (estadoDaCarta === 0) {
        //fechado
        return <Carta >pergunta {props.index + 1}<img src={seta} onClick={() => setestadoDaCarta(1)} /></Carta>

    } else {
        if (estadoDaCarta === 1) {
            //pergunta
            return <Carta > {props.item.Q}<img src={virar} onClick={() => setestadoDaCarta(2)} /></Carta>

        } else {
            if (estadoDaCarta === 2) {
                //gabarito
                return (
                    <CartaTres>{props.item.R}
                        <Lado>
                            <Vermelho>
                                Não Lembrei
                            </Vermelho>
                            <Amarelo >
                                Quase não lembrei
                            </Amarelo>
                            <Verde >
                                Zap!
                            </Verde>
                        </Lado>
                    </CartaTres>
                )
            }
        }
    }
}

const Carta = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CartaTres = styled.div`
    width: 300px;
    height: 80px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

`

const Lado = styled.div`
    display: flex;
    justify-content: space-around;
`

const Verde = styled.div`
    background-color: #2FBE34;
    width: 70px;
    height: 40px;
    margin-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
`

const Amarelo = styled.div`
    background-color: #FF922E;
    width: 70px;
    height: 40px;
    margin-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
`

const Vermelho = styled.div`
    background-color: #FF3030;
    width: 70px;
    height: 40px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
`