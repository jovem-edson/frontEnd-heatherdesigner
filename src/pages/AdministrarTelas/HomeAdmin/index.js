import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import axios from 'axios'

import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function HomeAdmin() {
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
    return (
        <div className='pagina-home-admin' isAdmin={true}>
            <Cabecalho isAdmin={true} />
            <div className='agenda-servicos'>
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
        </div>
    )
}