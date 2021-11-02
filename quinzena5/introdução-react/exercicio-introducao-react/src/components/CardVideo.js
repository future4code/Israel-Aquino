import React from 'react' 
import '../styles.css'


const CardVideo = (props) =>  {
    return(
 <div className="box-pagina-principal" onClick={props.reproduzVideo}>
    <img src={props.link} alt={props.titulo} />
    <h4>{props.titulo}</h4>

    </div> 
 );
}

export default CardVideo

