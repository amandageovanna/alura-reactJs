import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Especie from './componentes/Especie';
import Rodape from './componentes/Rodape';

function App() {

  const especies = [
    {
      nome: 'Bruxa',
      corPrimaria: '#271d11',
      corSecundaria: '#fff7e9'
    },
    {
      nome: 'Vampiro',
      corPrimaria: '#d4bba3',
      corSecundaria: '#eddfd1'
    },
    {
      nome: 'Originais',
      corPrimaria: '#1d1000',
      corSecundaria: '#fff8ee'
    },
    {
      nome: 'Lobisomens',
      corPrimaria: '#98897b',
      corSecundaria: '#fff4e4'
    },
    {
      nome: 'Doppelganger',
      corPrimaria: '#a46856',
      corSecundaria: '#fae3dc'
    },
    {
      nome: 'Humano',
      corPrimaria: '#c4a689',
      corSecundaria: '#FFF5D9'
    },
    
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    console.log(personagem)
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario especies={especies.map(especie => especie.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>

      {especies.map(especie => <Especie 
        key={especie.nome} 
        nome={especie.nome} 
        corPrimaria={especie.corPrimaria} 
        corSecundaria={especie.corSecundaria} 
        personagens={personagens.filter(personagem => personagem.especie === especie.nome)}
      />)}   
      <Rodape />
    </div>
  );
}

export default App;