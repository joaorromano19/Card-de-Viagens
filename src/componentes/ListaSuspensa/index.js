import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            {/* Label que exibe o texto acima do select */}
            <label>{props.label}</label>
            {/* Select que cria a lista suspensa */}
            <select 
                // Função chamada quando o valor é alterado
                onChange={evento => props.aoAlterado(evento.target.value)} 
                // Define se o campo é obrigatório
                required={props.obrigatorio} 
                // Valor atual selecionado
                value={props.valor}
            >
                {/* Opção vazia padrão */}
                <option value=""></option>
                {/* Mapeia os itens para criar as opções do select */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa