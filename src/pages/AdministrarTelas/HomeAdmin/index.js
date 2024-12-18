import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import Card from '../../../components/cardPortfolio';
import { API_URL } from '../../../api/constantes';
import { Toaster, toast } from 'react-hot-toast';

import axios from 'axios';

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function HomeAdmin() {
    const navigate = useNavigate();
    const location = useLocation();

    // Lógica para o Serviço
    const [lista, setLista] = useState([]);
    const [visibleCountServico, setVisibleCountServico] = useState(4); // Número de serviços visíveis
    const [atualizarLista, setAtualizarLista] = useState(false);

    // Lógica para o Portfólio
    const [listaPortfolio, setListaPortfolio] = useState([]);
    const [visibleCountPortfolio, setVisibleCountPortfolio] = useState(4); // Número de projetos visíveis
    const [atualizarListaPortfolio, setAtualizarListaPortfolio] = useState(false);

    // Lógica para Mensagens
    const [listaMensagem, setListaMensagem] = useState([]);
    const [visibleCountMensagem, setVisibleCountMensagem] = useState(4); // Número de projetos visíveis
    const [atualizarListaMensagem, setAtualizarListaMensagem] = useState(false);

    const token = localStorage.getItem('TOKEN');

    useEffect(() => {
        if (!localStorage.getItem('TOKEN')) {
            navigate('/login');
        }
        buscarServicos();
        buscarPortfolio();
        buscarMensagens();
    }, [atualizarLista, atualizarListaPortfolio, atualizarListaMensagem]);

    useEffect(() => {
        if (location.state && location.state.refresh) {
            setAtualizarLista(true);
            setAtualizarListaPortfolio(true);
            setAtualizarListaMensagem(true);
        }
    }, [location.state]);

    // Buscar dados dos serviços
    async function buscarServicos() {
        let resp = await axios.get(`${API_URL}/servico`, {
            headers: { 'x-access-token': token }
        });
        setLista(resp.data);
        setAtualizarLista(false);
    }

    // Buscar dados do portfólio
    async function buscarPortfolio() {
        let resp = await axios.get(`${API_URL}/portfolio`, {
            headers: { 'x-access-token': token }
        });
        const portfoliosComImagem = resp.data.map(projeto => ({
            ...projeto,
            imagem: projeto.imagem ? `${API_URL}/${projeto.imagem}` : '/assets/images/placeholder.svg'
        }));
        setListaPortfolio(portfoliosComImagem);
        setAtualizarListaPortfolio(false);
    }

    // Buscar mensagens
    async function buscarMensagens() {
        let resp = await axios.get(`${API_URL}/mensagem`, {
            headers: { 'x-access-token': token }
        });
        setListaMensagem(resp.data);
        setAtualizarListaMensagem(false);
    }
    // Função para excluir serviço
    async function excluirServico(id) {
        await axios.delete(`${API_URL}/servico/${id}`, {
            headers: { 'x-access-token': token }
        });
        toast.success(`Serviço N° ${id} excluído com sucesso!`, {
            style: {
                border: '1px solid #28a745',
                padding: '16px',
                color: 'black',
            },
            iconTheme: {
                primary: '#28a745',
                secondary: '#D4EDDA',
            },
        });
        await buscarServicos();
    }

    // Função para excluir portfólio
    async function excluirPortfolio(id) {
        await axios.delete(`${API_URL}/portfolio/${id}`, {
            headers: { 'x-access-token': token }
        });
        toast.success(`Projeto N° ${id} excluído com sucesso!`, {
            style: {
                border: '1px solid #28a745',
                padding: '16px',
                color: 'black',
            },
            iconTheme: {
                primary: '#28a745',
                secondary: '#D4EDDA',
            },
        });
        await buscarPortfolio();
    }

    // Função para excluir mensagem
    async function excluirMensagem(id) {
        await axios.delete(`${API_URL}/mensagem/${id}`);
        alert(`Mensagem de ${id} excluída`);
        await buscarMensagens();
    }

    // Função de Lazy Loading para mostrar todos os serviços
    const showAllServicos = () => {
        setVisibleCountServico(lista.length); // Mostrar todos os serviços
    };

    // Função de Lazy Loading para mostrar todos os projetos do portfólio
    const showAllPortfolio = () => {
        setVisibleCountPortfolio(listaPortfolio.length); // Mostrar todos os projetos
    };
    // Função de Lazy Loading para mostrar todos os projetos da Mensagem
    const showAllMensagem = () => {
        setVisibleCountMensagem(listaMensagem.length); // Mostrar todos os projetos
    };

    return (
        <div id="portfolio" className="pagina-home-admin" isAdmin={true}>
            <Cabecalho isAdmin={true} />

            {/* Seção de Portfólio */}
            <section className="adicionar-portfolio">
                <span className="titulo">
                    <h1>Projetos Notáveis</h1>
                    <button onClick={() => navigate('/criar-portfolio')} className="botao-criar">
                        <img src="/assets/images/criar.png" className="botao-criar" alt="criar" />
                    </button>
                </span>

                <div className="portfolio-container">
                    {listaPortfolio.slice(0, visibleCountPortfolio).map((projetos) => (
                        <div className="projeto">
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

                {/* Lazy Loading para Portfólio */}
                {visibleCountPortfolio < listaPortfolio.length && (
                    <div className="botao-container">
                        <button className="botao-projetos" onClick={showAllPortfolio}>
                            Ver Todos
                        </button>
                    </div>
                )}
            </section>

            {/* Seção de Agenda de Serviços */}
            <div id="agenda" className="agenda-servicos">
                <span className="titulo">
                    <h1>Agenda de Serviços</h1>
                    <button onClick={() => navigate('/criar-servico')} className="botao-criar">
                        <img src="/assets/images/criar.png" className="botao-criar" alt="criar" />
                    </button>
                </span>

                {/* <div className="linha-barra-pesquisa">
                    <div className="barra-pesquisa">
                        <p>Insira um nome...</p>
                        <img src="/assets/images/lupa.png" alt="lupa" />
                    </div>
                </div> */}

                <div className="lista-servicos">
                    {lista.slice(0, visibleCountServico).map((item) => (
                        <div className="lista-servicos-servico" key={item.id}>
                            <span className="linha">
                                <h2 className="titulo-servico">{item.titulo}</h2>
                                <p className="status-servico">{item.status}</p>
                            </span>
                            <p className="cliente">Preço: R${item.preco}</p>
                            <p className="cliente">Cliente: {item.nomeCliente}</p>
                            <p className="tag-tarefa">Tag: {item.tag}</p>

                            <span className="servico-botoes">
                                <p className="data-entrega">
                                    Data de Entrega: {new Date(item.dataEntrega).toLocaleDateString()}
                                </p>
                                <div className="botoes">
                                    <img
                                        onClick={() => navigate('/criar-servico/' + item.id)}
                                        src="/assets/images/editar.png"
                                        className="botao-editar"
                                        alt="editar"
                                    />
                                    <img
                                        onClick={() => excluirServico(item.id)}
                                        src="/assets/images/excluir.png"
                                        className="botao-excluir"
                                        alt="excluir"
                                    />
                                </div>
                            </span>
                        </div>
                    ))}
                </div>

                {/* Lazy Loading para Serviços */}
                {visibleCountServico < lista.length && (
                    <div className="botao-container">
                        <button className="botao-servicos" onClick={showAllServicos}>
                            Ver Todos
                        </button>
                    </div>
                )}
            </div>

            {/* Seção de Mensagens */}
            <section id="mensagens" className="mensagens-container">
                <span className="titulo">
                    <h1>Mensagens</h1>
                </span>
                {/* <div className="linha-barra-pesquisa">
                    <div className="barra-pesquisa">
                        <p>Insira um nome...</p>
                        <img src="/assets/images/lupa.png" alt="lupa" />
                    </div>
                </div> */}

                <div className="lista-mensagens">
                    {listaMensagem.slice(0, visibleCountMensagem).map((mensagem) => (
                        <div className="talk-bubble" key={mensagem.id_mensagem}>
                            {/* Informações do Cliente */}
                            <div className="mensagem-info">
                                <p className="mensagem-nome-cliente">{mensagem.nome}</p>
                                <p className="mensagem-nome-cliente">{mensagem.email}</p>
                            </div>

                            {/* Assunto da Mensagem */}
                            <div className="mensagem-info">
                                <p className="mensagem-assunto">Assunto:</p>
                                <p > {mensagem.assunto}</p>
                            </div>

                            {/* Corpo da Mensagem */}
                            <div className="mensagem-info">
                                <p className="mensagem-assunto">Mensagem:</p>
                                <p className="mensagem-corpo"> {mensagem.corpoMensagem}</p>
                            </div>

                            {/* Status e Data da Mensagem */}
                            <div className="mensagem-info">
                                <p className="status-servico">{mensagem.status}</p>
                                <p className="mensagem-data">{new Date(mensagem.dataEnvio).toLocaleDateString()}</p>
                            </div>

                            {/* Triângulo da bolha */}
                            <div className="tri-right btm-left-in"></div>
                            <div className="botoes">

                                <img
                                    onClick={() => excluirMensagem(mensagem.id)}
                                    src="/assets/images/excluir.png"
                                    className="botao-excluir"
                                    alt="excluir"
                                />
                            </div>
                        </div>
                    ))}
                </div>


                {/* Lazy Loading para Mensagem */}
                {visibleCountMensagem < listaMensagem.length && (
                    <div className="botao-container">
                        <button className="botao-mensagem" onClick={showAllMensagem}>
                            Ver Todos
                        </button>
                    </div>
                )}
            </section>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
}
