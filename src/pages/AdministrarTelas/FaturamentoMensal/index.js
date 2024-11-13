import Cabecalho from '../../../components/cabecalho';
import './index.scss';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2'


export default function FaturamentoMensal() {
    const token = localStorage.getItem('TOKEN');
    const dados = [
        {
            "label": "Ads",
            "value": 3
        },
        {
            "label": "Design",
            "value": 2
        }

    ]

    return (

        <body>
            <Cabecalho isAdmin={true} />

            <div className='pagina-faturamento-mensal'>
                <h1>
                    Faturamentos Mensales
                </h1>

                <div className='grafico'>
                    <Bar
                        data={{
                            labels: dados.map((data) => data.label),
                            datasets: [
                                {
                                    label: "Faturamento",
                                    data: dados.map((data) => data.value)
                                }
                            ]
                        }
                        }

                    />


                </div>
            </div>
        </body>

    )
}