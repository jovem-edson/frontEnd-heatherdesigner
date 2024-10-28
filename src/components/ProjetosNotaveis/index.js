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
                <a> 
                <img src='/assets/images/criar.png' className='botao-criar' alt='criar' />

                </a>
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
                                <p> {item.titulo_tarefa} </p>
                                <p> {item.cliente} </p>
                                <p> {item.tag_tarefa} </p>
                                <p> Entrega: {new Date(item.data_entrega).toLocaleDateString()}</p>
                            </div>

                            <div className='servico-direita'>

                                <select name="status" id="status">
                                    <option value={item.status}> {item.status} </option>
                                    <option value="Em Andamento"> Em andamento </option>
                                    <option value="Entregue"> Entregue </option>
                                </select>
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