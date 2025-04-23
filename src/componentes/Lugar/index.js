// Importa os estilos CSS do componente
import './Lugar.css'

/**
 * Componente Lugar - Card que exibe informações de um lugar/país
 * @param {Object} props - Propriedades do componente
 * @param {string} props.nome - Nome do país
 * @param {string} props.imagem - URL da imagem do país
 * @param {string} props.corDeFundo - Cor de fundo do cabeçalho do card
 */
const Lugar = ({nome, imagem, corDeFundo}) => {
    return (
        // Container principal do card
        <div className="lugar">
            {/* Cabeçalho do card com cor de fundo dinâmica */}
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                {/* Imagem do país */}
                <img src={imagem} alt={nome} />
            </div>
            {/* Rodapé do card com informações */}
            <div className="rodape">
                {/* Nome do país */}
                <h4>{nome}</h4>
            </div>
        </div>
    )
}

// Exporta o componente para uso em outros arquivos
export default Lugar