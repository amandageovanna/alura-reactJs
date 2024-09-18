import Personagem from '../Personagem'
import './Especie.css'

const Especie = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.personagens.length > 0) ? <section className='especie' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='personagens'>
                {props.personagens.map( personagem => <Personagem  corDeFundo={props.corPrimaria} key={personagem.nome} nome={personagem.nome} cargo={personagem.cargo} imagem={personagem.imagem}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Especie