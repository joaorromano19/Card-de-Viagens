import Lugar from '../Lugar'
import './Continente.css'

/**
 * Componente Continente - Exibe uma seção com cards de lugares de um continente
 * @param {Object} props - Propriedades do componente
 * @param {string} props.pais - Nome do continente
 * @param {string} props.corPrimaria - Cor primária do continente
 * @param {string} props.corSecundaria - Cor secundária do continente
 * @param {Array} props.lugares - Lista de lugares do continente
 */
const Continente = (props) => {
    return (
        // Renderiza a seção apenas se houver lugares (length > 0)
        // A seção tem cor de fundo definida pela prop corSecundaria
        props.lugares.length > 0 && <section className="continente" style={{ backgroundColor: props.corSecundaria }}>
            {/* Título do continente com borda na cor primária */}
            <h3 style={{ borderColor: props.corPrimaria }}>{props.pais}</h3>
            {/* Container dos cards de lugares */}
            <div className="lugares">
                {/* Mapeia cada lugar para criar um card */}
                {props.lugares.map((lugar, index) => (
                    <div key={lugar.pais} style={{ '--index': index }}>
                        <Lugar 
                            corDeFundo={props.corPrimaria} 
                            nome={lugar.pais} 
                            imagem={lugar.imagem} 
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

// Exporta o componente para uso em outros arquivos
export default Continente