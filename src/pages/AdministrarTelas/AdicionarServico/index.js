import './index.scss';
import Cabecalho from '../../../components/cabecalho';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { API_URL } from '../../../api/constantes';

import { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdicionarServico() {
    const [titulo, setTitulo] = useState('');
    const [dataEntrega, setDataEntrega] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');
    const [preco, setPreco] = useState(0);
    const [status, setStatus] = useState('Não Iniciado');
    const [tag, setTag] = useState('Design Gráfico');

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (id != undefined) {
            buscarPorId();
        }
    }, [])


    async function buscarPorId() {
        let token = localStorage.getItem('TOKEN');

        let resp = await axios.get(`${API_URL}/servico/` + id, {
            headers: { 'x-access-token': token }
        });

        setTitulo(resp.data.titulo);
        setNomeCliente(resp.data.nomeCliente);
        setPreco(resp.data.preco);
        setDataEntrega(resp.data.dataEntrega.substr(0, 10));
        setStatus(resp.data.status);
        setTag(resp.data.tag);
    }


    async function salvar() {

        if(titulo == "" || nomeCliente == "" || preco < 10 || tag == "" || status == "" || dataEntrega == "") {
            if(dataEntrega == "") {
                toast.warn('O campo de data de entrega deve ser preenchido.');
            }
            
            if(status == "") {
                toast.warn('O campo de status deve ser preenchido.');
            }
            
            if(tag == "") {
                toast.warn('O campo de tag deve ser preenchido.');
            }
            
            if(preco < 10) {
                toast.warn('O campo de preço deve ser preenchido com um valor maior que 10.');
            }

            if(nomeCliente == "") {
                toast.warn('O campo de nome do cliente deve ser preenchido.');
            }
            
            if(titulo == "") {
                toast.warn('O campo de título deve ser preenchido.');
            }

            return
        } 

        let body = {
            'titulo': titulo,
            'nomeCliente': nomeCliente,
            'preco':preco,
            'tag': tag,
            'status': status,
            'dataEntrega': dataEntrega
        }

        console.log(body)


        let token = localStorage.getItem('TOKEN');

        if (id == undefined) {
            let resp = await axios.post(`${API_URL}/servico`, body, { headers: { 'x-access-token': token } });
            // alert(`Registro de ID ${resp.data.novoId} adicionado`);
            toast.success(`Serviço N° ${resp.data.novoId} Adicionado com sucesso!`, {
                position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            
            navigate('/admin', { state: { refresh: true } });

        }
        else {
            let resp = await axios.put(`${API_URL}/servico/` + id, body, { headers: { 'x-access-token': token } });
            // alert(`Registro de ID ${id} alterado`);
            toast.success(`Serviço N° ${id} Alterado com sucesso!!`, {
                position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            navigate('/admin', { state: { refresh: true } });

        }


    }



    return (
        <div className='pagina-adicionar-servico' isAdmin={true}>
            <Cabecalho isAdmin={true} />
            <ToastContainer />
            <div className='criar-servico'>

                <span className='linha-voltar'>
                    <div className='spacer'>
                        <button onClick={() => navigate('/admin')} className='botao-criar'>
                            <img src='/assets/images/seta-voltar.png' className='botao-voltar' alt='voltar' />
                            <h2> Voltar </h2>
                        </button>
                    </div>
                    <h1>{id == undefined ? 'Adicionar Serviço' : 'Editar Serviço'}</h1>
                    <div className='spacer'>
                    </div>
                </span>


                <form onSubmit={e => {
                    e.preventDefault(); // Impede o envio padrão para que você possa controlar a lógica de salvar
                    salvar(); // Chama a função de salvar
                }}>
                    <span className='linha'>
                        <div className='campo-input'>
                            <label className='legenda-input' for='titulo-servico'>
                                Título do Serviço*
                            </label>
                            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} id="servico" name="titulo-servico" placeholder="Insira o título do serviço..." />
                        </div>

                        <div className='campo-input'>
                            <label className='legenda-input' for='data-entrega'>
                                Data de Entrega*
                            </label>
                            <input type="date" value={dataEntrega} onChange={e => setDataEntrega(e.target.value)} id="data-entrega" name="data-entrega" />
                        </div>

                        <div className='campo-input'>
                            <label className='legenda-input' for='nome-cliente'>
                                Nome do Cliente*
                            </label>
                            <input type="text" value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} id="nome" name="nome-cliente" placeholder="Insira o nome do cliente..." />
                        </div>
                    </span>

                    <span className='linha'>
                        <div className='campo-input'>
                            <label className='legenda-input' for='preco'>
                                Preço do Serviço (R$)*
                            </label>
                            <input type="number" max="20000" value={preco} onChange={e => setPreco(e.target.value)} id="preco" name="preco" placeholder="Preço do serviço" />
                        </div>

                        <div className='campo-input'>
                            <label className='legenda-input' for="tag"> Tag da Tarefa*</label>
                            <select id="status" value={tag} onChange={e => setTag(e.target.value)} name="tag">
                                <option value="Design Gráfico">Design Gráfico</option>
                                <option value="Design Digital">Design Digital</option>
                            </select></div>

                        <div className='campo-input'>
                            <label className='legenda-input' for="status">Status*</label>
                            <select id="status" value={status} onChange={e => setStatus(e.target.value)} name="status">
                                <option value="Não Iniciado">Não Iniciado</option>
                                <option value="Em Andamento">Em Andamento</option>
                                <option value="Concluído">Concluído</option>
                            </select>
                        </div>
                    </span>


                        <button type="submit" className='botao-salvar'>
                            {id == undefined ? 'Salvar' : 'Alterar'}
                        </button>
                </form>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    )
}