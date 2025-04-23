import Banner from './componentes/Banner';
import { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Continente from './componentes/Continente';
import './App.css';

/**
 * Componente principal da aplicação
 * Gerencia o estado global e a lógica de negócios
 */
function App() {
    // Estado para armazenar a lista de lugares cadastrados
    const [lugares, setLugares] = useState([])
    // Estado para controlar a cor de fundo do site
    const [corFundo, setCorFundo] = useState('#FFFFFF')

    /**
     * Função chamada quando um novo lugar é adicionado
     * @param {Object} lugar - Objeto contendo os dados do novo lugar
     */
    const aoNovolugarAdicionado = (lugar) => {
        // Adiciona o novo lugar no início da lista
        setLugares([lugar, ...lugares])
    }

    /**
     * Efeito para atualizar a cor de fundo baseado no primeiro card visível
     * Executa sempre que a lista de lugares é alterada
     */
    useEffect(() => {
        if (lugares.length > 0) {
            // Encontra o primeiro continente que tem cards
            const primeiroContinenteComCards = continentes.find(cont => 
                lugares.some(lugar => lugar.continente === cont.nome)
            )
            
            // Se encontrou um continente com cards, atualiza a cor de fundo
            if (primeiroContinenteComCards) {
                setCorFundo(primeiroContinenteComCards.corSecundaria)
            }
        }
    }, [lugares])

    // Array com as configurações de cada continente
    const continentes = [
        {
            nome: 'América do Sul',
            corPrimaria: '#FEDD00',
            corSecundaria: '#d3f0de',
        },
        {
            nome: 'América do Norte',
            corPrimaria: '#3C3B6E',
            corSecundaria: '#faa2ad',
        },
        {
            nome: 'Ásia',
            corPrimaria: '#FFDE00',
            corSecundaria: '#faafa5',
        },
        {
            nome: 'África',
            corPrimaria: '#FFB81C',
            corSecundaria: '#a5e8ce',
        },
        {
            nome: 'Europa',
            corPrimaria: '#FFCC00',
            corSecundaria: '#a1bbed',
        },
        {
            nome: 'Oceania',
            corPrimaria: '#FF0000',
            corSecundaria: '#9898f5',
        }
    ]

    return (
        <div className="App" style={{backgroundColor: corFundo}}>
                <Banner />
                <Formulario 
                    continentes={continentes.map(continente => continente.nome)} 
                    aoNovoLugarCadastrado={lugar => aoNovolugarAdicionado(lugar)} 
                />
            {continentes.map(cont => {
                const lugaresDoContinente = lugares.filter(lugar => lugar.continente === cont.nome)
                return lugaresDoContinente.length > 0 && (
                        <Continente
                            pais={cont.nome}
                            corPrimaria={cont.corPrimaria}
                            corSecundaria={cont.corSecundaria}
                            lugares={lugaresDoContinente}
                        />
                )
            })}
        </div>
    );
}

// Exporta o componente para uso em outros arquivos
export default App;