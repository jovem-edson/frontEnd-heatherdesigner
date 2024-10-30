import axios from 'axios'

import { useEffect, useState } from 'react'
import './index.scss'
import { Link, useNavigate } from 'react-router-dom';

export default function ProjetosNotaveis() {
    const [lista, setLista] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        buscar()
        console.log(lista)
    }, [])

    async function buscar() {
        let resp = await axios.get('http://localhost:3010/servico');

        setLista(resp.data);
    }

    async function excluir(id) {
        await axios.delete('http://localhost:3010/servico/' + id);
        alert('Registro excluído');

        await buscar();
    }


    return (
        <div className='componente-servicos'>
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
                            <div className='servico-esquerda'>
                                <h2 className='titulo-servico'> {item.titulo_tarefa} </h2>
                                <h3 className='cliente'> {item.cliente} </h3>
                                <h4 className='tag-tarefa'> {item.tag_tarefa} </h4>
                                <h3 className='data-entrega'> Entrega: {new Date(item.data_entrega).toLocaleDateString()}</h3>
                            </div>

                            <div className='servico-direita'>

                                    <p className='status-servico'> {item.status} </p>

                        <span className='servico-botoes'>
                                <img src='/assets/images/editar.png' className='botao-editar' alt='editar' />
                                <img src='/assets/images/excluir.png' className='botao-excluir' alt='excluir' />
</span>
                            </div>


                        </div>
                    );
                })}
            </div>


        </div>
    )
}