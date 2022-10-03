import Perguntas from './Perguntas';
import PaginaInicial from './PaginaInicial';
import { useState } from 'react';

export default function App(){
    const [botao,setbotao] = useState(false);
    return (botao===true?<Perguntas/>:<PaginaInicial setbotao={setbotao}/>);
}
