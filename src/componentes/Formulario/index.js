import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
import { useState } from 'react';

// Componente funcional Formulario que recebe props como parâmetro
const Formulario = (props) => {
    // Estados do componente usando o hook useState
    // Cada estado armazena um valor e uma função para atualizá-lo
    const [pais, setPais] = useState('')        // Estado para armazenar o nome do país
    const [continente, setContinente] = useState('')  // Estado para armazenar o continente selecionado
    const [imagem, setImagem] = useState('')    // Estado para armazenar a URL da imagem

    /**
     * Função chamada quando o formulário é submetido
     * @param {Event} evento - Evento de submissão do formulário
     */
    const aoSalvar = (evento) => {
        evento.preventDefault()  // Previne o comportamento padrão do formulário
        // Chama a função passada via props com os dados do formulário
        props.aoNovoLugarCadastrado({
            pais,
            continente,
            imagem
        })
        // Limpa os campos do formulário após o envio
        setPais('')
        setContinente('')
        setImagem('')        
    }

    return (
        // Seção principal do formulário
        <section className="formulario">
            {/* Formulário que será submetido */}
            <form onSubmit={aoSalvar}>
                {/* Título do formulário */}
                <h2>Prencha os dados para criar o card da sua viagem</h2>
                
                {/* Campo para inserir o nome do país */}
                <CampoTexto 
                    obrigatorio={true}  // Campo obrigatório
                    label="Nome do país" 
                    placeholder="Digite o país..." 
                    valor={pais}
                    aoAlterado={valor => setPais(valor)}  // Atualiza o estado quando o valor muda
                    limite={true}  // Limite de 20 caracteres
                />
                
                {/* Campo para inserir a URL da imagem */}
                <CampoTexto 
                    label="Imagem" 
                    placeholder="link de uma imagem sua nesse país..." 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    limite={false}  // Sem limite de caracteres
                />
                
                {/* Dropdown para selecionar o continente */}
                <ListaSuspensa 
                    obrigatorio={true}  // Campo obrigatório
                    label="Continente" 
                    itens={props.continentes}  // Lista de continentes passada via props
                    valor={continente}
                    aoAlterado={valor => setContinente(valor)}
                />
                
                {/* Botão para submeter o formulário */}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

// Exporta o componente para ser usado em outros arquivos
export default Formulario