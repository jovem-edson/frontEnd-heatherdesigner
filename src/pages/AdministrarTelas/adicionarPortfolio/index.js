import './index.scss';
import Cabecalho from '../../../components/cabecalho';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

/*
id_portfolio INT PRIMARY KEY AUTO_INCREMENT,
    imagem VARCHAR(255),
    titulo VARCHAR(255),
    descricao TEXT,
    data_realizacao DATE
);
*/

export default function AdicionarPortfolio() {
    const [imagem, setImagem] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataRealizacao, setDataRealizacao] = useState('');

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (id != undefined) {
            buscarPorId();
        }
    }, [])


    async function buscarPorId() {
        let token = localStorage.getItem('TOKEN');

        let resp = await axios.get('http://localhost:3010/portfolio/' + id, {
            headers: { 'x-access-token': token }
        });

        setImagem(resp.data.imagem);
        setTitulo(resp.data.titulo);
        setDescricao(resp.data.descricao);
        setDataRealizacao(resp.data.dataRealizacao.substr(0, 10));
    }


    async function salvar() {

        let body = {
            'imagem': imagem,
            'titulo': titulo,
            'descricao': descricao,
            'dataRealizacao': dataRealizacao
        }

        console.log(body)


        let token = localStorage.getItem('TOKEN');

        if (id == undefined) {
            let resp = await axios.post('http://localhost:3010/portfolio', body, { headers: { 'x-access-token': token } });
            // alert(`Registro de ID ${resp.data.novoId} adicionado`);
            navigate('/admin', { state: { refresh: true } });

        }
        else {
            let resp = await axios.put('http://localhost:3010/portfolio/' + id, body, { headers: { 'x-access-token': token } });
            // alert(`Registro de ID ${id} alterado`);
            navigate('/admin', { state: { refresh: true } });

        }


    }



    return (
        <div className='pagina-adicionar-portfolio' isAdmin={true}>
            <Cabecalho isAdmin={true} />

            <div className='criar-portfolio'>

                <span className='linha-voltar'>
                    <div className='spacer'>
                        <button onClick={() => navigate('/admin')} className='botao-criar'>
                            <img src='/assets/images/seta-voltar.png' className='botao-voltar' alt='voltar' />
                            <h2> Voltar </h2>
                        </button>
                    </div>
                    <div className='titulo-secao-portfolio'>
                    <h1>{id == undefined ? 'Adicionar Projeto' : 'Editar Projeto'}</h1>
                    </div>
                    <div className='spacer'>
                    </div>
                </span>



                <form className='formulario'>
                    <div class='container-formulario'>

                        <div>
                            <label for='titulo-portfolio'>Título do Projeto</label>
                                <input type="text" value={titulo} onChange={(e) => {
                                    setTitulo(e.target.value)
                                }} placeholder='Insira o título do projeto...' />
                        </div>

                        <div>
                            <label for='data-realizacao'>Data de Realização</label>

                                <input type="date" value={dataRealizacao} onChange={(e) => setDataRealizacao(e.target.value)} />
                        </div>

                        <div>
                            <label for='descricao'>Descrição do Projeto</label>
                                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder='Insira a descrição do projeto...' />
                        </div>

                        <Link to="/admin">

                            <button className='botao-salvar' onClick={salvar}> {id == undefined ? 'Salvar' : 'Alterar'} </button>

                        </Link>


                        {/*
                    <span className='linha'>
                        <div className='campo-input'>
                            <label className='legenda-input' for='titulo-servico'>
                                Título do Serviço
                            </label>
                            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} id="servico" name="titulo-servico" placeholder="Insira o título do projeto..." />
                        </div>

                        <div className='campo-input'>
                            <label className='legenda-input' for='data-entrega'>
                                Data de Entrega
                            </label>
                            <input type="date" value={dataEntrega} onChange={e => setDataEntrega(e.target.value)} id="data-entrega" name="data-entrega" placeholder="Insira a Data de Entrega" />
                        </div>

                    </span>

                    <span className='linha'>
                        <div className='campo-input'>
                            <label className='legenda-input' for='nome-cliente'>
                                Nome do Cliente
                            </label>
                            <input type="text" value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} id="nome" name="nome-cliente" placeholder="Insira o título do projeto..." />
                        </div>

                        <div className='campo-input'>
                            <label className='legenda-input' for="tag"> Tag da Tarefa:</label>
                            <select id="status" value={tag} onChange={e => setTag(e.target.value)} name="tag">
                                <option value="Design Gráfico">Design Gráfico</option>
                                <option value="Design Digital">Design Digital</option>
                            </select></div>

                        <div className='campo-input'>
                            <label className='legenda-input' for="status">Status:</label>
                            <select id="status" value={status} onChange={e => setStatus(e.target.value)} name="status">
                                <option value="Não Iniciado">Não Iniciado</option>
                                <option value="Em Andamento">Em Andamento</option>
                                <option value="Concluído">Concluído</option>
                            </select>
                        </div>
                    </span>

                    <Link to="/admin">

                    <button className='botao-salvar' onClick={salvar}> {id == undefined ? 'Salvar' : 'Alterar'} </button>

                    </Link> */}
                    </div>

                    <div className='container-imagem'>
                        <label for='descricao'>Imagem do Projeto</label>
                        <div className='placeholder'>
                            <img src='/assets/images/placeholder.svg' alt='enviar-imagem' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}