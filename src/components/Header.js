import styled from 'styled-components';

import logo from '../assets/logo.png';

export default function (){
    return (
        <Header>
            <Logo src={logo} alt="logo" />
            <Titulo>ZapRecall</Titulo>
        </Header>
    )
}

const Header=styled.div`
    top: 0;
    left: 0;
    right: 0;
    background-color: #FB6B6B;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
`
const Logo=styled.img`
    width: 52px;
    height: 60px;
`
const Titulo=styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
`