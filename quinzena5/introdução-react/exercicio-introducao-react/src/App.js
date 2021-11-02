import CardVideo from './components/CardVideo';
import BotaoMenu from './components/BotaoMenu';
import styled from 'styled-components'

const Footer = styled.footer`
    background: #333b3e;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0 10px;
`

function App() {
  
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")}

  return (
    <div class="tela-inteira">
    <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca"/>
    </header>

    <main>
        <nav className="menu-vertical">
        <BotaoMenu textoBotao={'Ínicio'}/>
        <BotaoMenu textoBotao={'Em Alta'}/>
        <BotaoMenu textoBotao={'Inscrições'}/>       
        <hr />
        <BotaoMenu textoBotao={'Biblioteca'}/>   
        <BotaoMenu textoBotao={'Histórico'}/>   
        <BotaoMenu textoBotao={'Originais'}/>   
        </nav>

        <section className="painel-de-videos">
         <CardVideo titulo={'Video 1'}
         link={'https://picsum.photos/400/400?a=1'}
         reproduzVideo = {reproduzVideo}
         /> 
         <CardVideo titulo={'Video 2'}
         link={'https://picsum.photos/400/400?a=2'}
         reproduzVideo = {reproduzVideo}
         /> 
         <CardVideo titulo={'Video 3'}
         link={'https://picsum.photos/400/400?a=3'}
         reproduzVideo = {reproduzVideo}
         /> 
         <CardVideo titulo={'Video 4'}
         link={'https://picsum.photos/400/400?a=4'}
         reproduzVideo = {reproduzVideo}
         /> 
         <CardVideo titulo={'Video 5'}
         link={'https://picsum.photos/400/400?a=5'}
         reproduzVideo = {reproduzVideo}
         /> 
         <CardVideo titulo={'Video 6'}
         link={'https://picsum.photos/400/400?a=6'}
         reproduzVideo = {reproduzVideo}
         /> 
         <CardVideo titulo={'Video 7'}
         link={'https://picsum.photos/400/400?a=7'}
         reproduzVideo = {reproduzVideo}
         /> 
         <CardVideo titulo={'Video 8'}
         link={'https://picsum.photos/400/400?a=8'}
         reproduzVideo = {reproduzVideo}
         /> 
              
                        
        </section>
        
    </main>
    <Footer>
      Oi! Eu moro no footer!
    </Footer>    
</div>
  );
}

export default App;
