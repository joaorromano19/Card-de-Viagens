// Importa o arquivo de estilos CSS para o componente
import './CampoTexto.css'

/**
 * Componente CampoTexto - Campo de entrada de texto reutilizável
 * @param {Object} props - Propriedades do componente
 * @param {string} props.label - Rótulo do campo
 * @param {string} props.placeholder - Texto de placeholder
 * @param {string} props.valor - Valor atual do campo
 * @param {Function} props.aoAlterado - Função chamada quando o valor muda
 * @param {boolean} props.obrigatorio - Indica se o campo é obrigatório
 * @param {boolean} props.limite - Indica se o campo deve ter limite de 50 caracteres
 */
const CampoTexto = (props) => {
    /**
     * Função chamada quando o usuário digita no campo
     * @param {Event} evento - Evento de digitação
     */
    const aoDigitado = (evento) => {
        // Se tiver limite, aplica o limite de 20 caracteres
        const texto = props.limite ? evento.target.value.slice(0, 20) : evento.target.value
        // Chama a função aoAlterado passada via props, enviando o novo valor
        props.aoAlterado(texto)
    }

    return (
        // Container principal do campo de texto
        <div className="campo-texto">
            {/* Rótulo do campo */}
            <label>
                {props.label}
            </label>
            {/* Input do campo */}
            <input 
                value={props.valor} // Valor atual do campo
                onChange={aoDigitado} // Função chamada quando o valor muda
                required={props.obrigatorio} // Define se o campo é obrigatório
                placeholder={props.placeholder} // Texto de placeholder
                maxLength={props.limite ? 20 : undefined} // Limite de 20 caracteres apenas se tiver limite
            />
        </div>
    )
}

// Exporta o componente para uso em outros arquivos
export default CampoTexto