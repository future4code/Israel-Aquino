import React from 'react';
import './App.css';
import Imagem from './components/img/copia.jpg'
import CardGrande from './components/CardGrande/CardGrande';
import CardInfo from './components/CardInfo/CardInfo';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Imagem}
          nome="Israel Vasconcelos" 
          descricao="Oi, me chamo Israel. Sou um estudante da Labenu, e também trabalho como admistrador financeiro. Sou uma pessoa empenhada que aprende rápido e já tive experiências profissionais como TI em hardware, solucionando problemas, Design e agora administrador."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardInfo
       imagem="https://cirurgiadecabecaepescoco.com.br/wp-content/uploads/2018/08/003-email.png" 
       nome="Email:" 
       descricao="israelvasconcelos@labenu.com" 
       />
      <CardInfo
       imagem="https://engyconstrucoes.com.br/images/placeholder-black-shape-for-localization-on-maps.png" 
       nome="Endereço:" 
       descricao="Rua fica com Deus, 896" 
       />
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
