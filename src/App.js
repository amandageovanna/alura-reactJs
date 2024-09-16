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
      corPrimaria: '#514438',
      corSecundaria: '#d4bba3'
    },
    {
      nome: 'Originais',
      corPrimaria: '#7a6c5e',
      corSecundaria: '#fff8ee'
    },
    {
      nome: 'Lobisomens',
      corPrimaria: '#98897b',
      corSecundaria: '#fff4e4'
    },
    {
      nome: 'Doppelganger',
      corPrimaria: '#bba987',
      corSecundaria: '#fff8ec'
    },
    {
      nome: 'Humano',
      corPrimaria: '#5f4200',
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