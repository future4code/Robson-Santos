import React from 'react';
import './App.css';
import Photo from './img/foto.jpg'
import Logo1 from './img/labenu.png'
import Logo2 from './img/fatec.png'
import Icone1 from './img/email.png'
import Icone2 from './img/endereco.png'
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {Photo}
          nome="Robson F F dos Santos" 
          descricao="Oi, meu nome é Robson. Atualmente sou estudante da Labenu. Sou formado em logística pela FATEC da Zona Leste, que fica em São Paulo. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
          imagem={Icone1}
          campo= "e-mail: "
          descricao="teste@labenu.com.br"
        />

        <CardPequeno
          imagem={Icone2}
          campo= "Endereço: "
          descricao="Avenida Paulista, 1700 - São Paulo/SP"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande 
          imagem={Logo1}
          nome="Labenu" 
          descricao="Curso de desenvolvimento Web Full Stack" 
        />
        
        <CardGrande 
          imagem={Logo2} 
          nome="Fatec da Zona Leste" 
          descricao="Curso de Logística" 
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
