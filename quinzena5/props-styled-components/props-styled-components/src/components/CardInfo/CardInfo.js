import React from 'react';
import styled from 'styled-components'


const CardInfoEstilo = styled.div`
 display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 15px 15px;
    margin-bottom: 10px;
    width: 670px;
`

const Img =styled.img`
  width: 40px;
    margin-right: 10px;
    border-radius: 20%;
    margin-left: 2px;
    display: block;
`
const Nome = styled.h4`
margin: 2px;   
`

const Descricao = styled.p`
display: flex;
    flex-direction:column;
    justify-items:stretch ;   
    margin:10px ;  
`


function CardInfo(props) {
    return (
        <CardInfoEstilo>
            <Img src={ props.imagem } />
            <Nome>{ props.nome }</Nome>               
            <div>                
            <Descricao>{ props.descricao }</Descricao>  
            </div>
        </CardInfoEstilo>
    )
}

export default CardInfo;