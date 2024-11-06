import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Card from '../../../components/cardPortfolio';
import axios from 'axios'

import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function HomeAdmin() {

    //LÓGICA PARA O SERVIÇO
    const [lista, setLista] = useState([{
        "id": 1,
        "titulo": "Design de Interface",
        "entrega": "2024-03-03",
        "cliente": "Edson",
        "status": "Em Andamento",
        "tag_tarefa": "Design Gráfico"
    }]);

    const [atualizarLista, setAtualizarLista] = useState(false); // Estado para controlar atualização
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (localStorage.getItem('TOKEN') == undefined) {
            navigate('/login');
        }
        buscar();
    }, [atualizarLista]); // Dependendo de atualizarLista

    useEffect(() => {
        // Verifica se o estado de atualização foi passado
        if (location.state && location.state.refresh) {
            setAtualizarLista(true); // Atualiza a lista
        }
    }, [location.state]);

    async function buscar() {
        let resp = await axios.get('http://localhost:3010/servico');
        setLista(resp.data);
        setAtualizarLista(false); // Reseta a flag de atualização
    }

    async function buscar() {
        let resp = await axios.get('http://localhost:3010/servico');

        setLista(resp.data);
    }

    async function excluir(id) {
        await axios.delete('http://localhost:3010/servico/' + id);
        alert(`Registro de ${id} excluído`);

        await buscar();
    }

    //LÓGICA PARA O PORTFÓLIO
    const [listaPortfolio, setListaPortfolio] = useState([{
        "id_portfolio": 1,
        "imagem": "/assets/images/projetos-notaveis-2.png",
        "titulo": "Getulio Vargas",
        "descricao": "TEXT",
        "data_realizacao": "2024-03-04"
    }]);
    const [visibleCount, setVisibleCount] = useState(4); // Número de projetos visíveis inicialmente

    const [atualizarListaPortfolio, setAtualizarListaPortfolio] = useState(false); // Estado para controlar atualização

    useEffect(() => {
        if (localStorage.getItem('TOKEN') == undefined) {
            navigate('/login');
        }
        buscarPortfolio();
    }, [atualizarListaPortfolio]); // Dependendo de atualizarLista

    useEffect(() => {
        // Verifica se o estado de atualização foi passado
        if (location.state && location.state.refresh) {
            setAtualizarListaPortfolio(true); // Atualiza a lista
        }
    }, [location.state]);

    async function buscarPortfolio() {
        let resp = await axios.get('http://localhost:3010/portfolio');
        setListaPortfolio(resp.data);
        setAtualizarListaPortfolio(false); // Reseta a flag de atualização
    }

    async function buscarPortfolio() {
        let resp = await axios.get('http://localhost:3010/portfolio');

        setListaPortfolio(resp.data);
    }

    async function excluirPortfolio(id) {
        await axios.delete('http://localhost:3010/portfolio/' + id);
        alert(`Registro de ${id} excluído`);

        await buscarPortfolio();
    }

    // Função para mostrar todos os projetos
    const showAll = () => {
        setVisibleCount(listaPortfolio.length); // Mostrar todos os projetos
    };



    //LÓGICA PARA A MENSAGEM
    const [listaMensagem, setListaMensagem] = useState([{
        "id_mensagem": 1,
        "nome": "Mike Ehrmantraut",
        "email": "mikeehrmantraut@gmail.com",
        "assunto": "Photoshop",
        "corpo_mensagem": "faça.",
        "data_mensagem": "2025-03-04"
    }]);

    const [atualizarListaMensagem, setAtualizarListaMensagem] = useState(false); // Estado para controlar atualização

    useEffect(() => {
        if (localStorage.getItem('TOKEN') == undefined) {
            navigate('/login');
        }
        buscarMensagem();
    }, [atualizarListaMensagem]); // Dependendo de atualizarLista

    useEffect(() => {
        // Verifica se o estado de atualização foi passado
        if (location.state && location.state.refresh) {
            setAtualizarListaMensagem(true); // Atualiza a lista
        }
    }, [location.state]);

    async function buscarMensagem() {
        let resp = await axios.get('http://localhost:3010/mensagem');
        setListaMensagem(resp.data);
        setAtualizarListaMensagem(false); // Reseta a flag de atualização
    }

    async function buscarMensagem() {
        let resp = await axios.get('http://localhost:3010/mensagem');

        setListaMensagem(resp.data);
    }

    async function excluirMensagem(id) {
        await axios.delete('http://localhost:3010/mensagem/' + id);
        alert(`Registro de ${id} excluído`);

        await buscarMensagem();
    }



    return (
        <div id='portfolio'className='pagina-home-admin' isAdmin={true}>
            <Cabecalho isAdmin={true} />

            <section  className='adicionar-portfolio'>
                <span className='titulo'>
                    <h1> Projetos Notáveis </h1>

                    <button onClick={() => navigate('/criar-portfolio')} className='botao-criar'>

                        <img src='/assets/images/criar.png' className='botao-criar' alt='criar' />
                    </button>
                </span>



                <div className='portfolio-container'>
                    {listaPortfolio.slice(0, visibleCount).map((projetos) => (
                        <div className='projeto'>
                            <Card
                                imagem={projetos.imagem}
                                titulo={projetos.titulo}
                                descricao={projetos.descricao}
                                data_realizacao={new Date(projetos.data_realizacao).toLocaleDateString()}
                                onEdit={() => navigate('/criar-portfolio/' + projetos.id)}
                                onDelete={() => excluirPortfolio(projetos.id)}
                            />
                        </div>
                    ))}
                </div>
                {/*USAMOS O LAZY LOADING PARA FAZER A LOGICA DE VER MAIS */}
                {visibleCount < listaPortfolio.length && (
                    <button className='botao-projetos' onClick={showAll}>
                        Ver Todos
                    </button>
                )}
            </section>


            <div id='agenda' className='agenda-servicos'>
                <span className='titulo'>
                    <h1> Agenda de Serviços </h1>

                    <button onClick={() => navigate('/criar-servico')} className='botao-criar'>

                        <img src='/assets/images/criar.png' className='botao-criar' alt='criar' />
                    </button>
                    {/* <Link to={/criarservico}/> */}
                </span>
                <div className='linha-barra-pesquisa'>
                    <div className='barra-pesquisa'>
                        <p> Insira um nome... </p>
                        <img src='/assets/images/lupa.png' alt='lupa' />
                    </div>
                    <img src='/assets/images/filtro.png' alt='filtrar' />
                </div>

                <div className='lista-servicos'>
                    {lista.map(item => {
                        return (
                            <div className='lista-servicos-servico'>
                                <span className='linha'>
                                    <h2 className='titulo-servico'> {item.titulo} </h2>

                                    <p className='status-servico'> {item.status} </p>

                                </span>
                                <p className='cliente'> Cliente: {item.nomeCliente} </p>
                                <p className='tag-tarefa'> Tag: {item.tag} </p>

                                <span className='servico-botoes'>
                                    <p className='data-entrega'> Data de Entrega: {new Date(item.dataEntrega).toLocaleDateString()}</p>
                                    <div className='botoes'>
                                        <img onClick={() => navigate('/criar-servico/' + item.id)} src='/assets/images/editar.png' className='botao-editar' alt='editar' />
                                        <img onClick={() => excluir(item.id)} src='/assets/images/excluir.png' className='botao-excluir' alt='excluir' />
                                    </div>
                                </span>


                            </div>
                        );
                    })}
                </div>


            </div>

            <section id='mensagens' className='mensagens-container'>
                <span className='titulo'>
                    <h1> Mensagens </h1>
                </span>
                <div className='linha-barra-pesquisa'>
                    <div className='barra-pesquisa'>
                        <p> Insira um nome... </p>
                        <img src='/assets/images/lupa.png' alt='lupa' />
                    </div>
                    <img src='/assets/images/filtro.png' alt='filtrar' />
                </div>

                <div className='lista-mensagens'>
                    {listaMensagem.map(mensagem => {
                        return (
                            <div className='lista-mensagens-mensagem'>
                                <div className='mensagem-info'>
                                    <p className='mensagem-nome-cliente'>{mensagem.nome}</p>
                                    <p className='mensagem-nome-cliente'>{mensagem.email}</p>
                                </div>

                                <div className='mensagem-info'>
                                    <p className='mensagem-assunto'>Assunto: {mensagem.assunto}</p>
                                </div>

                                <div className='mensagem-info'>
                                    <p className='status-servico'> {mensagem.status} </p>
                                    <p className='mensagem-data'>{mensagem.data_mensagem}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>




        </div>
    )
}