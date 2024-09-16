import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
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

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   
      <Rodape />
    </div>
  );
}

export default App;