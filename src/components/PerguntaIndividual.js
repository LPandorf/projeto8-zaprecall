import { useState } from 'react';
import styled from 'styled-components';
import seta from '../assets/seta_play.png';
import virar from '../assets/seta_virar.png';
import erro from '../assets/icone_erro.png';
import acerto from '../assets/icone_certo.png';
import quase from '../assets/icone_quase.png';


export default function PerguntaIndividual(props) {

    const [estadoDaCarta, setestadoDaCarta] = useState(0);
    const [cor, setcor]= useState("black");
    const [linha, setlinha]= useState("none");
    const [contador, setcontador]= useState(0);
    const [icone, seticone]= useState(seta);
    const [concluidos,setconcluidos]= useState(0);

    function mudarCor(color){
        setcontador(contador+1);
        setconcluidos(contador+1);

        if(color==="green"){
            //#2FBE34
            setcor("green");
            setlinha("line-through");
            seticone(acerto);
        }else{
            if(color==="red"){
                //#FF3030
                setcor("red");
                setlinha("line-through");
                seticone(erro);
            }else {
                if(color==="orange"){
                    //#FF922E
                    setcor("orange");
                    setlinha("line-through");
                    seticone(quase);
                }
            }
        }
    }
    

    if (estadoDaCarta === 0) {
        //fechado
        return <Carta ><Pergunta style={{color: `${cor}`,textDecoration:`${linha}`}}>Pergunta {props.index + 1}</Pergunta><img src={icone} onClick={() => setestadoDaCarta(1)} /></Carta>

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
                            <Vermelho onClick={()=>mudarCor("red") /setestadoDaCarta(0)}>
                                Não Lembrei
                            </Vermelho>
                            <Orange onClick={()=>mudarCor("orange") /setestadoDaCarta(0)}>
                                Quase não lembrei
                            </Orange>
                            <Verde onClick={()=>mudarCor("green") /setestadoDaCarta(0)}>
                                Zap!
                            </Verde>
                        </Lado>
                    </CartaTres>
                )
            }
        }
    }
}

const Pergunta = styled.div`
    color: cor;
`

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
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
`

const Orange = styled.div`
    background-color: #FF922E;
    width: 70px;
    height: 40px;
    margin-left: 25px;
    display: flex;
    text-align: center;
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
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
`