import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar} from 'react-chartjs-2'

import { API_URL } from '../../../api/constantes';

import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

import { useEffect, useState } from 'react';

export default function FaturamentoMensal() {
    const token = localStorage.getItem('TOKEN');
    const location = useLocation();
    const navigate = useNavigate();

 // Lógica para o Serviço
 const [listaFaturamento, setListaFaturamento] = useState([
    
        {
            "label": "Ads",
            "value": 3
        },
        {
            "label": "Design",
            "value": 2
        }

    ]
 );
 const [atualizarListaFaturamento, setAtualizarListaFaturamento] = useState(false);

 useEffect(() => {
    if (!localStorage.getItem('TOKEN')) {
        navigate('/login');
    }
    buscarFaturamento();
}, [atualizarListaFaturamento]);

useEffect(() => {
    if (location.state && location.state.refresh) {
        setAtualizarListaFaturamento(true);
    }
}, [location.state]);

// Buscar dados dos serviços
async function buscarFaturamento() {
    let resp = await axios.get(`${API_URL}/faturamento`, {
        headers: { 'x-access-token': token }
    });
    setListaFaturamento(resp.data);
    setAtualizarListaFaturamento(false);
}



    return (

        <body>
            <Cabecalho isAdmin={true} />

            <div className='pagina-faturamento-mensal'>
                <h1>
                    Faturamentos Mensais
                </h1>

                <div className='grafico'>
                    <Bar
                    
                        data={{
                            labels: listaFaturamento.map((data) => data.mesAno),
                            datasets: [
                                {
                                    label: "Faturamento (R$)",
                                    data: listaFaturamento.map((data) => data.valorFaturamentoMensal),
                                    backgroundColor: [
                                        "#433D4A",
                                    ],
                                    borderRadius:5
                                }
                            ]
                        }}

                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Mês/Ano'
                                    }
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: 'Faturamento (R$)'
                                    }
                                }
                            },
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top', // Posição horizontal (top, bottom, left, right)
                                    labels: {
                                        boxWidth: 20,
                                        boxHeight: 20,
                                        padding: 10
                                    }
                                }
                            }
                        }}

                        

                    />


                </div>
            </div>
        </body>

    )
}