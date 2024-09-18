import './Personagem.css'

const Personagem = ({ nome, imagem, especie, corDeFundo}) => {
    return (<div className='personagem'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{especie}</h5>
        </div>
    </div>)
}

export default Personagem